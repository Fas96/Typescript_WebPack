/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

let inputs = document.querySelectorAll('input');
function initPerson(options) {
    const defaults = {
        name: '',
        age: 0,
        country: 'Ghana',
    };
    return Object.assign(Object.assign({}, defaults), options);
}
let person = initPerson();
console.log(person);
let person1 = initPerson({ name: "bhim", age: 434, country: 'Uhsdsd' });
console.log(person1);
let users;
users = ["user0", "user01", "user02", "user03", "user04"];
let customers = [];
customers.push({
    name: "fdsd",
    age: 2
});
inputs.forEach(input => {
    let htmlInputElement = input;
    console.log(htmlInputElement.type);
});
let isLoggedUb = [];
let programmers = [];
programmers.push({ name: "Bhom", age: 25, skills: ['js', 'ty'] });
programmers.push({ name: "Bhom", age: 25, skills: ['js', 'ty'] });
programmers.push({ name: "Bhom", age: 25, skills: ['js', 'ty'] });
programmers.push({ name: "Bhom", age: 25, skills: ['js', 'ty'] });
programmers.push({ name: "Bhom", age: 25, skills: ['js', 'ty'] });
programmers.push({ name: "Bhom", age: 25, skills: ['js', 'ty'] });
console.log(programmers);
console.log("LLLLLLLLLLLdasdsadasdasddsdLLL");

/******/ })()
;