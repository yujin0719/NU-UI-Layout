import { useState } from 'react';

interface returnType {
  isWideMode: boolean;
  handleChangeMode: () => void;
}

export function useWideMode(initialValue: boolean): returnType {
  const [isWideMode, setIsWideMode] = useState(initialValue);

  const toggleWideMode = () => setIsWideMode(!isWideMode);

  return { isWideMode, handleChangeMode: toggleWideMode };
}
