// 1. Object Literals: {} 

user = {
    name: 'Michael',
    age: 25,
    country: 'USA',
    Occupation: 'Engineer'
}

console.log(user.name);
console.log(user.Occupation);

// 2. Constructor function

function Car(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
}

const c1 = new Car("BMW", "520d", 10000)
const c2 = new Car("Audi", "Q7", 15000)

console.log(c1.brand + " " + c1.model + " " + c1.price);
console.log(c2.brand + " " + c2.model + " " + c2.price);


// 3. Class style

class Customer {
    constructor(name, product) {
        this.name = name;
        this.product = product;
    }

    addToCart() {
        console.log(`${this.product} added to cart`);
    }
}

const cust1 = new Customer('Naveen', 'Apple MacBook Pro')
console.log(cust1.name);
console.log(cust1.product);
cust1.addToCart()

// 4. Object.create(): with some prototype object

const employeePrototype = {
    printInfo: function() {
        console.log(`Hello, emp name is ${this.name}`);
    }
}

const e1 = Object.create(employeePrototype)
e1.name = 'Tom'
e1.printInfo()
console.log("----------------");

// 5 Using Factory Function demo on add function
function add(a, b) {
    return {
        a: a,
        b: b,
        checking: function() {
            console.log(`recieved number a is ${a} and b is ${b}`);
        }
    }
}

const find = add(3, 7)
console.log(find.a);
console.log(find.b);
find.checking()

// Using Factory Function - returns an object always
console.log('Using Factory Function - returns an object always');

function createDepartment(deptname, hod) {
    return {
        deptname: deptname,
        hod: hod,
        deptInfo: function() {
            console.log(`${this.deptname} department and HOD is ${this.hod}`);
        }
    }
}

const dept1 = createDepartment('Physics', 'H C Verma')
console.log(dept1.deptname);
console.log(dept1.hod);
dept1.deptInfo()

const dept2 = createDepartment('Maths', 'R C Sharma')
dept2.deptInfo()
