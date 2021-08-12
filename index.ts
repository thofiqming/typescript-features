//union type
function unionType(param: string | number): string | number {
    return param;
}

console.log('union type value : ', unionType("test"), unionType(10));

//type alias
type Money = {
    currency: string;
    value: number
};

function typeAlias(money: Money): Money {
    return money;
}

const typeAliasValue = typeAlias({currency: 'USD', value: 1});
console.log(typeAliasValue);

//interface
interface Life {
    type: string;
    friends: boolean;
}

function interfaceExample(param: Life): Life {
    return param;
}

console.log(interfaceExample({type: 'good', friends: true}));

//type inheritance
type TypeInheritance = {
    type: string;
}
type ChildTypeInheritance = TypeInheritance & {
    child: string;
}

function typeInheritance(param: ChildTypeInheritance): ChildTypeInheritance {
    return param;
}

console.log(typeInheritance({type: 'inheritance type', child: 'child'}));

//adding new fields to exiting inerface
interface addNewField {
    field: string;
}

interface addNewField {
    newfield: string;
}

function addingNewFieldToAnInterface(param: addNewField): addNewField {
    return param;
}

console.log(addingNewFieldToAnInterface({field: 'existing field', newfield: 'added new field'}));

//Type assertion
/*function typeAssertion(param: HTMLElement): HTMLElement {
    return param;
}
let elementById = <HTMLElement> document.getElementById("id");
console.log(typeAssertion(elementById));*/

// const typeAssertion = (exp as any) as any; // sample example of using as

//literal type
let x: "type" = "type";

// x = "do it"; // x is of type string "type" so can't assign x to different value


//enum example
enum Name {
    FIRST_NAME = "firstname", SECOND_NAME = "secondname", LAST_NAME = "lastname"
}

console.log(Name.FIRST_NAME);

//literal inference
const inference = {url: "www.thofiq.com", method: "POST"};
const {url, method} = inference;
console.log(url, method);

//strict null checks
const nullValue = null;

// console.log(nullValue > 1 ? 1 : 0); //tsconfig.json if strictNullCheck value is true then it will cause error if false will allow to continue

enum EnumValue {
    A = 1,
    B,
    C = 2,
}

console.log(EnumValue.B) // print 2

//narrowing
function paddingLeft(paddingValue: Number | string | number, inputValue: string) {
    if (paddingValue instanceof Number) {
        return new Array(paddingValue as number + 1).join('z') + inputValue;
    }
    return paddingValue + inputValue;
}

console.log(paddingLeft(Number(10), "paddingRightValue"))

//function type
function customPrint(fn: (v: string) => void) {
    fn("function type");
}

function printToConsole(s: string): void {
    console.log(s)
}

customPrint(printToConsole);

//generic function
function genericFunctionTest<T>(param: T) {
    console.log(param)
}

genericFunctionTest("Generic Test: " + "test");
genericFunctionTest("Generic test: " + 10);

//function type
type inputFunction = (a: string) => void;

function testFunctionType(input: inputFunction): void {
    input("40");
}

testFunctionType((a) => console.log(a));

function map<Input, Output>(input: Input[], fnc: (val: Input) => Output): Output[] {
    return input.map(fnc);
}

let mapValues = map([1, 2, 3, 4], (val) => String(val));
console.log(mapValues);

//generic array concatenation
function concat<T extends Number>(x: T[], y: T[]): T[] {
    return x.concat(y);
}

const concatinationResult = concat([1, 2, 3, 4], [8, 9]);
console.log(concatinationResult);

//function overloading doesnt work in ts
/*function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;*/

//classes
class Person {
    name!: string;
    age!: number;
}
const person = new Person();
person.name = 'thofiq';
console.log(person);

//error class
class CustomError extends Error {
    constructor(message: string) {
        super();
    }
}

const customError = new CustomError("error message")
console.log(customError.message);

//declare keyword
declare var keyword: string;
keyword="hello world";

class StaticClassTest {
    static printValues(): void {
        console.log('printing values');
    }
}

StaticClassTest.printValues();








