// CONST and Let
const name = "a"

const Person = {
    name: "test",
    age: 18,
}
Person.name = "simple";

const nums = [1, 2, 4, 5, 6];
nums.push(6);

// Arrow function

function name2(name) {
    console.log(`hello ${name}`);
} // regular function

const sayHi = name => console.log(`hello ${name}`);


// forEach
const flowers = ['lan', 'hoalan', 'hoamai', 'hoacuc', 'hoadao'];
flowers.forEach((el, index) => console.log(el, index));

// Map

const getNumber = flowers.map((el, index) => el.slice(0, -1).toLocaleUpperCase()); // [2, 4]

// Filter
const people = [{
        id: 1,
        name: "t1"
    },
    {
        id: 2,
        name: "t2"
    },
    {
        id: 3,
        name: "t3"
    },
    {
        id: 3,
        name: "t3"
    },
];

const people3 = people.filter(person => person.id !== 3);

// Spread operator
const arr4 = [2,3,4,5]; 
const arr5 = [...arr4, 4]; // [2,3,4,5,4]
const arr6 = [...arr4.filter(num => num !== 2)]; // [3, 4, 5]

const per3 = {
    name: "xim",
    age: 3,
}

const newPer3 = {
    ...per3,
    email: "xinchao@email.com",
}

// Destructuring

const profileCandidate = {
    name1: "test",
    address: {
        street: "cau giay, ha noi",
        city: "ha noi",
        contact: {
            number: "+84-9990",
            email: "info@mail.com",
        }
    },
    hobbies: ["music", "movies"],
}
//profileCandidate.name; // test
const { name1, address } = profileCandidate;
const { street, city } = address;
console.log(name1); // test1 
console.log(street); // cau giay, ha noi 
console.log(city); // ha noi 

//profileCandidate.address.city; // ha noi

// Classes

// let testSimple = {}
// testSimple.name = "a";
// testSimple.age = 13;
// testSimple.great = () => { this.name + this.age};

class PersonInfo {
    constructor(nameParam, age){
        console.log("run");
        this.name = nameParam;
        this.age = age;
        
    }

    great(){
       return `xinchao, my name is ${this.name} and I'm ${this.age}` 
    }
}

const perI = new PersonInfo("John", 18);
const perII = new PersonInfo("Sara", 45);
perII.great();

// subclasses
class Customer extends PersonInfo {
    constructor(name, age, test){
        super(name, age, test);
        this.test = test;
    }

    info(){
        return `${this.name} + ${this.age} + ${this.test}`
    }
}

const cus1 = new Customer("John", 18, 300);
cus1.info();

// Modules