//Normal function 

function printNumber(item:number, defalutValue: number): [number,number] {
    return [item,defalutValue];
}

function printString(item:string, defalutValue: string): [string,string] {
    return [item,defalutValue];
}

function printBool(item:boolean, defalutValue: boolean): [boolean,boolean] {
    return [item,defalutValue];
}

const num = printNumber(23,45)
const str = printString("hello",'there')
const bool = printBool(true,false);
console.log(num);
console.log(str);
console.log(bool);

//----------------------------------------------------------------------------------//
//                                     Generic Function
//----------------------------------------------------------------------------------//

function uniqueDataTypesFun<Type>(item: Type,defalutValue: Type) : [Type,Type] { // or use 'T' instead of 'Type'
    return [item,defalutValue];
}

const an = uniqueDataTypesFun<number>(12,34);
const i = uniqueDataTypesFun<string>("hello","D");
const boool = uniqueDataTypesFun<boolean>(true,false);
console.log(an);
console.log(i);
console.log(boool);


function getRandomKeyVal<T>(obj: {[key: string] : T}) :  {key: string; value: T} {
    const keys = Object.keys(obj);
    if (keys.length === 0) {
        throw new Error("Object has no keys");
    }
    const randKey = keys[Math.floor(Math.random() * keys.length)];
    if (randKey === undefined) {
        throw new Error("Random key selection failed");
    }
    const value = obj[randKey];
    if (value === undefined) {
        throw new Error("Selected key does not exist in object");
    }
    return {key: randKey, value: value};
}

const stringObj = {a: "apple", b: "banana", c: "cherry"};
const randomp = getRandomKeyVal<string>(stringObj);
console.log(randomp);

const numObj = {one: 1, two: 2, three: 3};
const num1 = getRandomKeyVal<number>(numObj);
console.log(num1);

function FilterArray<T>(array:T[], condition: (item:T) => boolean) : T[]{
    return array.filter((item) => condition(item));
}

const numArray = [1,2,3,4,5,6,7,8,9,10]

const evenNum = FilterArray<number>(numArray, (num) => num%2 === 0);
console.log(evenNum);

const wordArray = ['apple','banana','cherry','date'];
const shortwords = FilterArray<string>(wordArray, (word) => word.length < 6);
console.log(shortwords);

function reverseorder<T,U>(value1 : T, value2 : U) : [U,T]{
    return [value2,value1];
}

const data2 = reverseorder<string,number>('hello',30);
console.log(data2);

// class

class Box<T> {
    private content : T;

    constructor(initialContent : T){
        this.content = initialContent;
    }

    getContent() : T{
        return this.content;
    }

    setContent(initialContent : T) : void{
        this.content = initialContent;
    }
}

const box1 = new Box<string>('Hello, Typescript');
console.log(box1.getContent());
box1.setContent("hello,HuXn");
console.log(box1.getContent()) 

//Type Narrowing
//type of Operator
type myType = string | number;

function example(value : myType) : void{
    if(typeof(value) === "string" ){
        console.log(value.toUpperCase());
    }
    else{
        console.log(value.toFixed(2));
    }
}
example(5);
example('hello');

//Instance of Operator

class Dog {
    bark() : void{
        console.log("woff woff");
    }
}
class Cat {
    meow() : void{
        console.log("mewo mwoe");
    }
}

function sound( Animal : Dog | Cat) : void{
    if(Animal instanceof Dog){
        Animal.bark();
    }
    else{
        Animal.meow();
    }
}

const myDog = new Dog();
const myCat = new Cat();

sound(myDog);
sound(myCat);

type employ = {
    id: number;
    name : string;
}
type manager = {
    company: string;
    role: string;
}

type combine = employ & manager;

const compData : combine = {
    id: 23445,
    name: "moham",
    company: "dl9",
    role: "manager",
}
console.log(compData);