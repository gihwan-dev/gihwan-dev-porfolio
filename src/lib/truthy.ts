export const notNullAndUndefined = (data: unknown) => {
  if (data === undefined) {
    return false;
  }
  if (data === null) {
    return false;
  }
  return true;
};
