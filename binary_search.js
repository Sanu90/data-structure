let array = [3, 5, 8, 10, 17, 19, 29, 39];

function binarySearch(array, value) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (value === array[mid]) {
      return mid;
    }
    if (value < array[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch(array, 100));
console.log(binarySearch(array, 10));
console.log(binarySearch(array, 29));
