function type1(){ // kh co doi so dau vao
    console.log("hihi");
}
type1();

function type2(param){ // co doi so dau vao la param
    console.log(param);
}
type2("HiHi");

function type3(){

    return 3; //gtri tra ve , gan 3 cho type3 => type3 = 3

}
let number_1 = type3();
console.log(number_1+2);

function type4(param,param2 = "Hello ES6"){
 

    return "Gtri tra ve :" + param + param2;    
}
console.log(type4("Hi ")); // co the 1 hoac 2

function type5(arr1,arr2){

    let newArray = [...arr1,...arr2]

    console.log(newArray);
}
type5([1,2],[3,4,5,6,7,8,9,10,"J","Q","K"]);

{
    let num1 = 10;
    var num2=20;
}
// console.log(num1);
console.log(num2);

function sum(num1,num2){                //ES5
    return num1 + num2;
}
console.log(sum(1,2));


var sum = (num1,num2) => num1 + num2;    //ES6 arrow function

console.log(sum(1,2));


const API_URL = "https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students/";
let callAPIGetStudent = (student_id) => {
    let student ;
    //xu ly json sever
    // fetch('https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students/33')
    fetch(API_URL + student_id)
    .then(function(response){
        response.json().then(function(data){
            student = data;
        })
    })
    .catch(function(error){
        console.log(error);
    })
    return student;
}
callAPIGetStudent(33);

let obj = (a,b) => ({name :a,age : b})
console.log(obj("ES6",20));


let myConcat = (arr1,arr2) => {
    let newArray = [...arr1,...arr2];
    console.log(newArray);
}
myConcat([1,2],[3,4,5]);