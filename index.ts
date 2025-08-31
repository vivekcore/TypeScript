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
function num3(x:number):number {
    return x*x;
}
console.log(num3(8));

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
class Human {
    private first:string;
    public last:string;
    protected age:number;

    constructor(first:string,last:string ,age:number){
        this.first = first;
        this.last = last;
        this.age = age;
    }

    getName() : string {
        return `${this.first} ${this.last} Age: ${this.age}`;
    }

}
class Person extends Human{
    constructor(first:string,last:string,age:number){
        super(first,last,age);
       
    }
}

const x9 = new Person("huxn","wef",30);
console.log(x9);

//Getters and Setters

class myClass {
    private _myProperty: number = 0;
    
    get myProperty() : number{
        return this._myProperty;
    }

    set myProperty(value:number){
        this._myProperty = value;
    }
}

const myInstance = new myClass();

console.log(`current value :  ${myInstance.myProperty}`)
myInstance.myProperty = 100;
console.log(`current value :  ${myInstance.myProperty}`)

//Interface 

interface computer {
    readonly name: string;
    ram?: number;
    hdd: number;
}

const compExample : computer = {
    name:"k9h",
    ram:4,
    hdd:120,
};
console.log(compExample.name, compExample.ram , compExample.hdd);

//Interface for function

interface MathOp {
    (x:number,y:number) :number;
}

const add : MathOp = (a,b) => a+b;
console.log(add(4,5));

interface Man {
    firstName: string;
    lastName: string;
    age: number;
    sayHello(): void;
}

function meet(man:Man) {
    console.log(`Hello, ${man.firstName} ${man.lastName}`);
    man.sayHello();
}

const johns: Man = {
    firstName: "John",
    lastName: "cena",
    age: 30,
    sayHello(){
        console.log("helo");
    }
}
meet(johns);

interface Song{
    songName: string;
    singerName: string;
    printSongInfo(rating: number,genra: string) : string | number;
}

const song1 : Song = {
    songName: "Natural",
    singerName: "Imagin Drigon",
    printSongInfo: (r,g) => {
        return `Rating ${r}, Genra: ${g}`
    }
}

console.log(song1.printSongInfo(8.9,"Imagin Drigon"))
song1

interface MoviesInfo {
    readonly movieName: string;
    readonly author: string;
    Actors(actors: string[], rating : number) : string[] | string | number;
}

interface Genra extends MoviesInfo {
    genra : string;
}

const chilgoza : Genra = {
    movieName : "Chilgoza Prince",
    author : "Vivek",
    genra : "Action & Drama",
    Actors: (actors,rating) => {
       return `Actors ${[...actors,"champin"]} & Raing ${rating}`
    }
}

console.log(chilgoza.Actors( ["Minion Prince","Archer Qween","Warden","King"],9));

//Interface with classes

interface Vechile {
    start(): void;
    stop():void;
}

class Car implements Vechile{
    start(){
        console.log('Car is starting...')
    }
    stop(){
        console.log('Car is stopping...')
    }
}

const myCar = new Car()
myCar.start(); 
myCar.stop();

//Declaration merging

//Orignal Interface

interface Car{
    brand: string;
    start(): void;
}

interface Car{
    model : string;
    stop():void;
}

const mycar : Car = {
    brand: "combra",
    model : "GT900",
    start(){
        console.log("Car is Starting...")
    },
    stop(){
        console.log("Car is stopping...");
    }
}
mycar
mycar.start();
mycar.stop();

