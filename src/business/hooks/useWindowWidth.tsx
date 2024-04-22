import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import _ from 'lodash';

export const useWindowWidth = () => {
  const [width, setWidth] = useState(0);

  const widthChangeHandler = () => setWidth(window.innerWidth);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceWidthChangeHandler = useCallback(
    _.debounce(widthChangeHandler, 100),
    [],
  );

  useEffect(() => {
    window.addEventListener('resize', debounceWidthChangeHandler);

    return () =>
      window.removeEventListener('resize', debounceWidthChangeHandler);
  }, [debounceWidthChangeHandler]);

  useLayoutEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return {
    width,
  };
};
