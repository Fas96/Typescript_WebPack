import {HasFormatter} from "./interface.js";

export class Payment implements HasFormatter{

  constructor(
      private readonly _recipient:string,
      private _details:string,
      private _amount:number
  ) {

  }
  format(){
    return `${this._recipient} owes ${this._amount} for ${this._details}`
  }
  get client(): string {
    return this._recipient;
  }
  get details(): string {
    return this._details;
  }

  set details(value: string) {
    this._details = value;
  }

  get amount(): number {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
  }
}

let invoice= new Payment('Fas','works on the best  AI projects at Monash',3233)
let invoice1= new Payment('Bhim','Monash works',323232)
invoice.amount=233;
console.log(invoice);
console.log(invoice)

let invoices:Payment[]=[]
invoices.push(invoice)
invoices.push(invoice1)
console.log(invoices)
