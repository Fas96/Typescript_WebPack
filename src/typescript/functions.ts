let greeting: Function;

greeting=(words:string='')=>{
  console.log("say hi to "+words)
}

greeting()
greeting("my friend")


const add=(a:number,b:number,c:number=10):number=>{
  return a + b+c;
}

console.log(add(34,34,-203))


export {
  greeting,
    add
}