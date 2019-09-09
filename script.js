document.getElementById("countButton").onclick = function () {
   // your code will go here ...
   let typedText = document.getElementById("textInput").value;
   typedText = typedText.toLowerCase();
   // This changes all the letter to lower case.
   typedText = typedText.replace(/[^a-z'\s]+/g, "");
   // This gets rid of all the characters except letters, spaces, and apostrophes.
   // We will learn more about how to use the replace function in an upcoming lesson.
   // Cretead a function, it makes it easier to callback without writing same code twice. 
   const wordChecker = function (typedText, letterCounts) {
       for (let i = 0; i < typedText.length; i++) {
           // do something for each letter.
           if (letterCounts[typedText[i]] === undefined) {
               letterCounts[typedText[i]] = 1;
           } else {
               letterCounts[typedText[i]]++;
           }
       }
   }
   //------------------- it is always better to separate the functions
   const countLetter = function (typedText) {
       let newtypedText = typedText; //  sorting the letter
       let letterCounts = {};
       wordChecker(newtypedText, letterCounts); // calling back the wordchecker
       for (let letter in letterCounts) {
           let span = document.createElement("span");
           let textContent = document.createTextNode(letter + ": " + letterCounts[letter] + ", ");
           span.appendChild(textContent);
           document.getElementById("lettersDiv").appendChild(span);
       }
   }
   // ------------------------
   const countWord = function (typedText) {
       let wordCounts = {};
       let newtypedText = typedText.split(" "); //split words, not letter
       wordChecker(newtypedText, wordCounts); // calling back the wordchecker
       for (let word in wordCounts) {
           let span = document.createElement("span");
           let textContent = document.createTextNode(word + ": " + wordCounts[word] + ", ");
           span.appendChild(textContent);
           document.getElementById("wordsDiv").appendChild(span);
       }
   }
   // ------------------------
   //calling back the funcitons
   countLetter(typedText);
   countWord(typedText);
}