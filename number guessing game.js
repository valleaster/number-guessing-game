const prompt = require('prompt-sync')({sigint: true});

const name = prompt('What is your name? ');
console.log('Hey there ' + name + "!");

// Random number from 1 - 100
// This variable is used to determine if the app should continue prompting the user for input

function gameStarts () {
  let numberInMind = Math.floor(Math.random() * 100) + 1;
  let foundCorrectNumber = false;
  while (!foundCorrectNumber) {
    // Step 1: Get user input (don't forget that the input is a string)
    const prompt = require("prompt-sync")({sigint: true});
    const userInput = prompt("Guess the number I have in mind " + name + " (・ω<) ");
    console.log(userInput);
    // Step 2: Compare the guess to the secret answer and
    // let the user know the feedback (too large, too small, correct).
    if (userInput < 1 || userInput > 100) {
      console.log("Sorry, don't think that's within range.");
    } else if (userInput > numberInMind) {
      console.log("Sorry dude, try a smaller number.");
    } else if (userInput < numberInMind) {
      console.log("Sorry man, try a bigger number.");
    } else if (userInput == numberInMind) {
       console.log("ヾ(>ꇴ<)b Yas queen slayyyy! d(>∇<)/ You deserve a pat in the back and some self rewards");
      newGame();
    } else {
      console.log("You sure that's even a number?");
    }
  }
}

gameStarts()

// Bonus Point: prompt user and provide option for user to start a new game after winning
function newGame() {
  foundCorrectNumber = true;
  while (foundCorrectNumber) {
    const prompt = require("prompt-sync")({sigint: true});
    const userInput = prompt("Would you like to go for another round??? Type yas or nah  ");
    if (userInput == "yas") {
      console.log("Yasss! Let's go!!! ✧ ─=≡Σ((( つ•̀ω•́)つ ");
      gameStarts();
    } else if (userInput == "nah"){
      console.log("Alright, see ya. Won't miss ya xoxo! (・ω・)b "); 
      process.exit(1);
    } else {
      console.log("Can you like, read? (ノಠ益ಠ)ノ彡┻━┻ ");
    }
  }
}
