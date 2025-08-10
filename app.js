"use strict";
// "use strict";
//! 1
// let a : number | string |(string| number | boolean) [];
// a=10
// a = "S"
// a = ["a", "b", true, 1, 2];
// console.log(a);
////obj
// const obj: {
//     name: string;
//     email: string;
//     password: string;
//     age?: number;
// } = {
//     name: "Koli",
//     email: "k@gmail.com",
//     password: "ss",
//     age: 23,
// };
// obj.age = 40;
// console.log(obj);
// let a: any = null;
// a = "ssss";
// console.log(a);
// //array
// const arr: [number, string] = [1, "4"];
// const arr2: [number, ...string[]] = [1, "4", "5", "6", 'k'];
// console.log(arr2)
// // enum
// enum Role {
//   ADMIN,
//   USER,
//   GUEST,
// }
// let userRole: Role = Role.ADMIN;
// console.log(Role);
// // function
// function abcd(run: number): string {
//   console.log("abcd");
//   return `Rabin Score ${run}`;
// }
// console.log(abcd(10));
// arraw function
// const abcd = (run: number): string => {
//   console.log("abcd");
//   return `Rabin Score ${run}`;
// };
// console.log(abcd(10));
// // Array and Tuple
// const arr: number[] = [1, 2, 3];
// const arr2: [number, string] = [1, "4"];
// console.log(arr2);
// const names: string[] = ["Supriya", "Rahul", "Ankita"];
// const shorterName = names.filter((name: string) => name.length > 6);
// console.log(shorterName);
// // enum // it is read only, can not assign AND EDIT
// enum Radhanagar {
//   name = "Rupak",
//   age = 23,
// }
// console.log(Radhanagar.age);
// // Interface
// interface f {
//   name: string;
//   email: string;
//   password: string;
//   age?: number;
// }
// const user: f = {
//   name: "Koli",
//   email: "k@gmail.com",
//   password: "ss",
// //   age: 23,
// };
// console.log(user);
//// type
// type Anup = number | string;
// let userId = 10 ;
// console.log(userId)
// Introduction to Interface and Type Aliases (59.00)
// interface user {
//   name: string;
//   email: string;
//   password: string;
//   age?: number;
// }
// function abcd (obj : user){
//     // obj.
//     console.log(obj)
// }
// abcd({name: "Koli", email: "k@gmail.com", password: "ss", age: 23})
// //Extending Interfaces
// interface User {
//   name: string;
//   email: string;
//   password: string;
//   age?: number;
// }
// interface Admin extends User {
//   // it means user ar kache ja ja ache , seta admin ar kache o ache
//   admin: boolean;
// }
// function abcd(obj: Admin) {
//   console.log("Su->", obj);
// }
// abcd({ name: "Koli", email: "k@gmail.com", password: "ss", admin: true });
// // Same Interface marge, 2 to interface same name banale, seta mearge hoye jabe
// interface abcd {
//   name: string;
// }
// interface abcd {
//   email: string;
// }
// function t(obj: abcd) {
//   // obj.  hare avalaible name and email, it is marged
// }
// // Fundamentals of Type Aliases
// type value = string | null | number;
// let a : value;
// function abcd(obj: value){
//     console.log(obj)
// }
// abcd("ss")
// // Intersection Type
// this is called intersection (  &  )
// this is called union ( | )
// type User = {
//   name: string;
//   email: string;
//   password: string;
//   age?: number;
// };
// type Admin = User & {
//   getDetails(user: string): void; // dose not return anything
// };
// function abcd(a: Admin) {
//   console.log("Messi", a);
//   a.getDetails("Koli");
// }
// abcd({
//   name: "Koli",
//   email: "k@gmail.com",
//   password: "ss",
//   getDetails: (user: string) => {
//     console.log("Details of user:", user);
//   },
// });
//// Class and Constructor and Object
// class NewBornBaby {
//   name: string;
//   age: number = 0;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// const solaj = new NewBornBaby("Solaj");
// const partha = new NewBornBaby("Partha");
// const roni = new NewBornBaby("roni");
// const ruk = new NewBornBaby("ruk");
// console.log(partha, roni, ruk);
// class Student {
//   //  Constructor ar modhe diclare and initialized hoye geche, best features of typeScript
//   constructor(
//     public name: string,
//     public email: string,
//     public password: string,
//     public age?: number
//   ) {}
// }
// const user = new Student("Koli", "k@gmail.com", "Anushka", 23);
// console.log(user);
// function
// function abcd(name: string, email: string, CB: (value: string) => number) {
//   console.log(name, email);
//   CB("10")
// }
// abcd("supriya", "supriya@gmail", (dog) => {
//     console.log(dog)
//     return 10;
// });
// example 2
// function SumOfMarks(a: number,b: number): number{
//     return a + b;
// }
// function StdDetails(name: string, roll:number, SumOfMarks: number) {
//     console.log(name, roll, SumOfMarks);
// }
// StdDetails("Koli", 10, SumOfMarks(10, 20));
// example 3
function processData(data, callback) {
    const result = data * 2;
    callback(result);
}
processData(5, (output) => {
    console.log("Processed output:", output);
});
