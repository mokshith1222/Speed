/**
 * GPS Speed Engine
 *
 * Core module for interacting with the browser Geolocation API,
 * calculating speed, applying smoothing, and managing trip data.
 *
 * All location data is processed locally — nothing is sent to a server.
 */

// ============================================
// Types
// ============================================

export type SpeedUnit = 'kmh' | 'mph' | 'knots' | 'ms';

export interface GpsState {
  status: 'idle' | 'requesting' | 'active' | 'denied' | 'unavailable' | 'error';
  errorMessage?: string;
}

export interface SpeedReading {
  /** Speed in m/s (raw from GPS or calculated) */
  rawSpeedMs: number;
  /** Smoothed speed in m/s */
  smoothedSpeedMs: number;
  /** GPS accuracy in meters */
  accuracy: number;
  /** Timestamp of reading */
  timestamp: number;
  /** Latitude */
  latitude: number;
  /** Longitude */
  longitude: number;
  /** Whether speed came from GPS chipset or was calculated */
  source: 'gps' | 'calculated';
}

export interface TripData {
  isRunning: boolean;
  isPaused: boolean;
  startTime: number | null;
  pausedDuration: number;
  lastPauseTime: number | null;
  distanceMeters: number;
  maxSpeedMs: number;
  speedReadings: number[];
  readingCount: number;
  speedSum: number;
}

// ============================================
// Constants
// ============================================

/** Minimum accuracy (meters) to consider a reading usable */
export const MIN_ACCURACY_THRESHOLD = 50;

/** Speed below this (m/s) is treated as stationary (≈ 1 km/h) */
export const STATIONARY_THRESHOLD = 0.28;

/** Maximum realistic speed (m/s) — ~400 km/h. Readings above are GPS spikes */
export const MAX_REALISTIC_SPEED = 111;

/** Smoothing factor for exponential moving average (0-1, lower = smoother) */
export const SMOOTHING_FACTOR = 0.3;

/** Earth's radius in meters for Haversine calculation */
const EARTH_RADIUS = 6371000;

// ============================================
// Conversion Functions
// ============================================

const CONVERSION_FACTORS: Record<SpeedUnit, number> = {
  ms: 1,
  kmh: 3.6,
  mph: 2.23694,
  knots: 1.94384,
};

export function convertSpeed(speedMs: number, unit: SpeedUnit): number {
  return speedMs * CONVERSION_FACTORS[unit];
}

export function getUnitLabel(unit: SpeedUnit): string {
  const labels: Record<SpeedUnit, string> = {
    kmh: 'km/h',
    mph: 'mph',
    knots: 'knots',
    ms: 'm/s',
  };
  return labels[unit];
}

export function getMaxSpeedForUnit(unit: SpeedUnit): number {
  const maxSpeeds: Record<SpeedUnit, number> = {
    kmh: 260,
    mph: 160,
    knots: 140,
    ms: 72,
  };
  return maxSpeeds[unit];
}

// ============================================
// Distance Calculation (Haversine)
// ============================================

export function haversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return EARTH_RADIUS * c;
}

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

// ============================================
// Speed Smoothing (Exponential Moving Average)
// ============================================

export function smoothSpeed(
  newSpeed: number,
  previousSmoothed: number,
  factor: number = SMOOTHING_FACTOR
): number {
  if (previousSmoothed === 0) return newSpeed;
  return factor * newSpeed + (1 - factor) * previousSmoothed;
}

// ============================================
// Speed Validation
// ============================================

export function isRealisticSpeed(speedMs: number): boolean {
  return speedMs >= 0 && speedMs <= MAX_REALISTIC_SPEED;
}

export function isStationary(speedMs: number): boolean {
  return speedMs < STATIONARY_THRESHOLD;
}

// ============================================
// Trip Data Management
// ============================================

export function createTripData(): TripData {
  return {
    isRunning: false,
    isPaused: false,
    startTime: null,
    pausedDuration: 0,
    lastPauseTime: null,
    distanceMeters: 0,
    maxSpeedMs: 0,
    speedReadings: [],
    readingCount: 0,
    speedSum: 0,
  };
}

export function getElapsedTime(trip: TripData): number {
  if (!trip.startTime) return 0;
  const now = trip.isPaused && trip.lastPauseTime ? trip.lastPauseTime : Date.now();
  return now - trip.startTime - trip.pausedDuration;
}

export function getAverageSpeedMs(trip: TripData): number {
  if (trip.readingCount === 0) return 0;
  return trip.speedSum / trip.readingCount;
}

export function formatDuration(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

export function formatDistance(meters: number): { value: string; unit: string } {
  if (meters < 1000) {
    return { value: Math.round(meters).toString(), unit: 'm' };
  }
  return { value: (meters / 1000).toFixed(2), unit: 'km' };
}

// ============================================
// Geolocation API Helpers
// ============================================

export function isGeolocationAvailable(): boolean {
  return typeof navigator !== 'undefined' && 'geolocation' in navigator;
}

export function requestGpsPermission(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    if (!isGeolocationAvailable()) {
      reject(new Error('Geolocation is not available on this device'));
      return;
    }
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 0,
    });
  });
}

export function watchPosition(
  onPosition: (position: GeolocationPosition) => void,
  onError: (error: GeolocationPositionError) => void
): number {
  return navigator.geolocation.watchPosition(onPosition, onError, {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0,
  });
}

export function clearWatch(watchId: number): void {
  navigator.geolocation.clearWatch(watchId);
}

// ============================================
// Screen Wake Lock
// ============================================

export async function requestWakeLock(): Promise<WakeLockSentinel | null> {
  if (typeof navigator === 'undefined' || !('wakeLock' in navigator)) {
    return null;
  }
  try {
    const wakeLock = await navigator.wakeLock.request('screen');
    return wakeLock;
  } catch {
    // Wake lock request failed (e.g., battery saver, tab not visible)
    return null;
  }
}

// ============================================
// GPS Error Messages
// ============================================

export function getGpsErrorMessage(error: GeolocationPositionError): string {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      return 'Location permission was denied. Please enable location access in your browser settings to use the speedometer.';
    case error.POSITION_UNAVAILABLE:
      return 'GPS signal unavailable. Make sure you are outdoors with a clear view of the sky.';
    case error.TIMEOUT:
      return 'GPS signal timed out. Please ensure location services are enabled and try again.';
    default:
      return 'An unknown error occurred while accessing GPS. Please try again.';
  }
}

export function getGpsErrorStatus(error: GeolocationPositionError): GpsState['status'] {
  if (error.code === error.PERMISSION_DENIED) return 'denied';
  return 'unavailable';
}
