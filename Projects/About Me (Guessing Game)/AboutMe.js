'use strict'

var name = prompt ('Who do you think I am?');
console.log (name);

var lowerCaseName = name.toLowerCase();
console.log (lowerCaseName);

while (lowerCaseName !== 'brandyn'){
    name = prompt ('Who do you think I am?');
    lowerCaseName = name.toLowerCase();
}

var dog = prompt (name 
    + ', very good. Yes my name is Brandyn, can you guess what my favorite animal is? I\'ll give you hint, it has a tale.');
console.log (dog);

var lowerCaseDog = dog.toLowerCase();
console.log (lowerCaseDog);

while (lowerCaseDog !== 'dogs'){
    dog = prompt ('Can you guess my favorite animal?');
    lowerCaseDog = dog.toLowerCase();
}

var drawing = prompt (dog 
    + ', very good. Now can you try to guess what my favorite hobby is? I\'ll give you a hint, It has to do with a pen and paper.');
console.log (drawing);

var lowerCaseDrawing = drawing.toLowerCase();
console.log (lowerCaseDrawing);

while (lowerCaseDrawing !== 'drawing'){
    drawing = prompt ('Can you guess my favorite hobby?');
    lowerCaseDrawing = drawing.toLowerCase();
}

var snowboarding = prompt (drawing 
    + ', your doing great. I wonder if you might know my favorite sport to do outside? I\'ll give you a hint, it has to do with the snow.');
console.log (snowboarding);

var lowerCaseSnowboarding = snowboarding.toLowerCase();
console.log (lowerCaseSnowboarding);

while (lowerCaseSnowboarding !== 'snowboarding'){
    snowboarding = prompt ('What is my favorite sport to do outside?');
    lowerCaseSnowboarding = snowboarding.toLowerCase();
}

var end = prompt (snowboarding 
    + ', man you must know me so well already. If you want this to be the end of the random questions, then answer Yes or No.');
console.log (end);

if (end === 'y' || end === 'Y' || end === 'yes' || end === 'Yes'){
    alert('GOOD, so am I. But my name is ' + name 
    + ' and i love ' + dog 
    + ' so much that I dont think I can live without one. Then one of my other favorite things to do is ' + drawing 
    + '. It alows me to have a creative outlit, that I just enjoy. Then last but not least is what I love to do when I have a chance, that would be ' + snowboarding 
    + '. Welp thats everything you need to know about me, maybe. We can leave that for another time, I hope you have a great day......Bye.');
}else{
    alert('Well your no fun.....BYE!!!!');
}
