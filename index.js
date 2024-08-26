// const fs = require("fs");

// fs.writeFile("Message.text", "Hello Node", (er) => {
//   if (er) throw er;
//     console.log("File Created");
// });

// fs.readFile("Message.text", "utf-8", (er, data) => {
//   if (er) throw er;
//   console.log(data);
// })


// var generateName = require("sillyname");

import generateName from "sillyname";
var sillyName = generateName();

console.log('My name is', sillyName);

import {randomSuperhero} from "superheroes";
var randomSupe = randomSuperhero();

console.log('My superhero name is', randomSupe);