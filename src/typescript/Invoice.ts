  import {HasFormatter} from "./interface.js";

  export  class Invoice implements HasFormatter{

  constructor(
      private readonly _client:string,
      private _details:string,
      private _amount:number
  ) {

  }
  format(){
    return `${this._client} owes ${this._amount} for ${this._details}`
  }
  get client(): string {
    return this._client;
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

let invoice= new Invoice('Fas Payment','works on the best  AI projects at Monash',3233)
let invoice1= new Invoice('Bhim Payment','Monash works',323232)
invoice.amount=233;
console.log(invoice);
console.log(invoice)

let invoices:Invoice[]=[]
invoices.push(invoice)
invoices.push(invoice1)
console.log(invoices)
