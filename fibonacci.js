// math algorithm 1 //

function fibonacci(n) {
  const array = [0, 1];
  for (let i = 2; i < n; i++) {
    array.push(array[i - 1] + array[i - 2]);
  }
  return array;
}

console.log(fibonacci(5));

// time complexity (worst case) is: O(n)
