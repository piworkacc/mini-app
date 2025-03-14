import { useEffect, useState } from 'react';

export enum Breakpoints {
  MOBILE = 360,
  TABLET = 768,
  S_DESKTOP = 1024,
  M_DESKTOP = 1366,
  L_DESKTOP = 1920,
}

export type TBreakpoints = {
  size: Breakpoints;
  isMobileView: boolean;
  isDesktopView: boolean;
  currentWidth: number;
};

const getSize = (width: number) => {
  if (width >= Breakpoints.L_DESKTOP) return Breakpoints.L_DESKTOP;
  if (width >= Breakpoints.M_DESKTOP) return Breakpoints.M_DESKTOP;
  if (width >= Breakpoints.S_DESKTOP) return Breakpoints.S_DESKTOP;
  if (width >= Breakpoints.TABLET) return Breakpoints.TABLET;

  return Breakpoints.MOBILE;
};

export const useResize = () => {
  const [currentWidth, setCurrentWidth] = useState<number>(window.innerWidth);

  const size = getSize(currentWidth);
  const isMobileView = size < Breakpoints.S_DESKTOP;
  const isTabletView = size < Breakpoints.S_DESKTOP && size > Breakpoints.MOBILE;
  const isDesktopView = size >= Breakpoints.S_DESKTOP;

  useEffect(() => {
    const handleResize = (event: UIEvent) => {
      setCurrentWidth((event.target as Window).innerWidth || 0);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    size,
    isMobileView,
    isDesktopView,
    isTabletView,
    currentWidth,
  };
};
