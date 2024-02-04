export function textAreaFunctions() {
  const notesTextArea = document.querySelector("#notes-text");
  const charCount = document.querySelector('#char-count');
  const wordCount = document.querySelector('#word-count');

  //placeholder suggestion messages
  const placeholderSuggestions = [
    "What's on your mind?",
    "Type with intent; ideas flourish.",
    "Procrastination is the thief of time. Start now!",
    "Jot your thoughts for the day...",
    "Ideas in, brilliance out!",
    "Conquer chaos with clear notes.",
    "Write it down, make it happen.",
    "Tell your story in this blank canvas.",
    "Inspiration strikes here. Type away!",
    "Type, tap, think! Your notes start now.",
    "Ctrl+Alt+Defeat Writer's Block.",
    "Compose your symphony of thoughts right here.",
    "The more you note, the more you know.",
    "Let your fingers dance across the keys!",
    "Note-taking: the real superhero work.",
  ];
  // initialize currentIndex... start at first index(0)
  let currentIndex = 0;
  // funnction that uses modulo to cycle through the placeholderSuggestions array
  /*Modulo so that currentIndex goes back to 0 when it hits the end of the array and never reaches the value of placeHolderSuggestions.length */
  function updatePlaceholder() {
    notesTextArea.placeholder = placeholderSuggestions[currentIndex];
    currentIndex = (currentIndex + 1) % placeholderSuggestions.length;
  }
  //update placeholder every 10 seconds
  setInterval(updatePlaceholder, 10000);
  //calls and starts the updatePlaceholder function
  updatePlaceholder();

  //COUNTER SECTION FUNCTION
function counter() {
  // gets the value of all the contents of the notesTextArea(#notes-text)
  const notesTextAreaContent = notesTextArea.value;
  function updateCharCounter() {
    // creates object that equals value of the length (number of characters) of all the text in text area
    const charCounterLength = notesTextAreaContent.length;
    // function that makes character count update
    charCount.textContent = `${charCounterLength}`;
  };
  // calls updateCharCounter function
  updateCharCounter();
  function updateWordCounter() {
    let word = [];
    // replaces symbols with spaces then makes list of words that is split by spaces (" ")
    let notesTextAreaWithSymbolsReplaced = notesTextAreaContent.replace(/[\t\n\r\.\?\!]/gm, " ").split(" ");
    // iterates over the notesTextAreaWithSymbolsReplaced list
    notesTextAreaWithSymbolsReplaced.map((eachWord) => {
      // removes whitespace on both ends of each word
      let trimmedWords = eachWord.trim();
      // if the trimmed word is not empty, it is pushed to the word list
      if (trimmedWords.length > 0) {
        word.push(trimmedWords);
      }
    });
    let count = word.length;
    wordCount.textContent = `${count}`;
  };
  updateWordCounter();
};
// CHARACTER COUNTER
  // Calls the updateCharCounter function on different events
  notesTextArea.addEventListener('input', counter);
  notesTextArea.addEventListener('keyup', counter);
  notesTextArea.addEventListener('keydown', counter);
  notesTextArea.addEventListener('paste', counter);
  notesTextArea.addEventListener('cut', counter);
  notesTextArea.addEventListener('drop', counter);
  notesTextArea.addEventListener('change', counter);

}
