
let greet:(a:string,b:string)=>void;

greet=(name:string,greeting:string)=>{
  console.log(`${name} says ${greeting}`)
}

// let calc=(n1:number,n2:number,action:string)=>{
//   switch (action) {
//     case 'add':return n1+n2;break;
//     case 'sub':return n1>n2?n1-n2:n2-n1;break;
//     case 'div':return n1/n2;break;
//     case 'mod':return n1%n2;break;
//   }
// }
//
// console.log(calc(3,34,'mod'))