function add(n1:number, n2:number, showRes: boolean, resPhrase: string){
    if(showRes){
        console.log(resPhrase, n1 + n2)
    }else{
        return n1 + n2
    }
}

let number1: number = 5;
// we can absolutely declare a type here, but type inference often makes it
// unnecessary; it's considered redundant and not best practice
let num1: number;
// above case IS best practice, because the variable isn't yet assigned, so 
// this lets TypeScript know what type it should expect when it is assigned
const number2 = 2.8;

const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);
