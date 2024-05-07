// find the factorial using recursion //

function factorialUsingRecursion(n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorialUsingRecursion(n - 1);
}

console.log(factorialUsingRecursion(5)); ///120

// Time complexity (worst case): O(n)
