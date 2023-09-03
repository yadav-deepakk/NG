"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, address) {
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    login() {
        return {
            id: 102,
            name: "Shyam Sharma",
            email: "shyam@sharma.com",
        };
    }
    get empName() {
        return this.name;
    }
    set empName(name) {
        this.name = name;
    }
}
_Employee_id = new WeakMap();
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    displayManagerNameWithAddress() {
        let str1 = `${this.name} ${this.address}`;
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
