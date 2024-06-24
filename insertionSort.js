let array = [36, 24, 27, 19, 25, 37, 4];

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let newNum = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > newNum) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = newNum;
  }
  return array;
}

console.log(insertionSort(array));
