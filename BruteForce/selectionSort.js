function selectionSort(array) {
  const N = array.length;
  let min, index;
  for (let i = 0; i < N - 1; i++) {
    min = array[N - 1];
    index = N - 1;
    for (let j = i; j < N - 1; j++) {
      if (array[j] < min) {
        min = array[j];
        index = j;
      }
    }
    array[index] = array[i];
    array[i] = min;
  }
  return array;
}
