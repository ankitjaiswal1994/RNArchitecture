/**
 * Workes like a forEach loop, but can support async functionality like async await inside callback
 * @param array
 * @param callback
 */

export async function asyncForEach<T extends any>(
  array: Array<T>,
  callback: (item: T, index: number, array: Array<T>) => any,
) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}
