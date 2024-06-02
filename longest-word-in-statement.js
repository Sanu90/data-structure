let statement = "This is a javascript program";

function longestWord(statement) {
  let words = statement.split(" ");
  console.log(words);
  let longWord = "";
  for (let word of words) {
    if (word.length > longWord.length) {
      longWord = word;
    }
    
  }
  console.log(longWord);
}

longestWord(statement);
