// write a pgm to reverse a string after making the alternative words to upper case.

let str = "welcome";

// WeLcOmE--> EmOcLeW

function alterUpperCaseAndReverse(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (i % 2 == 0) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}

console.log(alterUpperCaseAndReverse(str));
