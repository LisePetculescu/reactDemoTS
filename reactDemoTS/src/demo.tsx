/* eslint-disable @typescript-eslint/no-unused-vars */
let numb: number = 123;

numb = true;

const numbers = [1, 2, 3];

// numb.toString();
// numbers.values();

// numbers.push("");

// const numbers2:number = [];

// const numbers3:Array<number> = [];

interface Person {
  id?: number;
  name: string;
  age: number;
}

// const persons:Person[] = [];

const persons: Array<Person> = [];

persons.push({ name: "kurt", age: 25 });

function createPerson(name: string, age: number): Person {
  return { name: name, age: age };
}

const p = createPerson("kurt", 23);

p.age;
