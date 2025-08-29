//strings
let myName : string = "Vivek";
console.log(myName);

//Numbers 
let favNumber : number = 233;
console.log(favNumber);

//Boolean
let tsHard : boolean = false;
tsHard = true;
console.log(tsHard);

//Any
let color: any = "crimson";
console.log(color);
color = 10;
console.log(color);

//Regular function
function addone(num:number){
    return num+1;
}
const res = addone(3);
console.log(res);

//Arrow fun
const double = (x:number,y:number) => x*y;
const res1 = double(8,3);
console.log(res1);

function greet(person:string = "anonymous") {
    return `Hello ${person}`;
}
console.log(greet());

//Return annotation
function num(x:number):number {
    return x*x;
}
console.log(num(8));

const double2 = (x:number) : number => x*x;
console.log(double2(4));
//void function
function printmsg(msg:string):void {
    console.log(`this is my message ${msg}`)
}
console.log(printmsg("h"))

//Array
const nuums : number[] = [2,4,6,7,8];
console.log(nuums);

const matrix : number[][] = [
    [2,3,4],
    [5,7,8],
    [9,7,6]
]
console.log(matrix);

//7:39

//object
const person : {firstname:string; lastname:string; age:number} = {
    firstname:"vivek",
    lastname:"k",
    age:20
}