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
console.log(person);

function printuser(): {name:string; age:number; location:string} {
    return{
        name:"vivek",
        age:20,
        location:"china"
    }
}
console.log(printuser());

//custom types
type User = {
    name: string;
    age: number;
    readonly location: string;
    email?: string;
}

const printUsetInfo = ( user: User) => ({
    Name:user.name,
    age:user.age,
    location:user.location
})

const result = printUsetInfo({name:"vivek", age:20, location:"India",email:"vivek.inz8@gmailcom"});
console.log(result);

const user : User = {
    name:"vivek",
    age:20,
    location:"Japane"
}
//user.location = "India" cant change
console.log(user);

//Intersection type

type UserInfo = {
    first: string;
    last:string;
    age: number;
}

type AccDetails = {
    password:string;
    email:string;
}

type User1 = UserInfo & AccDetails;

const vivek : User1 = {
    first:"vivek",
    last:"k",
    age:20,
    email:"vivek@gmail.com",
    password:"23dfg7654"
}
console.log(vivek);
console.log(`Name:${vivek.first}`);

//Union

let password : string | number = 20; // either a string or number

type User2 = {
    first:string;
    last:string;
    age:number;
}

type AccDetails1 = {
    email:string;
    password:string;
}

let per : User2 | AccDetails1 = {
    email : "zyx@gmail.com",
    password:"vivek",
}

const items: (number | string)[] = [1,3,'adad'];

//Literal Types

let colors : "red"|"crimson"|"fusha";
colors = "red"; //valid
//colors = "yellow"; // invalid

let passwor: "secrt" = "secrt";
//passwor = 234; ivalid
console.log(passwor);

//Tuple
let myTuple : [number, string];
myTuple = [10,"hello"];
console.log(myTuple);

const game : [string,string,number] = ["game1","game2",3];
console.log(game);

//Enums
enum WeatherConditon {
    sunny = "Sunny",
    cloudy = "Cloudy",
    rainy = "Rainy",
}

console.log(WeatherConditon)
console.log(`current weather is ${WeatherConditon.sunny} `)

//Classes
class Person {
    private first:string;
    private last:string;

    constructor(first:string,last:string){
        this.first = first;
        this.last = last;
    }

    getName() : string {
        return `${this.first} ${this.last}`;
    }

}

let p1 = new Person("John","Doe");
console.log(p1.getName())
