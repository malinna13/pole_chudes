"use strict";

game: {
  const words = ["bear", "mamba", "james", "mother", "father", "aunt"];
  const lowLevel = 20,
    middleLevel = 15,
    maxLevel = 10;

  let levelOption = 0;

  let option = +prompt("choose a level 1 or 2 or 3");

  if (option === 1) {
    levelOption = lowLevel;
  } else if (option === 2) {
    levelOption === middleLevel;
  } else if (option === 3) {
    levelOption = maxLevel;
  } else {
    alert("wrong choice");
    break game;
  }

  alert("Game starts right now");

  let randomWord = words[Math.floor(Math.random() * words.length)];

  let convertedRandomWord = [];
  for (let i = 0; i < randomWord.length; i++) {
    convertedRandomWord[i] = "_";
  }
  alert(convertedRandomWord);

  let attemptCounter = 0;
  let attemptCounter2 = levelOption;

  while (attemptCounter < levelOption) {
    let character = prompt("enter a letter");
    for (let i = 0; i < randomWord.length; i++) {
      if (character === randomWord[i]) {
        convertedRandomWord[i] = character;
      }
    }

    let word = "";
    for (let index = 0; index < convertedRandomWord.length; index++) {
      word = word + convertedRandomWord[index];
    }
    if (randomWord === word) {
      alert("You win");
      attemptCounter = levelOption + 1;
      attemptCounter2--;
    } else {
      attemptCounter2--;

      alert(`${convertedRandomWord} - ${attemptCounter2} attempts left`);
      attemptCounter++;
    }
  }
}
