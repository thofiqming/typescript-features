//array
var arr = [{ name: 'thofiq', age: 28 }];
function getValue() {
    return arr;
}
console.log(getValue());
//string array
var names = ["thofiq", "alice"];
names.forEach(function (e) { return console.log(e.toUpperCase()); });
//object return type
function getPerson(person) {
    var _a;
    var name = (_a = person.name) === null || _a === void 0 ? void 0 : _a.toUpperCase();
    var age = person.age;
    return { name: name, age: age };
}
console.log(getPerson({ name: 'thofiq', age: 28 }));
console.log(getPerson({ name: null, age: 28 }));
