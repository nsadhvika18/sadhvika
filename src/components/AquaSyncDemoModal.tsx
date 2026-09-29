import React, { useState, useEffect } from 'react';
import {
  X,
  Droplets,
  Power,
  Activity,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Cpu,
  RefreshCw,
  Sliders,
  ShieldAlert,
} from 'lucide-react';

interface AquaSyncDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LogEntry {
  id: string;
  time: string;
  level: number;
  motorState: 'ON' | 'OFF';
  note: string;
}

export const AquaSyncDemoModal: React.FC<AquaSyncDemoModalProps> = ({ isOpen, onClose }) => {
  const [waterLevel, setWaterLevel] = useState<number>(45);
  const [isMotorOn, setIsMotorOn] = useState<boolean>(false);
  const [isAutoMode, setIsAutoMode] = useState<boolean>(true);
  const [isSimulating, setIsSimulating] = useState<boolean>(true);
  const [deviceConnected, setDeviceConnected] = useState<boolean>(true);
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      id: '1',
      time: '10:00:15',
      level: 45,
      motorState: 'OFF',
      note: 'Demo mode initialized. Sensor connected in simulated test environment.',
    },
  ]);

  // Simulation timer
  useEffect(() => {
    if (!isOpen || !isSimulating) return;

    const interval = setInterval(() => {
      setWaterLevel((prev) => {
        let delta = isMotorOn ? 4 : -1.5;
        let next = Math.round(Math.min(100, Math.max(5, prev + delta)));

        // Automatic control logic
        if (isAutoMode) {
          if (next >= 90 && isMotorOn) {
            setIsMotorOn(false);
            addLog(next, 'OFF', 'Auto cut-off: Tank is 90%+ full. Motor stopped to prevent overflow.');
          } else if (next <= 20 && !isMotorOn) {
            setIsMotorOn(true);
            addLog(next, 'ON', 'Auto trigger: Low water level (<20%). Motor started.');
          }
        }
        return next;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [isOpen, isSimulating, isMotorOn, isAutoMode]);

  const addLog = (level: number, motor: 'ON' | 'OFF', note: string) => {
    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0];
    setLogs((prev) => [
      {
        id: Math.random().toString(36).slice(2, 9),
        time: timeStr,
        level,
        motorState: motor,
        note,
      },
      ...prev.slice(0, 7),
    ]);
  };

  const handleManualMotorToggle = () => {
    const newState = !isMotorOn;
    setIsMotorOn(newState);
    addLog(
      waterLevel,
      newState ? 'ON' : 'OFF',
      `Manual motor command: User toggled motor ${newState ? 'ON' : 'OFF'}`
    );
  };

  const handleSliderChange = (newVal: number) => {
    setWaterLevel(newVal);
    if (isAutoMode) {
      if (newVal >= 90 && isMotorOn) {
        setIsMotorOn(false);
        addLog(newVal, 'OFF', 'Auto cut-off triggered by simulated sensor value.');
      } else if (newVal <= 20 && !isMotorOn) {
        setIsMotorOn(true);
        addLog(newVal, 'ON', 'Auto start triggered by simulated low water level.');
      }
    }
  };

  if (!isOpen) return null;

  const getTankStatus = (level: number) => {
    if (level >= 90) return { label: 'Near Full / Overflow Alert', color: 'text-amber-700 bg-amber-50 border-amber-200' };
    if (level >= 60) return { label: 'Normal / Optimum', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
    if (level >= 25) return { label: 'Moderate', color: 'text-sky-700 bg-sky-50 border-sky-200' };
    return { label: 'Low / Refill Needed', color: 'text-rose-700 bg-rose-50 border-rose-200' };
  };

  const currentStatus = getTankStatus(waterLevel);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/75 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-zinc-200 overflow-hidden animate-in fade-in duration-150">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 bg-zinc-50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center shadow-xs">
              <Droplets className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-zinc-950">AquaSync Simulator</h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-xs bg-sky-100 text-sky-800 border border-sky-200">
                  Demo Mode
                </span>
              </div>
              <p className="text-xs text-zinc-500">
                Interactive prototype demonstrating smart water tank monitoring & automatic motor control logic.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-200 rounded-md transition-colors"
            aria-label="Close demo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Top Status Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 bg-zinc-50 rounded-lg border border-zinc-200/80 flex items-center justify-between">
              <span className="text-xs text-zinc-500">Sensor Status</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Simulated Ready
              </span>
            </div>

            <div className="p-3 bg-zinc-50 rounded-lg border border-zinc-200/80 flex items-center justify-between">
              <span className="text-xs text-zinc-500">Control Mode</span>
              <button
                onClick={() => setIsAutoMode(!isAutoMode)}
                className={`text-xs font-semibold px-2 py-0.5 rounded border transition-colors cursor-pointer ${
                  isAutoMode
                    ? 'bg-zinc-900 text-white border-zinc-900'
                    : 'bg-white text-zinc-700 border-zinc-300'
                }`}
              >
                {isAutoMode ? 'Automatic' : 'Manual'}
              </button>
            </div>

            <div className="p-3 bg-zinc-50 rounded-lg border border-zinc-200/80 flex items-center justify-between">
              <span className="text-xs text-zinc-500">Live Simulation</span>
              <button
                onClick={() => setIsSimulating(!isSimulating)}
                className="text-xs font-medium text-zinc-700 hover:text-zinc-950 flex items-center gap-1"
              >
                <RefreshCw className={`w-3 h-3 ${isSimulating ? 'animate-spin text-sky-600' : ''}`} />
                {isSimulating ? 'Active' : 'Paused'}
              </button>
            </div>
          </div>

          {/* Main Visual: Tank + Controls */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center bg-zinc-50/50 p-6 rounded-xl border border-zinc-200/80">
            {/* Visual Tank Graphic */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-36 h-48 rounded-xl border-3 border-zinc-700 bg-white shadow-inner overflow-hidden flex flex-col justify-end">
                {/* Level Measurement Grid */}
                <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-1.5 opacity-30 text-[9px] font-mono">
                  <span>100% (High Alert)</span>
                  <span>75%</span>
                  <span>50%</span>
                  <span>25%</span>
                  <span>0% (Low Alert)</span>
                </div>

                {/* Animated Water Fill */}
                <div
                  className="w-full bg-gradient-to-t from-sky-600 to-sky-400 transition-all duration-700 relative overflow-hidden"
                  style={{ height: `${waterLevel}%` }}
                >
                  <div className="absolute inset-x-0 top-0 h-2 bg-white/40 animate-pulse" />
                </div>
              </div>

              {/* Water Percentage Display */}
              <div className="mt-3 text-center">
                <span className="text-2xl font-bold font-mono text-zinc-950 tabular-nums">
                  {waterLevel}%
                </span>
                <span className="block text-xs text-zinc-500">Current Water Level</span>
              </div>
            </div>

            {/* Controls & Metrics */}
            <div className="md:col-span-7 space-y-4">
              {/* Tank Status alert pill */}
              <div>
                <span className="text-xs text-zinc-500 block mb-1">Tank Status:</span>
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold ${currentStatus.color}`}>
                  {waterLevel >= 90 ? (
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                  ) : (
                    <Activity className="w-4 h-4 shrink-0" />
                  )}
                  <span>{currentStatus.label}</span>
                </div>
              </div>

              {/* Motor State Card */}
              <div className="p-4 bg-white rounded-lg border border-zinc-200 shadow-2xs flex items-center justify-between">
                <div>
                  <span className="text-xs text-zinc-500 block">Pumping Motor Status</span>
                  <span className={`text-base font-bold flex items-center gap-1.5 mt-0.5 ${
                    isMotorOn ? 'text-emerald-600' : 'text-zinc-600'
                  }`}>
                    <Power className="w-4 h-4" />
                    {isMotorOn ? 'MOTOR RUNNING (Filling Tank)' : 'MOTOR OFF (Idle)'}
                  </span>
                </div>

                <button
                  onClick={handleManualMotorToggle}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors shadow-xs ${
                    isMotorOn
                      ? 'bg-rose-600 hover:bg-rose-700 text-white'
                      : 'bg-zinc-900 hover:bg-zinc-800 text-white'
                  }`}
                >
                  {isMotorOn ? 'Stop Motor' : 'Start Motor'}
                </button>
              </div>

              {/* Manual Level Slider */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between text-xs text-zinc-600">
                  <span className="flex items-center gap-1">
                    <Sliders className="w-3.5 h-3.5 text-zinc-400" />
                    Simulate Sensor Reading:
                  </span>
                  <span className="font-mono font-medium">{waterLevel}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  value={waterLevel}
                  onChange={(e) => handleSliderChange(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                />
                <span className="text-[11px] text-zinc-400 block">
                  Drag slider to test how the system reacts to abrupt water level changes.
                </span>
              </div>
            </div>
          </div>

          {/* Automatic Logic Description Note */}
          <div className="p-3.5 bg-sky-50/70 border border-sky-200/80 rounded-lg text-xs text-sky-950 space-y-1">
            <span className="font-semibold block">Automatic Protection Logic:</span>
            <ul className="list-disc list-inside space-y-0.5 text-sky-900">
              <li><strong>Overflow Cut-off:</strong> When level hits $\ge 90\%$, motor turns OFF automatically to eliminate water wastage.</li>
              <li><strong>Dry-Run / Low-Level Trigger:</strong> When level drops $\le 20\%$, motor automatically switches ON to replenish the tank.</li>
              <li><strong>Hardware Adaptability:</strong> Controller logic is decoupled so it can seamlessly connect with ultrasonic (HC-SR04), float sensors, and microcontrollers (ESP32/Arduino) once hardware selection is finalized.</li>
            </ul>
          </div>

          {/* Activity / Event Log */}
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-zinc-500 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              Real-time Event History
            </span>

            <div className="bg-white border border-zinc-200 rounded-lg overflow-hidden">
              <div className="divide-y divide-zinc-100 text-xs">
                {logs.map((log) => (
                  <div key={log.id} className="p-2.5 flex items-center justify-between gap-3 hover:bg-zinc-50">
                    <div className="flex items-center gap-2 overflow-hidden">
                      <span className="font-mono text-zinc-400 text-[11px] shrink-0">
                        {log.time}
                      </span>
                      <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold shrink-0 ${
                        log.motorState === 'ON' ? 'bg-emerald-100 text-emerald-800' : 'bg-zinc-100 text-zinc-600'
                      }`}>
                        MOTOR {log.motorState}
                      </span>
                      <span className="text-zinc-700 truncate">{log.note}</span>
                    </div>
                    <span className="font-mono text-zinc-900 font-semibold shrink-0">
                      {log.level}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-zinc-200 bg-zinc-50 flex items-center justify-between">
          <span className="text-xs text-zinc-500">
            AquaSync — Smart Water Management Prototype
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-md transition-colors"
          >
            Close Demo
          </button>
        </div>
      </div>
    </div>
  );
};
