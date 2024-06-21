// sort array of integers either ascending or descending //

const array = [-6, 20, 2, 8, -2, 4];

function bubbleSort(array) {
  let count = 1;
  do {
    count = 0;
    for (let i = 1; i < array.length; i++) {
      if (array[i] < array[i - 1]) {
        let temp = array[i];
        array[i] = array[i - 1];
        array[i - 1] = temp;
        count = 1;
      }
    }
  } while (count);
  return array;
}

console.log(bubbleSort(array)); 

// Big O: O(n^2)
