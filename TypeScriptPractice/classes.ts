import { User, Login } from "./interfaces";

interface Address {
    street: string;
    landmark: string;
    city: string;
    pincode: number;
}

class Employee implements Login {
    #id: number;
    protected name: string;
    protected address: Address;

    constructor(id: number, name: string, address: Address) {
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    login(): User {
        return {
            id: 102,
            name: "Shyam Sharma",
            email: "shyam@sharma.com",
        };
    }

    get empName(): string {
        return this.name;
    }

    set empName(name: string) {
        this.name = name;
    }
}

class Manager extends Employee {
    constructor(id: number, name: string, address: Address) {
        super(id, name, address);
    }

    displayManagerNameWithAddress() {
        let str1: string = `${this.name} ${this.address}`;
        console.log(str1);
    }
}

const deep = new Employee(101, "Deep", {
    street: "ABC",
    landmark: "plot number 123, Room No 234",
    city: "Mumbai",
    pincode: 10324,
});

console.log(deep);
console.log(deep.login());
