"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let john = { id: 101, name: "John", email: "john@smith.com" };
let employee1 = {
    id: 101,
    name: "EmployeeName1",
    salary: 15000,
    email: "employee1@gmail.com",
};
let userList = [
    { id: 111, name: "mike", email: "mike@jake.com" },
    { id: 112, name: "jade", email: "jade@jake.com" },
    { id: 113, name: "miller", email: "miller@jake.com" },
    { id: 114, name: "jake", email: "jake@jake.com" },
    { id: 115, name: "jaden", email: "jaden@jake.com" },
    { id: 116, name: "john", email: "john@jake.com" },
];
let [user1, user2, user3, ...remainingUsers] = userList;
console.log(user1);
console.log(user2);
console.log(user3);
console.log(remainingUsers);
