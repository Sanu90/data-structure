// linear search //

const array = [1, 5, 2, 8, 18, 27, 12, 100];

//let target = 27; // target element

function linearSearch(target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch(100));

// worst case (big O) is: O(n)
