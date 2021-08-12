//array
const arr: any[] = [{name: 'thofiq', age: 28}];

function getValue(): any[] {
    return arr;
}

console.log(getValue())


//string array
const names = ["thofiq", "alice"];
names.forEach(e => console.log(e.toUpperCase()));


//object return type
function getPerson(person: { name: string, age: number }): { name: string, age: number } {
    const name = person.name?.toUpperCase();
    const age = person.age;
    return {name, age};
}

console.log(getPerson({name: 'thofiq', age: 28}))
console.log(getPerson({name: null, age: 28}))
