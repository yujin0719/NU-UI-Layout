import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { queryForMobile } from '../styles/base/queries';

interface returnType {
  isMobile: boolean;
}

export const useMobile = (): returnType => {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({
    query: queryForMobile,
  });

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);

  return { isMobile };
};
