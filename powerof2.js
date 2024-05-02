// math algorithm 4a //

// function isPowerOfTwo(n) {
//   if (n < 1) {
//     return false;
//   }

//   while (n > 1) {
//     if (n % 2 != 0) {
//       return false;
//     } else n = n / 2;
//   }
//   return true;
// }

// console.log(isPowerOfTwo(32)); //true
// console.log(isPowerOfTwo(-48)); //false
// console.log(isPowerOfTwo(15)); //false

// time complexity (worst case) is: O(log n)

// -----------------------------------------------

// math algorithm 4b //

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(32)); //true
console.log(isPowerOfTwo(-48)); //false
console.log(isPowerOfTwo(15)); //false

// time complexity (worst case) is: O(1)
