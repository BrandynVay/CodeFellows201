var name = prompt ('Who do you think I am?');
console.log (name);

if (name !== 'Brandyn'){
    name = prompt ('Who do you think I am?');
}

var Dogs = prompt ( name + ' , very good. Yes my name is Brandyn, can you guess what my favorite animal is? Ill give you hint, it has a tale.');
console.log (Dogs);

if (Dogs !== 'Dogs'){
    Dogs = prompt ('Can you guess my favorite animal?');
}

var drawing = prompt (dogs + ' ,very good. Now can you try to guess what my favorite hobby is? Ill give you a hint, It has to do with a pen and paper.');
console.log (drawing);

if (drawing !== 'Drawing'){
    drawing = prompt ('Can you guess my favorite hobby?');
}

var snowboarding = prompt (drawing + ' ,your doing great. I wonder if you might know my favorite sport to do outside? Ill give you a hint, it has to do with the snow.');
console.log (snowboarding);

if (snowboarding !== 'snowboarding'){
    snowboarding = prompt ('What is my favorite sport to do outside?');
}

var end = prompt (snowboarding + ' ,man you must know me so good already. If you want this to be the end of the random questions, then answer Y or N.');
console.log (end);

if (end === 'Y'){
    alert('GOOD, so am I. But my name is ' + name + ' and i love ' + dogs + ' so much that I dont think i can live without one. Then one of my other favorite things to do is ' + drawing + ' . It alows me to have a creative outlit, that i just enjoy. Then last but not least is what i love to do when i have a chance, that would be ' + snowboarding + ' . Welp thats everything you need to know about me, maybe. We can leave that for another time, I hope you have a great day......Bye.');
}else{
    alert('Well your no fun.....BYE!!!!');
} 