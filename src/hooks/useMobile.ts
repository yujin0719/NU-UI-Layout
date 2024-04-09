import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

interface returnType {
  isMobile: boolean;
}

export const useMobile = (): returnType => {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({});

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  return { isMobile };
};
