interface isPerson {
  name:string;
  age:number;
  speak(a:string):void;
  spend(a:number):number;
}

let me: isPerson={
  name: 'fas',
  age: 26,
  speak(a: string) {
    console.log('fas likes to take about'+a)
  },
  spend(a: number): number{
    return a*100;
  }
}
export interface HasFormatter{
  format():string;
  toString():string;
}


