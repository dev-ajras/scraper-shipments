export function getMbl(array: string[]) {
  const skus = [];
  const usedIndexes = new Set();

  for (let i = 1; i < array.length; i += 2) {
    if (!usedIndexes.has(i) && i + 1 < array.length) {
      const sku = array[i] + array[i + 1];
      skus.push(sku);
      usedIndexes.add(i);
      usedIndexes.add(i + 1);
    }
  }

  return skus;
}
