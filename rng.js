const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let names = [
  "John",
  "Gosho",
  "Peter",
  "Pesho",
  "Steven",
  "Marie",
  "Angela",
  "Petrana",
  "Milena",
  "Lilly",
  "Ginny",
];
let places = [
  "Dolno Spanchevo",
  "the UK",
  "Poland",
  "Petrich",
  "Smolqn",
  "Bulgaria",
  "Italy",
  "Romania",
];
let adverbs = [
  "slowly",
  "quickly",
  "calmly",
  "stupidly",
  "menacingly",
  "glaringly",
  "angrily",
  "happily",
  "confusedly",
  "annoyingly",
];
let verbs = [
  "beat up",
  "threw",
  "shot",
  "saw",
  "laughed at",
  "stepped on",
  "punched",
  "lit",
  "watched",
  "missed",
  "scared",
];
let nouns = [
  "the neighbour",
  "a friend",
  "a bench",
  "a wall",
  "a bus",
  "a basketball",
  "a pinata",
  "a sign",
];
let details = [
  "in the backyard",
  "at a hospital",
  "at the gas station",
  "everywhere",
  "nowhere",
  "late at night",
  "every morning",
];
// filling all arrays with information later to be used in each sentence

const chooseTheWord = function (wordArray) {
  return wordArray[Math.floor(Math.random() * wordArray.length)];
};
// function to get a random element of an array 

const printTheSentence = function () {
  let name = chooseTheWord(names);
  let place = chooseTheWord(places);
  let adverb = chooseTheWord(adverbs);
  let verb = chooseTheWord(verbs);
  let noun = chooseTheWord(nouns);
  let detail = chooseTheWord(details);

  let sentence = `${name} from ${place} ${adverb} ${verb} ${noun} ${detail}.`;
  console.log(sentence);
};
// function to create 1 phrase with the chooseTheWord function from each of the arrays and then interpolate everything into a string 


let recursivePrintSentence = function () {
  rl.question("Press [ENTER] to generate a new sentence!", function () {
    printTheSentence();
    console.log();
    recursivePrintSentence();
  });
};
recursivePrintSentence();
// recursively asking the user to press enter and print a random sentence
