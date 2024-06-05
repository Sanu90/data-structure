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

console.log(primeNumber(60));

// time complexity (worst case) is: O(n)

// using recursion //

function isPrime(num,divisor=2){
  if(num<2) return false;
  if(num%divisor===0) return false;
  if(divisor>Math.sqrt(num)) return true;
  
  return isPrime(num,divisor+1)
}

console.log(isPrime(33))
