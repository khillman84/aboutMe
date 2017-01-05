'use strict';

var start = prompt('Ok, let\'s get started! Please enter your name.');
var point = 0;

//The questions I want to ask are arranged in this array
var questions = [
  ['Do I live in Olympia?', 'yes', 'y', ' I have lived there for 3 years.'],
  ['Do I own a pet?', 'yes', 'y', ' I own 1 cat.'],
  ['Do I play the banjo?', 'no', 'n', ' I play guitar, but not the banjo.'],
  ['Do I have any children?', 'yes', 'y', ' I have two daughters!'],
  ['Do I like Code 201?', 'yes', 'y', ' This class has been awesome!'],
];

//for loop to cycle through the questions in the array
for (var i = 0; i < questions.length; i++){
  var answer = prompt(questions[i][0]);
  if (answer.toLowerCase() === questions[i][1] || answer.toLowerCase() === questions[i][2]) {
    console.log(questions[i][0] + ' ' + answer);
    alert('Correct!' + questions[i][3]);
    document.write('<p class="answerBox">' + questions[i][0] + ' Correct! ' + questions[i][3]);
    point = point + 1;
  } else {
    console.log(questions[i][0] + ' ' + answer);
    alert('That is incorrect');
    document.write('<p class="answerBox">' + questions[i][0] + ' Wrong!' + questions[i][3]);
  }
}

//Sixth question to guess random number with four chances to guess
var randomNumber = Math.floor(Math.random() * 9) + 1;
var turns = 4;

while (turns > 0){
  var guessNumber = prompt('I am thinking of a number between 1 and 9. What is it? ' + turns + ' guesses left.');
  if (parseInt(guessNumber) === randomNumber) {
    console.log('Correct! The answer was ' + randomNumber);
    document.write('<p class="answerBox">' + 'Correct! The answer was ' + randomNumber);
    point = point + 1;
    turns = 0;
  } else {
    console.log('Wrong! The answer was ' + randomNumber);
    turns = turns - 1;
  }
}

if (turns === 0){
  alert('The number was ' + randomNumber + '.');
  document.write('<p class="answerBox">' + 'Wrong! The answer was ' + randomNumber);
}


//Seventh question about what states I have lived in with six chances to guess
var homes = ['kansas', 'alaska'];
var placesTurns = 6;

while (placesTurns > 0){
  var guessHome = prompt('I have lived in states other than Washington. Can you guess which ones? ' + placesTurns + ' guesses left.');
  if (guessHome.toLowerCase() === homes[0] || guessHome.toLowerCase() === homes[1]){
    console.log('Correct! I have lived in ' + guessHome);
    document.write('<p class="answerBox">' + 'Correct! The answer was ' + guessHome);
    // placesTurns = 0;
    point = point + 1;
    break;
  } else {
    console.log('Wrong! I have not lived in ' + guessHome);
    placesTurns = placesTurns - 1;
  }
}

if (placesTurns === 0){
  alert('The correct answers were Kansas or Alaska');
  document.write('<p class="answerBox">' + 'Wrong! The answer was Kansas or Alaska' );
}

alert('Congratulations ' + start + '! You got ' + point + ' questions correct out of 7!');
document.write('<p class="answerBox">' + 'Congratulations ' + start + '! You got ' + point + ' questions correct out of 7!');
console.log('You got ' + point + ' questions correct out of 7!');
