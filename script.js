document.getElementById("countButton").onclick = function() {
    // your code will go here ...
    let typedText = document.getElementById("textInput").value;

 typedText = typedText.toLowerCase();
// This changes all the letter to lower case.

typedText = typedText.replace(/[^a-z'\s]+/g, "");
// This gets rid of all the characters except letters, spaces, and apostrophes.
// We will learn more about how to use the replace function in an upcoming lesson.
 

 

letterCounts = {};

for (let i = 0; i < typedText.length; i++) {
    currentLetter = typedText[i];
   
    // do something for each letter.
   if(letterCounts[currentLetter] === undefined) {
    letterCounts[currentLetter] = 1;
 } else {
    letterCounts[currentLetter]++;
 }

 for (let letter in letterCounts) {
    let span = document.createElement("span");
    let textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
    span.appendChild(textContent);
    document.getElementById("lettersDiv").appendChild(span);
 }
 }

 const wordCounts = {};

 for (let i = 0; i < typedText.length; i++) {
    currentword = typedText[i];
 }
 if(wordCounts[currentword] === undefined) {
    wordCounts[currentword] = 1;
 } else {
    wordCounts[currentword]++;
 }
   
 for (let word in wordCounts) {
    let span = document.createElement("span");
    let textContent = document.createTextNode('"' + word + "\": " + wordCounts[word] + ", ");
    span.appendChild(textContent);
    document.getElementById("wordsDiv").appendChild(span);
 }
 

 

 const word = typedText.split(" ");
}