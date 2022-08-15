function mergeSort(array) {
  if (array.length < 2) return;
  const mid = Math.trunc(array.length / 2);
  const leftArray = array.slice(0, mid);
  const rightArray = array.slice(mid, array.length);

  mergeSort(leftArray);
  mergeSort(rightArray);
  merge(leftArray, rightArray, array);
  return array;
}

function merge(leftArray, rightArray, array) {
  let i = 0,
    j = 0,
    k = 0;
  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] <= rightArray[j]) {
      array[k] = leftArray[i];
      i++;
    } else {
      array[k] = rightArray[j];
      j++;
    }
    k++;
  }

  while (i < leftArray.length) {
    array[k] = leftArray[i];
    i++;
    k++;
  }

  while (j < rightArray.length) {
    array[k] = rightArray[j];
    j++;
    k++;
  }
}
