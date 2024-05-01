// math algorithm 2 //

function factorial(n) {
  let result = 1;
  for (i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));


// time complexity (worst case) is: O(n)
