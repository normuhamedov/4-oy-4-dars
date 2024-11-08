// // Vazifa 1

// // 1-masala

// 1-usullll
// function reverse(num) {
//     let str = num.toString();
//     return str.split('').reverse().join('');
// }
// console.log(reverse(891));

// 2-usul for 
// function reverse(num) {
//     let reversed = 0;
//     for (let i = num; i > 0; i = Math.floor(i / 10)) {
//         let last = i % 10;
//         reversed = reversed * 10 + last;
//     }
//     return reversed;
// }
// console.log(reverse(418));

// // 2-masala 
// 1-usul
// function factorial(n) {
//     if (n === 0 || n === 1){
//         return 1;
//     } 
//     return n * factorial(n - 1);
// }
// console.log(factorial(4));

// 2-usul
// function factorial(n) {
//     let result = 1;
//     for (let i = 1; i <= n; i++) {
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(3));

// // 3-masala
// 1-usul faqat function
// let list1 = { 
//     name: "Ismoil", 
//     age: 15
// }
// let list2 = { 
//     name: "Ibrohim", 
//     age: 17
// }
// function objAge(obj1, obj2) {
//     if (obj1.age > obj2.age) {
//         console.log(obj1.name);
//     } else if (obj2.age > obj1.age) {
//         console.log(obj2.name);
//     } else {
//         console.log("Bularni yoshi teng");
//     }
// }
// objAge(list1, list2);

// 2-usul for va function
// let list1 = { 
//     name: "Ismoil", 
//     age: 15
// }
// let list2 = { 
//     name: "Ibrohim", 
//     age: 10
// }
// function objAge(obj1, obj2) {
//     let old = obj1;
//     for (let i = 0; i < 1; i++) {
//         if (obj2.age > obj1.age) {
//             old = obj2;
//         }
//     }
//     console.log(old.name);
// }
// objAge(list1, list2)

//  // 4-masala
// 1-usul faqat function
// function num(n) {
//     if (n > 0) {
//         num(n - 1);
//     }
//     console.log(n);
// }
// num(5);

// 2-usul for va function
// function num(n) {
//     for (let i = 0; i <= n; i++) {
//         console.log(i);
//     }
// }
// num(5);

//  // 5-masala
// let user = { name: "Shaxzod" };
// let age = { age: 25 };
// let userJob = { job: "Developer" };
// let add = { ...user, ...age, ...userJob };
// console.log(add);

// // 6-masala
// 1-usul
// let salaries = {aXodim: 150, bXodim: 180, cXodim: 210}
// function obj(list) {
//     let total = 0 
//     for (let item in list ){
//         total += list[item] 
//     }
//     console.log(total);
// }
// obj(salaries);

//------- 2-usul
// let salaries = { aXodim: 150, bXodim: 180, cXodim: 210 };
// let totalSalary = salaries.aXodim + salaries.bXodim + salaries.cXodim;
// console.log(totalSalary);

// 7-masala
// let num = [2, 4, 6, 7];
// function findMax(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     console.log(max);
// }
// findMax(num);

// //8-masala
// let num = [2, 4, 6, 7, true, false, null, undefined]
// function calc(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             sum += arr[i];
//         } else {
//             sum += 0;
//         }
//     }
//     console.log(sum);
    
// }
// calc(num)


// // // // 2-vazifa
// 1-masala

// const arr = [
//     { id: 1, name: "Botir", age: 20, hobby: "Football" },
//     { id: 2, name: "Anvar", age: 20, hobby: "Basketball" },
//     { id: 3, name: "Shohrux", age: 20, hobby: "Basketball" },
//     { id: 4, name: "Akram", age: 22, hobby: "Football" }
// ];
// function obj(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i].age === arr[j].age && arr[i].hobby === arr[j].hobby) {
//                 result.push(arr[i], arr[j]);
//             }
//         }
//     }
//     console.log(result);
// }
// obj(arr);

// 2-masala
// const arr2 = [3, 4, 3, 2, 3, 4, 5, 6, 3, 5, 6, 7, 8, 9, 5, 4, 3];

// function find(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         let bor = true;
//         for (let j = 0; j < arr.length; j++) {
//             if (i !== j && arr[i] === arr[j]) {
//                 bor = false;
//             }
//         }
//         if (bor) {
//             result.push(arr[i]);
//         }
//     }
//     console.log(result);
// }
// find(arr2)

// 3-masala
// const list = [22, 112, 3, 4, 222, 123, 43];
// function addMax(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     arr.unshift(max);   
//     return arr;
// }
// console.log(addMax(list));

// // 4-masala
// const size = parseInt(prompt("Ismlar sonini kiriting: "));
// function collectNames(size) {
//     const names = [];
//     for (let i = 0; i < size; i++) {
//         const name = prompt("Ism kiriting:");
//         names.push(name);
//     }
//     const lastName = prompt("Yana bir ism kiriting:");
//     if (names.includes(lastName)) {
//         console.log("bor");
//     } else {
//         names.push(lastName);
//         console.log(names);
//     }
// }
// collectNames(size);


// 5-masala
// let promptNum = prompt("Son kiriting : ") -0; // Promptdan kelgan son
// function collectAndReverse(num) {
//     const result = [];
//     for (let i = 0; i <= num; i++) {
//         result.push(i);
//     }
//     return result.reverse(); 
// }
// console.log(collectAndReverse(promptNum));




