function randomNumber(){
  return Math.floor(Math.random() * 100);
}

let userGuess = document.getElementById('userGuess');
let displayText = document.getElementById('text');
let compterGuess = randomNumber();

function checkUserGuess (userGuess, displayText, compterGuess) {
  let guess = Number(userGuess.value);

  if(guess === compterGuess){
    randomNumber();
    displayText.innerHTML =  "You Win";
  }else if (guess < compterGuess) {
    displayText.innerHTML =  "too low";
  }else if(guess > compterGuess){
  displayText.innerHTML =  "too high";
  }else {
    displayText.innerHTML =  "logical Error";
  }
} 