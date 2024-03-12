import { useState } from 'react';

export type VideoMode = 'normal' | 'theater' | 'wide-theater';
export const DEFAULT_VIDEO_MODE: VideoMode = 'normal';

interface returnType {
  videoMode: VideoMode;
  handleChangeMode: (mode: VideoMode) => void;
}

export function useVideoMode(): returnType {
  const [videoMode, setIsWideMode] = useState(DEFAULT_VIDEO_MODE);

  const handleChangeMode = (mode: VideoMode): void => {
    setIsWideMode(mode);
  };

  return { videoMode, handleChangeMode };
}
