function* take<T>(iter: Iterable<T>, n: number) {
  const iterator = iter[Symbol.iterator]();
  while (n--) {
    const { value, done } = iterator.next();

    if (done) break;

    yield value;
  }
}

export function* chunk<T>(iter: Iterable<T>, size: number) {
  const iterator = iter[Symbol.iterator]();

  while (true) {
    const arr = [
      ...take(
        {
          [Symbol.iterator]: () => iterator,
        },
        size,
      ),
    ];

    if (arr.length) yield arr;

    if (arr.length < size) break;
  }
}
