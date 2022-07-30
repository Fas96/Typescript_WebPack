
import {HasFormatter} from "./interface";
import {Invoice} from "./Invoice";
import {Payment} from "./Payment";

const anchor: HTMLAnchorElement =document.querySelector('a') as HTMLAnchorElement


const form:HTMLFormElement=document.querySelector('form') as HTMLFormElement
console.log(form)
const selectFrom=document.querySelector('.new-item-form') as HTMLFormElement;



class ListTemplate{
  constructor(private container:HTMLUListElement) {}


  render(item:HasFormatter,heading:string,pos:'start'|'end'){
    const li=document.createElement('li');

    const h4=document.createElement('h4');
    h4.innerText=heading;
    li.append(h4);
    const p=document.createElement('p');
    p.innerText=item.format();
    li.append(p);
    if(pos==='start'){
      this.container.prepend(li)
    }else{
      this.container.append(li)
    }
  }
}

// list template instance
const ul =document.querySelector('ul') as HTMLUListElement;

const list= new ListTemplate(ul);


const type= document.querySelector('#type') as HTMLSelectElement;
const toFrom= document.querySelector('#tofrom') as HTMLInputElement;
const details= document.querySelector('#details') as HTMLInputElement;
const amount= document.querySelector('#amount') as HTMLInputElement;

selectFrom.addEventListener('submit',(e:Event)=>{
  e.preventDefault();
  let doc:HasFormatter;
  if(type.value==='invoice'){
    doc=new Invoice(toFrom.value,details.value,amount.valueAsNumber)
  }else{
    doc=new Payment(toFrom.value,details.value,amount.valueAsNumber)
  }
  list.render(doc,type.value,'end');


})
