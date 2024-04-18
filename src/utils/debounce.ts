export const debounce = (func: Function, delay: number) => {
  // @ts-ignore
  let timeout;
  return function () {
    // @ts-ignore
    const context = this;
    const args = arguments;
    // @ts-ignore
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
};
