// reverse a string using recursion //

let text = "sunrise";

function reverseString(text) {
  if (text.length <= 1) {
    return text;
  }

  return (
    text.charAt(text.length - 1) +
    reverseString(text.substring(0, text.length - 1))
  );

}

console.log(reverseString(text));
