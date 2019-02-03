'use strict'
function intro() {
    var name = prompt ('Who do you think I am?');
    console.log (name);

    var lowerCaseName = name.toLowerCase();
    console.log (lowerCaseName);

    while (lowerCaseName !== 'brandyn'){
        name = prompt ('Who do you think I am?');
        lowerCaseName = name.toLowerCase();
    }
}

intro();

function dog1() {
    var dog = prompt('Brandyn, very good. Yes my name is Brandyn, can you guess what my favorite animal is? I\'ll give you hint, it has a tail.');
    console.log(dog);
    var lowerCaseDog = dog.toLowerCase();
    console.log(lowerCaseDog);

    while (lowerCaseDog !== 'dogs') {
        dog = prompt('Can you guess my favorite animal?');
        lowerCaseDog = dog.toLowerCase();
    }
}

dog1();

function drawing() {
var drawing = prompt ('Dog, very good. Now can you try to guess what my favorite hobby is? I\'ll give you a hint, It has to do with a pen and paper.');
console.log (drawing);

var lowerCaseDrawing = drawing.toLowerCase();
console.log(lowerCaseDrawing);

while (lowerCaseDrawing !== 'drawing') {
    drawing = prompt('Can you guess my favorite hobby?');
    lowerCaseDrawing = drawing.toLowerCase();
  }
}
drawing();

function snowboarding() {
var snowboarding = prompt ('Dog, your doing great. I wonder if you might know my favorite sport to do outside? I\'ll give you a hint, it has to do with the snow.');
console.log (snowboarding);

var lowerCaseSnowboarding = snowboarding.toLowerCase();
console.log(lowerCaseSnowboarding);

while (lowerCaseSnowboarding !== 'snowboarding') {
    snowboarding = prompt('What is my favorite sport to do outside?');
    lowerCaseSnowboarding = snowboarding.toLowerCase();
  }
}

snowboarding();

function number() {
var guessNumber = prompt ('Snowboarding, man you must know me so well. Now lets try something different, can you guess what my favorite number is?');
console.log (guessNumber);

var i = 4;
var number = 14;

for (i = 0; i < 4; i++) {
    console.log(i);
    if (number < guessNumber) {
        guessNumber = prompt('You\'ve guessed to high!');
        continue;
    } else if (number > guessNumber) {
        guessNumber = prompt('You\'ve guessed too low!');
        continue;
    } alert('Good Job!');
    break;
  }
}
number();

function countries(){
var livedCountries = prompt('14, well done! Can you guess you guess a country I have lived in besides the US? I\'ll give you a hint, there mostly in Asia.');
console.log(livedCountries);

var countriesGuess = ['Japan', 'Hong Kong', 'Korea'];

for (var j = 0; j < 6; i++) {
    for (var i = 0; i < countriesGuess.length; i++){
        if(countriesGuess[i].toLowerCase() === livedCountries.toLowerCase()){
            console.log('item found', countriesGuess[i]);
            alert ('Correct!: All possible answers are, Japan, Korea, and Hong Kong.');
            j=6
            break;
        }
        
    }
    if(j < 6){
        livedCountries = prompt('Incorrect, please try again!');
        console.log(livedCountries);
    }
        
}
}

countries();

function end(){
var end = prompt('If you want this to be the end of the random questions, then answer Yes or No.');
console.log(end);

if (end === 'y' || end === 'Y' || end === 'yes' || end === 'Yes') {
    alert('GOOD, so am I. But my name is Brandyn, and i love dogs so much that I dont think I can live without one. Then one of my other favorite things to do is drawing. It alows me to have a creative outlit, that I just enjoy. Then last but not least is what I love to do when I have a chance, that would be snowboarding. Welp thats everything you need to know about me, maybe. We can leave that for another time, I hope you have a great day......Bye.');
} else {
    alert('Well your no fun.....BYE!!!!');
  }
}

end();

function returnScore(){
    alert('Your score is ' + getScore() + '/7')
    var userInput = [name, dogs, drawing, snowboarding, guessNumber, livedCountries, end];
var answers = ['Brandyn', 'Dogs', 'Drawing', 'snowboarding', '14', 'Japan', 'Korea', 'Hong Kong', 'Yes']

function getScore() {
     var score = 0;
     var numQuestions = 7;
     var form = document.getElementById('form');


     for (var i = 0; i < numQuestions; i++) {
          if (userInput[i] == answers[i]) {
               score += 1;
          } else {
               score += 0;
          }

     }
     return score;
} 



}

returnScore();