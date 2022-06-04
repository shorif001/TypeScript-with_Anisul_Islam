// 2 vabe Array declar kora jay jemon:
// // method 1:
// let userNames:string[];
// // method 2:
// let userNames:Array<string>[];



let userNames:string[] = ["Ajiron", "Somiron", "Buchi", "Choitali", "Nosimon"];
let userIdss:number[] = [10, 20, 30, 40];

console.log(userNames); 
console.log(userIdss); 

let multipleTypesArray: (string | number)[];

multipleTypesArray = [1, 2, 3, 'jorina', 'sokhina', 'morjina', 'rujina'];
console.log(multipleTypesArray);


userNames.sort();// sort korar kaj hosse. shajano jemon: A, B, C, D prothom okkhor ta niye shajabe.
console.log(userNames);