// add all odd numbers in array using recursion //

let array = [1, 28, 26, 21, 38, 73, 3];

function oddSum(array, i) {
  let sum = 0;
  if (i >= array.length) {
    return 0;
  }
  sum = array[i] % 2 == 1 ? array[i] : sum;
  i++;
  return sum + oddSum(array, i);
}

console.log(oddSum(array, 0));
