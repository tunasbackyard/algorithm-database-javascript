function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let m = array[j];
        array[j] = array[j + 1];
        array[j + 1] = m;
      }
    }
  }
  return array;
}
