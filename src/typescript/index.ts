import {add,greeting} from "./functions";

let inputs:NodeListOf<HTMLInputElement> =document.querySelectorAll('input');


interface Person {
  name:string,
  age:(number|string|boolean),
  country?: string
}



function initPerson(options?: Partial<Person>): Person {
  const defaults = {
    name: '',
    age: 0,
    country: 'Ghana',
  };

  return {
    ...defaults,
    ...options,
  };
}

let person:Person=initPerson();
console.log(person)

let person1:Person=initPerson({name:"bhim",age:434,country:'Uhsdsd'});
console.log(person1)

let users: Array<string>;
users=["user0","user01","user02","user03","user04"]

let customers:Person[]=[];
customers.push({
  name:"fdsd",
  age:2
});

inputs.forEach(input =>{
  let htmlInputElement:HTMLInputElement=input;
  console.log(htmlInputElement.type)

})


let isLoggedUb:boolean[]=[];


let programmers:{
  name:string,
  age:number,
  skills:string[]
}[]=[]

programmers.push({name:"Bhom",age:25,skills:['js','ty']})

greeting("Fas my friend")
console.log(add(21,2,23))



