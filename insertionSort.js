function insertionSort(array) {
  for (let j = 1; j < array.length; j++) {
    let i = 0;
    while (array[j] > array[i]) i++;
    let m = array[j];
    for (let k = 0; k <= j - i - 1; k++) array[j - k] = array[j - k - 1];
    array[i] = m;
  }
  return array;
}
