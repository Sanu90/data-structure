let text = "MALAYALAM";

function palindrome(text) {
  if (text.length == 0) {
    return true;
  }

  if (text[0] != text[text.length - 1]) {
    return false;
  }
  return palindrome(text.slice(1, text.length - 1));
}

console.log(palindrome(text));
