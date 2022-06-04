// built-in data type: number, string, boolean, void, undefined, null
// value assign kore dewai holo datatype jemon: any, number, string, boolean, void, undefined, null, enum (ei nam guloi holo datatype)
// 2 vabe value assign kora jay jemon: 
// 1. let userId:number = 101;
// 2. let userId2:number;
//         userId2 = 101;
var id;
var userId = 101;
var firstName = "shorif";
var lastName = " ahmed";
var fullName = firstName.concat(lastName);
var isActivated = true;
// // 2 bhabe concatination ba jog kora jay
// //method 1:
// let firstName:string;
// let lastName:string;
// let fullName:string;
// firstName = 'shorif';
// lastName = 'ahmed'
// fullName = firstName.concat(lastName)
// method 2:
// let firstName:string = "shorif"
// let lastName:string = " ahmed"
// let fullName:string = firstName.concat(lastName)
// console.log(userId);
// console.log(`Your id: ${userId}, username:${fullName}, account activated: ${isActivated}`);
console.log(fullName.split(' '));
console.log(fullName.split(''));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
function display() {
    console.log("Hi i am display");
}
display();
function returnDisplay() {
    return console.log("Hi i am return display");
}
returnDisplay();
