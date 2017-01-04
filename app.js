'use strict';

var start = confirm('My name is Kyle and I am going to ask you a few questions about me.  Please answer with YES/NO or Y/N.  Are you ready?');

//The questions I want to ask are arranged in this loop
var questions = [
  ['Do I live in Olympia?', 'yes', 'y', ' I have lived there for 3 years.'],
  ['Do I own a pet?', 'yes', 'y', ' I own 1 cat.'],
  ['Do I play the banjo?', 'no', 'n', ' I play guitar, but not the banjo.'],
  ['Do I have two daughters?', 'yes', 'y', ' I have two daughters!'],
  ['Do I like Code 201?', 'yes', 'y', ' This class has been awesome!'],
];

//for loop to cycle through the questions in the array
for (var i = 0; i < questions.length; i++){
  var answer = prompt(questions[i][0]);
  if (answer.toLowerCase() === questions[i][1] || answer.toLowerCase() === questions[i][2]) {
    console.log(questions[i][0] + ' ' + answer);
    alert('Correct!' + questions[i][3]);
    document.write('<p class="answerBox">' + questions[i][0] + ' Correct! ' + questions[i][3]);
  } else {
    console.log(questions[i][0] + ' ' + answer);
    alert('That is incorrect');
    document.write('<p class="answerBox">' + questions[i][0] + ' Wrong!' + questions[i][3]);
  }
}
