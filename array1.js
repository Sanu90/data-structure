// to find the index of the array element entered. if not return -1.

const array = [1, 2, 5, 4, 5, 6, 7, 5];

//console.log(array.lastIndexOf(5));

function findIndex(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log("Index is:", findIndex(array, 5));
