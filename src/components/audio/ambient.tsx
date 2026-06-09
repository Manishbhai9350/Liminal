import { useEffect, useRef } from "react";
import { Howl } from "howler";
import { useLoader } from "../../hooks/useLoader";
import { useControls } from "leva";

const Ambient = () => {
  const { entered, ambient } = useLoader();
  const soundRef = useRef<Howl | null>(null);
  const soundIdRef = useRef<number | null>(null);

  useEffect(() => {
    soundRef.current = new Howl({
      src: ["/media/bgm.mp3"],
      html5: true,
      loop: true,
      volume: 0.5,
      rate: 1.0,
    });

    return () => {
      soundRef.current?.unload();
      soundRef.current = null;
      soundIdRef.current = null;
    };
  }, []);

  useEffect(() => {
    const sound = soundRef.current;
    if (!sound || !entered) return;

    if (ambient) {
      if (soundIdRef.current === null) {
        soundIdRef.current = sound.play();
      } else if (!sound.playing(soundIdRef.current)) {
        sound.play(soundIdRef.current);
      }
    } else {
      if (soundIdRef.current !== null && sound.playing(soundIdRef.current)) {
        sound.pause(soundIdRef.current);
      }
    }
  }, [entered, ambient]);

  // Targets only the tracked instance if playing, otherwise sets globally on the Howl
  const setVolume = (val: number) => {
    const sound = soundRef.current;
    if (!sound) return;
    const clamped = Math.max(0, Math.min(1, val));
    if (soundIdRef.current !== null) {
      sound.volume(clamped, soundIdRef.current);
    } else {
      sound.volume(clamped);
    }
  };

  const setRate = (val: number) => {
    const sound = soundRef.current;
    if (!sound) return;
    const clamped = Math.max(0.5, Math.min(4, val));
    if (soundIdRef.current !== null) {
      sound.rate(clamped, soundIdRef.current);
    } else {
      sound.rate(clamped);
    }
  };

  const { rate, volume } = useControls('Audio',{
    volume: {
      min: 0,
      max: 1,
      value: 0.5,
      step: 0.01,
    },
    rate: {
      min: 0.5,
      max: 4,
      value: 1.0,
      step: 0.01,
    },
  });

  useEffect(() => {
    setRate(rate);
    setVolume(volume);

    return () => {};
  }, [rate, volume]);

  return null;
};

export default Ambient;
