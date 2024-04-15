export const notNullAndUndefined = (data: unknown) => {
  if (data === undefined) {
    return false;
  }
  return data !== null;
};
