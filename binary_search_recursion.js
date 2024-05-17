// binary search using recursion//

function binaryRecursion(array, value) {
  return search(array, value, 0, array.length - 1);
}

function search(array, value, left, right) {
  let mid = Math.floor((left + right) / 2);
}

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
