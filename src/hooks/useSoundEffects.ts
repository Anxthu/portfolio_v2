import { useCallback } from "react";

// Sound effect URLs (using Web Audio API to generate sounds)
const createSound = (frequency: number, duration: number, type: OscillatorType = "sine") => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.frequency.value = frequency;
  oscillator.type = type;

  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + duration);
};

export const useSoundEffects = () => {
  const playHoverSound = useCallback(() => {
    try {
      createSound(800, 0.1, "sine");
    } catch (error) {
      // Silently fail if audio context is not available
    }
  }, []);

  const playClickSound = useCallback(() => {
    try {
      createSound(1000, 0.15, "sine");
    } catch (error) {
      // Silently fail if audio context is not available
    }
  }, []);

  const playSuccessSound = useCallback(() => {
    try {
      createSound(600, 0.1, "sine");
      setTimeout(() => createSound(800, 0.15, "sine"), 100);
    } catch (error) {
      // Silently fail if audio context is not available
    }
  }, []);

  return {
    playHoverSound,
    playClickSound,
    playSuccessSound,
  };
};
