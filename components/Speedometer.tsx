'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import {
  type SpeedUnit,
  type GpsState,
  type TripData,
  convertSpeed,
  getUnitLabel,
  getMaxSpeedForUnit,
  haversineDistance,
  smoothSpeed,
  isRealisticSpeed,
  isStationary,
  createTripData,
  getElapsedTime,
  getAverageSpeedMs,
  formatDuration,
  formatDistance,
  isGeolocationAvailable,
  watchPosition,
  clearWatch,
  getGpsErrorMessage,
  getGpsErrorStatus,
  requestWakeLock,
  SMOOTHING_FACTOR,
  MIN_ACCURACY_THRESHOLD,
} from '@/lib/gps-engine';

// ============================================
// Sub-components
// ============================================

function AnalogGauge({
  speed,
  maxSpeed,
  unit,
}: {
  speed: number;
  maxSpeed: number;
  unit: SpeedUnit;
}) {
  const maxGauge = getMaxSpeedForUnit(unit);
  const displaySpeed = convertSpeed(speed, unit);
  const clampedSpeed = Math.min(displaySpeed, maxGauge);

  // Gauge arc: 270 degrees, from -225 to 45
  const startAngle = -225;
  const endAngle = 45;
  const totalAngle = endAngle - startAngle; // 270
  const needleAngle = startAngle + (clampedSpeed / maxGauge) * totalAngle;

  // Generate tick marks
  const numMajorTicks = 10;
  const ticks = [];
  for (let i = 0; i <= numMajorTicks; i++) {
    const angle = startAngle + (i / numMajorTicks) * totalAngle;
    const rad = (angle * Math.PI) / 180;
    const isActive = (i / numMajorTicks) * maxGauge <= clampedSpeed;

    // Outer point
    const ox = 100 + 78 * Math.cos(rad);
    const oy = 100 + 78 * Math.sin(rad);
    // Inner point
    const isMajor = i % 2 === 0;
    const innerLen = isMajor ? 68 : 72;
    const ix = 100 + innerLen * Math.cos(rad);
    const iy = 100 + innerLen * Math.sin(rad);

    ticks.push(
      <line
        key={`tick-${i}`}
        x1={ix}
        y1={iy}
        x2={ox}
        y2={oy}
        stroke={isActive ? 'var(--brand-primary)' : 'rgba(255,255,255,0.2)'}
        strokeWidth={isMajor ? 2 : 1}
        strokeLinecap="round"
        style={{ transition: 'stroke 0.3s' }}
      />
    );

    // Labels for major ticks
    if (isMajor) {
      const lx = 100 + 60 * Math.cos(rad);
      const ly = 100 + 60 * Math.sin(rad);
      const labelValue = Math.round((i / numMajorTicks) * maxGauge);
      ticks.push(
        <text
          key={`label-${i}`}
          x={lx}
          y={ly}
          fill={isActive ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.35)'}
          fontSize="7"
          fontWeight="500"
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily="var(--font-geist-sans), system-ui"
          style={{ transition: 'fill 0.3s' }}
        >
          {labelValue}
        </text>
      );
    }
  }

  // Active arc
  const arcAngle = ((clampedSpeed / maxGauge) * totalAngle * Math.PI) / 180;
  const arcStartRad = (startAngle * Math.PI) / 180;
  const arcEndRad = arcStartRad + arcAngle;
  const arcRadius = 82;

  const arcStartX = 100 + arcRadius * Math.cos(arcStartRad);
  const arcStartY = 100 + arcRadius * Math.sin(arcStartRad);
  const arcEndX = 100 + arcRadius * Math.cos(arcEndRad);
  const arcEndY = 100 + arcRadius * Math.sin(arcEndRad);
  const largeArc = arcAngle > Math.PI ? 1 : 0;

  return (
    <div className="relative w-full max-w-[320px] md:max-w-[380px] mx-auto aspect-square">
      <svg viewBox="0 0 200 200" className="w-full h-full" role="img" aria-label={`Speed gauge showing ${displaySpeed.toFixed(1)} ${getUnitLabel(unit)}`}>
        {/* Background circle */}
        <circle cx="100" cy="100" r="96" fill="var(--speed-gauge-bg)" />
        <circle cx="100" cy="100" r="96" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

        {/* Background arc */}
        <path
          d={`M ${100 + 82 * Math.cos(arcStartRad)} ${100 + 82 * Math.sin(arcStartRad)} A 82 82 0 1 1 ${100 + 82 * Math.cos((endAngle * Math.PI) / 180)} ${100 + 82 * Math.sin((endAngle * Math.PI) / 180)}`}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Active arc */}
        {clampedSpeed > 0 && (
          <path
            d={`M ${arcStartX} ${arcStartY} A ${arcRadius} ${arcRadius} 0 ${largeArc} 1 ${arcEndX} ${arcEndY}`}
            fill="none"
            stroke="var(--brand-primary)"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.8"
            style={{ transition: 'd 0.15s ease-out' }}
          />
        )}

        {/* Tick marks and labels */}
        {ticks}

        {/* Needle */}
        <g style={{ transition: 'transform 0.15s ease-out', transformOrigin: '100px 100px', transform: `rotate(${needleAngle + 90}deg)` }}>
          <line x1="100" y1="108" x2="100" y2="26" stroke="var(--brand-primary)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="100" cy="100" r="5" fill="var(--brand-primary)" />
          <circle cx="100" cy="100" r="3" fill="var(--speed-gauge-bg)" />
        </g>
      </svg>

      {/* Center speed readout */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
        <span
          className="text-5xl md:text-6xl font-bold tabular-nums tracking-tight"
          style={{ color: '#fff', fontFamily: 'var(--font-geist-mono), monospace' }}
        >
          {displaySpeed.toFixed(1)}
        </span>
        <span className="text-sm font-medium mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
          {getUnitLabel(unit)}
        </span>
      </div>

      {/* Max speed badge */}
      {maxSpeed > 0 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
          style={{ backgroundColor: 'rgba(0,212,170,0.12)', color: 'var(--brand-primary)' }}
        >
          <span>MAX</span>
          <span className="tabular-nums" style={{ fontFamily: 'var(--font-geist-mono)' }}>
            {convertSpeed(maxSpeed, unit).toFixed(1)}
          </span>
          <span>{getUnitLabel(unit)}</span>
        </div>
      )}
    </div>
  );
}

function DigitalDisplay({
  speed,
  maxSpeed,
  unit,
}: {
  speed: number;
  maxSpeed: number;
  unit: SpeedUnit;
}) {
  const displaySpeed = convertSpeed(speed, unit);
  const displayMax = convertSpeed(maxSpeed, unit);

  return (
    <div className="w-full max-w-[400px] mx-auto flex flex-col items-center gap-4 py-8 md:py-12">
      <div
        className="w-full rounded-2xl p-8 md:p-12 text-center"
        style={{ backgroundColor: 'var(--speed-gauge-bg)' }}
      >
        <span
          className="text-7xl md:text-8xl lg:text-9xl font-bold tabular-nums tracking-tighter"
          style={{ color: '#fff', fontFamily: 'var(--font-geist-mono), monospace' }}
        >
          {displaySpeed.toFixed(1)}
        </span>
        <div className="text-lg font-medium mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
          {getUnitLabel(unit)}
        </div>
      </div>

      {maxSpeed > 0 && (
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
          style={{ backgroundColor: 'rgba(0,212,170,0.12)', color: 'var(--brand-primary)' }}
        >
          <span>MAX</span>
          <span className="tabular-nums" style={{ fontFamily: 'var(--font-geist-mono)' }}>
            {displayMax.toFixed(1)} {getUnitLabel(unit)}
          </span>
        </div>
      )}
    </div>
  );
}

function GpsStatusBadge({ gpsState, accuracy }: { gpsState: GpsState; accuracy: number | null }) {
  let color = 'var(--text-tertiary)';
  let label = 'GPS Idle';
  let dotColor = 'var(--text-tertiary)';

  switch (gpsState.status) {
    case 'requesting':
      color = 'var(--status-warning)';
      dotColor = 'var(--status-warning)';
      label = 'Acquiring GPS…';
      break;
    case 'active':
      if (accuracy && accuracy > MIN_ACCURACY_THRESHOLD) {
        color = 'var(--status-warning)';
        dotColor = 'var(--status-warning)';
        label = `Low accuracy (±${Math.round(accuracy)}m)`;
      } else {
        color = 'var(--status-success)';
        dotColor = 'var(--status-success)';
        label = accuracy ? `GPS Active (±${Math.round(accuracy)}m)` : 'GPS Active';
      }
      break;
    case 'denied':
      color = 'var(--status-error)';
      dotColor = 'var(--status-error)';
      label = 'Permission Denied';
      break;
    case 'unavailable':
      color = 'var(--status-error)';
      dotColor = 'var(--status-error)';
      label = 'GPS Unavailable';
      break;
    case 'error':
      color = 'var(--status-error)';
      dotColor = 'var(--status-error)';
      label = 'GPS Error';
      break;
  }

  return (
    <div className="flex items-center gap-2 text-xs font-medium" style={{ color }}>
      <span
        className="w-2 h-2 rounded-full"
        style={{
          backgroundColor: dotColor,
          boxShadow: gpsState.status === 'active' ? `0 0 6px ${dotColor}` : 'none',
        }}
      />
      <span>{label}</span>
    </div>
  );
}

function TripStats({ trip, unit }: { trip: TripData; unit: SpeedUnit }) {
  const elapsed = getElapsedTime(trip);
  const avgSpeedMs = getAverageSpeedMs(trip);
  const distance = formatDistance(trip.distanceMeters);

  const stats = [
    { label: 'AVG Speed', value: `${convertSpeed(avgSpeedMs, unit).toFixed(1)}`, suffix: getUnitLabel(unit) },
    { label: 'Distance', value: distance.value, suffix: distance.unit },
    { label: 'Duration', value: formatDuration(elapsed), suffix: '' },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 w-full max-w-[400px] mx-auto">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl px-3 py-3 text-center"
          style={{ backgroundColor: 'var(--bg-tertiary)' }}
        >
          <div className="text-xs font-medium mb-1" style={{ color: 'var(--text-tertiary)' }}>
            {stat.label}
          </div>
          <div className="text-base font-semibold tabular-nums" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-geist-mono)' }}>
            {stat.value}
            {stat.suffix && <span className="text-xs font-normal ml-0.5" style={{ color: 'var(--text-tertiary)' }}>{stat.suffix}</span>}
          </div>
        </div>
      ))}
    </div>
  );
}

// ============================================
// Main Speedometer Component
// ============================================

export default function Speedometer() {
  // State
  const [gpsState, setGpsState] = useState<GpsState>({ status: 'idle' });
  const [currentSpeedMs, setCurrentSpeedMs] = useState(0);
  const [accuracy, setAccuracy] = useState<number | null>(null);
  const [unit, setUnit] = useState<SpeedUnit>('kmh');
  const [displayMode, setDisplayMode] = useState<'analog' | 'digital'>('analog');
  const [trip, setTrip] = useState<TripData>(createTripData());
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Refs
  const watchIdRef = useRef<number | null>(null);
  const lastPositionRef = useRef<{ lat: number; lon: number; timestamp: number } | null>(null);
  const smoothedSpeedRef = useRef(0);
  const wakeLockRef = useRef<WakeLockSentinel | null>(null);
  const tripIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Trip elapsed time update
  useEffect(() => {
    if (trip.isRunning && !trip.isPaused) {
      tripIntervalRef.current = setInterval(() => {
        setTrip((prev) => ({ ...prev })); // Force re-render for duration
      }, 1000);
    } else {
      if (tripIntervalRef.current) {
        clearInterval(tripIntervalRef.current);
        tripIntervalRef.current = null;
      }
    }
    return () => {
      if (tripIntervalRef.current) clearInterval(tripIntervalRef.current);
    };
  }, [trip.isRunning, trip.isPaused]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (watchIdRef.current !== null) {
        clearWatch(watchIdRef.current);
      }
      if (wakeLockRef.current) {
        wakeLockRef.current.release();
      }
    };
  }, []);

  // Handle GPS position update
  const handlePosition = useCallback((position: GeolocationPosition) => {
    const { latitude, longitude, accuracy: posAccuracy, speed } = position.coords;
    const timestamp = position.timestamp;

    setAccuracy(posAccuracy);
    setGpsState({ status: 'active' });

    let rawSpeedMs = 0;

    // Primary: use GPS-provided speed
    if (speed !== null && speed >= 0) {
      rawSpeedMs = speed;
    }
    // Fallback: calculate from position deltas
    else if (lastPositionRef.current) {
      const dt = (timestamp - lastPositionRef.current.timestamp) / 1000;
      if (dt > 0 && dt < 30) {
        const dist = haversineDistance(
          lastPositionRef.current.lat,
          lastPositionRef.current.lon,
          latitude,
          longitude
        );
        rawSpeedMs = dist / dt;
      }
    }

    // Validate
    if (!isRealisticSpeed(rawSpeedMs)) {
      rawSpeedMs = smoothedSpeedRef.current;
    }

    // Apply smoothing
    const smoothed = isStationary(rawSpeedMs)
      ? 0
      : smoothSpeed(rawSpeedMs, smoothedSpeedRef.current, SMOOTHING_FACTOR);
    smoothedSpeedRef.current = smoothed;
    setCurrentSpeedMs(smoothed);

    // Update trip data
    setTrip((prev) => {
      if (!prev.isRunning || prev.isPaused) return prev;

      let newDistance = prev.distanceMeters;
      if (lastPositionRef.current && posAccuracy < MIN_ACCURACY_THRESHOLD) {
        const segmentDistance = haversineDistance(
          lastPositionRef.current.lat,
          lastPositionRef.current.lon,
          latitude,
          longitude
        );
        // Only add distance if it's realistic (not a GPS jump)
        if (segmentDistance < 500) {
          newDistance += segmentDistance;
        }
      }

      return {
        ...prev,
        distanceMeters: newDistance,
        maxSpeedMs: Math.max(prev.maxSpeedMs, smoothed),
        readingCount: prev.readingCount + 1,
        speedSum: prev.speedSum + smoothed,
      };
    });

    // Update last position
    lastPositionRef.current = { lat: latitude, lon: longitude, timestamp };
  }, []);

  // Handle GPS error
  const handleGpsError = useCallback((error: GeolocationPositionError) => {
    setGpsState({
      status: getGpsErrorStatus(error),
      errorMessage: getGpsErrorMessage(error),
    });
  }, []);

  // Start tracking
  const startTracking = useCallback(async () => {
    if (!isGeolocationAvailable()) {
      setGpsState({
        status: 'unavailable',
        errorMessage: 'Geolocation is not available on this device or browser.',
      });
      return;
    }

    setGpsState({ status: 'requesting' });

    // Request wake lock
    wakeLockRef.current = await requestWakeLock();

    // Re-acquire wake lock on visibility change
    const handleVisibilityChange = async () => {
      if (document.visibilityState === 'visible' && wakeLockRef.current === null) {
        wakeLockRef.current = await requestWakeLock();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Start watching position
    const id = watchPosition(handlePosition, handleGpsError);
    watchIdRef.current = id;

    setTrip((prev) => ({
      ...createTripData(),
      isRunning: true,
      startTime: Date.now(),
      maxSpeedMs: prev.maxSpeedMs, // Keep max from previous session if not reset
    }));
  }, [handlePosition, handleGpsError]);

  // Stop tracking
  const stopTracking = useCallback(() => {
    if (watchIdRef.current !== null) {
      clearWatch(watchIdRef.current);
      watchIdRef.current = null;
    }

    if (wakeLockRef.current) {
      wakeLockRef.current.release();
      wakeLockRef.current = null;
    }

    smoothedSpeedRef.current = 0;
    lastPositionRef.current = null;
    setCurrentSpeedMs(0);
    setGpsState({ status: 'idle' });
    setTrip((prev) => ({ ...prev, isRunning: false, isPaused: false }));
  }, []);

  // Pause/Resume
  const togglePause = useCallback(() => {
    setTrip((prev) => {
      if (prev.isPaused) {
        // Resume
        const pausedTime = prev.lastPauseTime ? Date.now() - prev.lastPauseTime : 0;
        return { ...prev, isPaused: false, pausedDuration: prev.pausedDuration + pausedTime, lastPauseTime: null };
      } else {
        // Pause
        return { ...prev, isPaused: true, lastPauseTime: Date.now() };
      }
    });
  }, []);

  // Reset
  const resetTrip = useCallback(() => {
    setTrip((prev) => ({
      ...createTripData(),
      isRunning: prev.isRunning,
      startTime: prev.isRunning ? Date.now() : null,
    }));
    smoothedSpeedRef.current = 0;
    setCurrentSpeedMs(0);
  }, []);

  // Fullscreen
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {
        // Fullscreen not supported (e.g., iOS Safari)
        setIsFullscreen((prev) => !prev);
      });
    } else {
      document.exitFullscreen?.();
    }
  }, []);

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  // Unit labels
  const units: SpeedUnit[] = ['kmh', 'mph', 'knots', 'ms'];

  const isTracking = gpsState.status === 'active' || gpsState.status === 'requesting';

  return (
    <div
      className={`flex flex-col items-center gap-5 w-full ${isFullscreen ? 'speedometer-fullscreen' : ''}`}
      aria-label="GPS Speedometer"
    >
      {/* Safety disclaimer */}
      {isTracking && (
        <div
          className="w-full max-w-[420px] text-center text-xs px-4 py-2 rounded-lg"
          style={{ backgroundColor: 'rgba(245,158,11,0.1)', color: 'var(--status-warning)' }}
          role="alert"
        >
          ⚠️ Do not interact with this device while driving. Mount your device safely.
        </div>
      )}

      {/* Toolbar: Units + Display mode */}
      <div className="flex items-center justify-between w-full max-w-[420px] gap-4 flex-wrap">
        {/* Unit tabs */}
        <div className="flex rounded-lg overflow-hidden" style={{ backgroundColor: 'var(--bg-tertiary)' }} role="tablist" aria-label="Speed unit">
          {units.map((u) => (
            <button
              key={u}
              role="tab"
              aria-selected={unit === u}
              onClick={() => setUnit(u)}
              className="px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer"
              style={{
                backgroundColor: unit === u ? 'var(--brand-primary)' : 'transparent',
                color: unit === u ? '#000' : 'var(--text-secondary)',
              }}
            >
              {getUnitLabel(u)}
            </button>
          ))}
        </div>

        {/* Display mode + fullscreen */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setDisplayMode('analog')}
            className="p-2 rounded-lg transition-colors cursor-pointer"
            style={{
              backgroundColor: displayMode === 'analog' ? 'var(--bg-tertiary)' : 'transparent',
              color: displayMode === 'analog' ? 'var(--text-primary)' : 'var(--text-tertiary)',
            }}
            aria-label="Analog display"
            aria-pressed={displayMode === 'analog'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </button>
          <button
            onClick={() => setDisplayMode('digital')}
            className="p-2 rounded-lg transition-colors cursor-pointer"
            style={{
              backgroundColor: displayMode === 'digital' ? 'var(--bg-tertiary)' : 'transparent',
              color: displayMode === 'digital' ? 'var(--text-primary)' : 'var(--text-tertiary)',
            }}
            aria-label="Digital display"
            aria-pressed={displayMode === 'digital'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <path d="M8 10v4M12 9v6M16 11v2" />
            </svg>
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg transition-colors cursor-pointer"
            style={{ color: 'var(--text-tertiary)' }}
            aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {isFullscreen ? (
                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
              ) : (
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* GPS Status */}
      <GpsStatusBadge gpsState={gpsState} accuracy={accuracy} />

      {/* Speedometer Display */}
      {displayMode === 'analog' ? (
        <AnalogGauge speed={currentSpeedMs} maxSpeed={trip.maxSpeedMs} unit={unit} />
      ) : (
        <DigitalDisplay speed={currentSpeedMs} maxSpeed={trip.maxSpeedMs} unit={unit} />
      )}

      {/* Error / Permission Messages */}
      {(gpsState.status === 'denied' || gpsState.status === 'unavailable' || gpsState.status === 'error') && (
        <div
          className="w-full max-w-[420px] rounded-xl p-4 text-sm text-center"
          style={{ backgroundColor: 'rgba(239,68,68,0.1)', color: 'var(--status-error)' }}
          role="alert"
        >
          <p className="font-medium mb-1">
            {gpsState.status === 'denied' ? 'Location Permission Required' : 'GPS Signal Issue'}
          </p>
          <p className="text-xs opacity-80">{gpsState.errorMessage}</p>
        </div>
      )}

      {/* Controls */}
      <div className="flex items-center gap-3">
        {!trip.isRunning ? (
          <button
            onClick={startTracking}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all cursor-pointer"
            style={{
              backgroundColor: 'var(--brand-primary)',
              color: '#000',
              boxShadow: '0 0 20px rgba(0,212,170,0.3)',
            }}
            aria-label="Start GPS tracking"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            Start
          </button>
        ) : (
          <>
            <button
              onClick={togglePause}
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-colors cursor-pointer"
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                color: 'var(--text-primary)',
              }}
              aria-label={trip.isPaused ? 'Resume tracking' : 'Pause tracking'}
            >
              {trip.isPaused ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                  Resume
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z" /></svg>
                  Pause
                </>
              )}
            </button>
            <button
              onClick={stopTracking}
              className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-colors cursor-pointer"
              style={{
                backgroundColor: 'rgba(239,68,68,0.1)',
                color: 'var(--status-error)',
              }}
              aria-label="Stop tracking"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="6" width="12" height="12" rx="1" /></svg>
              Stop
            </button>
            <button
              onClick={resetTrip}
              className="p-3 rounded-xl transition-colors cursor-pointer"
              style={{
                backgroundColor: 'var(--bg-tertiary)',
                color: 'var(--text-tertiary)',
              }}
              aria-label="Reset trip data"
              title="Reset trip"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M1 4v6h6M23 20v-6h-6" />
                <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Trip Statistics */}
      {trip.isRunning && <TripStats trip={trip} unit={unit} />}

      {/* Idle state info */}
      {gpsState.status === 'idle' && (
        <p className="text-xs text-center max-w-[360px] mt-2" style={{ color: 'var(--text-tertiary)' }}>
          Tap <strong>Start</strong> and allow location access. GPS works best outdoors with clear sky visibility. Your location data is processed locally and never sent to a server.
        </p>
      )}
    </div>
  );
}
