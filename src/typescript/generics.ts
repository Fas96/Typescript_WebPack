//GENERICS
const addUID= <T extends object>(obj:T)=>{
  let uid=Math.floor(Math.random()*100);
  return {...obj,uid}
}

let objectTypeGiven=addUID({name:'Fas Bhim',country:'Ghana',age:26})
console.log(objectTypeGiven)

//preventing the attachment of objects
//this does not work because we specified the object we are adding a uid to
//should be an object
let givenGivenString=addUID({})
console.log(givenGivenString.uid)

//creating enums to keep better track of indexes
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,

}
// how generics works with interfaces
interface Resource<T> {
  uid:number;
  resourceName:string;
  resourceType:any
  data:T;
}

const docTree:Resource<Object>={
  uid:23,
  resourceName:'base url',
  resourceType: ResourceType.AUTHOR,
  data: {name:'startDate',startDate:new Date()}
}

const docTreeStr:Resource<Object>={
  uid:23,
  resourceName:'base url',
  resourceType: ResourceType.DIRECTOR,
  data: "Base URL is the access point"
}

console.log(docTree,docTreeStr)
