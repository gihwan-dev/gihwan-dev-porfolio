import { useWindowWidth } from '~/hooks/useWindowWidth';

export default function useMediaQuery() {
  const { width } = useWindowWidth();
  const isMobile = width < 640;

  return {
    isMobile,
  };
}
