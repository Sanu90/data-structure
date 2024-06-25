// let arr = [10, 1, 19, 0, 16, 5, 14];

// function quickSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }
//   let pivot = arr[arr.length - 1];
//   let left = [];
//   let right = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// console.log(quickSort(arr));

// quick sort //

let array = [-12, 8, 16, -19, 11, 19, 0];
function quickSort(array) {
  let len = array.length;
  console.log(len)
  if (len < 2) {
    return array;
  }

  let pivot = array[len - 1];
  let left = [];
  let right = [];
  for (let i = 0; i <= len - 2; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(array));

//console.log(array.length)
