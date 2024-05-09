let array = [1, 2, 3, 4, 5, 6, 7];

function binarySearchRecursion(arr, value) {
  return search(arr, value, 0, arr.length - 1);
}

function search(arr, value, left, right) {
  if (left > right) {
    return -1;
  }

  let middle = Math.floor((left + right) / 2);
  if (value == arr[middle]) {
    return middle;
  }
  if (value < arr[middle]) {
    return search(arr, value, left, middle - 1);
  } else {
    return search(arr, value, middle + 1, right);
  }
}

console.log(binarySearchRecursion(array,1));
//-----------------------------------------------------------------
// normal binary search//
// let array = [1, 2, 3, 4, 5];

// function binarySearch(array, value) {
//   let left = 0;
//   let right = array.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (value == array[mid]) {
//       return mid;
//     }
//     if (value < array[mid]) {
//       right = mid - 1;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return -1;
// }

// console.log(binarySearch(array, 1));
//-------------------------------------------
