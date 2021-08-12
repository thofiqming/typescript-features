var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//union type
function unionType(param) {
    return param;
}
console.log('union type value : ', unionType("test"), unionType(10));
function typeAlias(money) {
    return money;
}
var typeAliasValue = typeAlias({ currency: 'USD', value: 1 });
console.log(typeAliasValue);
function interfaceExample(param) {
    return param;
}
console.log(interfaceExample({ type: 'good', friends: true }));
function typeInheritance(param) {
    return param;
}
console.log(typeInheritance({ type: 'inheritance type', child: 'child' }));
function addingNewFieldToAnInterface(param) {
    return param;
}
console.log(addingNewFieldToAnInterface({ field: 'existing field', newfield: 'added new field' }));
//Type assertion
/*function typeAssertion(param: HTMLElement): HTMLElement {
    return param;
}
let elementById = <HTMLElement> document.getElementById("id");
console.log(typeAssertion(elementById));*/
// const typeAssertion = (exp as any) as any; // sample example of using as
//literal type
var x = "type";
// x = "do it"; // x is of type string "type" so can't assign x to different value
//enum example
var Name;
(function (Name) {
    Name["FIRST_NAME"] = "firstname";
    Name["SECOND_NAME"] = "secondname";
    Name["LAST_NAME"] = "lastname";
})(Name || (Name = {}));
console.log(Name.FIRST_NAME);
//literal inference
var inference = { url: "www.thofiq.com", method: "POST" };
var url = inference.url, method = inference.method;
console.log(url, method);
//strict null checks
var nullValue = null;
// console.log(nullValue > 1 ? 1 : 0); //tsconfig.json if strictNullCheck value is true then it will cause error if false will allow to continue
var EnumValue;
(function (EnumValue) {
    EnumValue[EnumValue["A"] = 1] = "A";
    EnumValue[EnumValue["B"] = 2] = "B";
    EnumValue[EnumValue["C"] = 2] = "C";
})(EnumValue || (EnumValue = {}));
console.log(EnumValue.B); // print 2
//narrowing
function paddingLeft(paddingValue, inputValue) {
    if (paddingValue instanceof Number) {
        return new Array(paddingValue + 1).join('z') + inputValue;
    }
    return paddingValue + inputValue;
}
console.log(paddingLeft(Number(10), "paddingRightValue"));
//function type
function customPrint(fn) {
    fn("function type");
}
function printToConsole(s) {
    console.log(s);
}
customPrint(printToConsole);
//generic function
function genericFunctionTest(param) {
    console.log(param);
}
genericFunctionTest("Generic Test: " + "test");
genericFunctionTest("Generic test: " + 10);
function testFunctionType(input) {
    input("40");
}
testFunctionType(function (a) { return console.log(a); });
function map(input, fnc) {
    return input.map(fnc);
}
var mapValues = map([1, 2, 3, 4], function (val) { return String(val); });
console.log(mapValues);
//generic array concatenation
function concat(x, y) {
    return x.concat(y);
}
var concatinationResult = concat([1, 2, 3, 4], [8, 9]);
console.log(concatinationResult);
//function overloading doesnt work in ts
/*function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;*/
//classes
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = new Person();
person.name = 'thofiq';
console.log(person);
//error class
var CustomError = /** @class */ (function (_super) {
    __extends(CustomError, _super);
    function CustomError(message) {
        return _super.call(this) || this;
    }
    return CustomError;
}(Error));
var customError = new CustomError("error message");
console.log(customError.message);
keyword = "hello world";
var StaticClassTest = /** @class */ (function () {
    function StaticClassTest() {
    }
    StaticClassTest.printValues = function () {
        console.log('printing values');
    };
    return StaticClassTest;
}());
StaticClassTest.printValues();
