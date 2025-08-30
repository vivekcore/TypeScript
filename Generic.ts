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


function getRandomKeyVal<T>(obj: {[key: string] : T}) :  {key: string; value: T;} {
    const keys = Object.keys(obj);
    const randKey = keys[Math.floor(Math.random() * keys.length)];
    return {key: randKey, value: obj[randKey]};
}

const stringObj = {a: "apple", b: "banana", c: "cherry"};
const randomp = getRandomKeyVal<string>(stringObj);
console.log(randomp);

const numObj = {one: 1, two: 2, three: 3};
const num1 = getRandomKeyVal<number>(numObj);
console.log(num1);