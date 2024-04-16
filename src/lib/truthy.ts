export const notNullAndUndefined = (data: unknown) => {
  if (data === undefined) {
    return false;
  }
  return data !== null;
};

export const isArrayTruthy = <T>(data: T[] | null | undefined): data is T[] => {
  return data !== null && data !== undefined && data.length !== 0;
};

export const isImageSrcTruthy = (data: string) => {
  return data !== '';
};
