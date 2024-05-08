// find the nth element of the fibonacci sequence //

function fibonacciUsingRecursion(n){
if(n<2) return n;

return fibonacciUsingRecursion(n-1)+fibonacciUsingRecursion(n-2);
}

console.log(fibonacciUsingRecursion(10));


// time complexity (worst case) is: O(2^n)



