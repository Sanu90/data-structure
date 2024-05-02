// math algorithm 3 //

function primeNumber(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(primeNumber(209));

// time complexity (worst case) is: O(n)
