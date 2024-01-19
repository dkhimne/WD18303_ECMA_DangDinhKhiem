// function User(name,email){
//     this.name = name ;
//     this.email = email;

// }
// let arr = [
//     {
//         name : "Khim",
//         email : "khim@gmail.com"
//     },
//     {
//         name : "Khiem",
//         email : "khiem@gmail.com"
//     }
// ]
// arr.forEach(item => {
//     let user = new User ( item.name ,  item.email)
// })

// class UserInfo{
//     constructor(name,email){
//         this.name = name ;
//         this.email = email;
//     }
//     login(){
//         console.log(`${this.email} login success!`);
//     }
// }
// student = new UserInfo("teo","teo@gmail.com");
// teacher = new UserInfo("ti","ti@gmail.com");

// student.learning = function(){
//     console.log(`${this.name} is learning`);
// }

// teacher.learning = function(){
//     console.log(`${this.name} is learning`);
// }
// console.log(student);
// console.log(teacher);

// student.login();
// student.learning();

// teacher.login();
// teacher.learning();

// setTimeout(function(){
//     console.log("cho tui lay vo , tui log ra cho coi");
// },2000)


// const demoPromises = () => {
//     return new Promise((resolve, reject) =>{
//         // setTimeout(()=>{
//         //     resolve("Hi");
//         // },2000)
//         fetch('http://localhost:3000/posts')
//         .then((response)=>{
//             response.json()
//             .then((data)=>{
//                 resolve(data)
//             })
//         })
//     })
// }
// demoPromises().then((data)=>{
//     console.log(data);
// })

// setTimeout(()=>{
//     console.log("2s");
// },2000)
// setTimeout(()=>{
//     console.log("5s");
// },5000)
// setTimeout(()=>{
//     console.log("10s");
// },10000)

const axios = require('axios').default;

const API_URL = "http://localhost:3000/";

// lay danh sach 
axios.get(API_URL+ 'comments').then(({data})=>console.log(data))

//lay1 phan tu
axios.get(API_URL+ 'comments/'+1).then(({data})=>console.log(data))
let comment = {
    "body":"Bai viet qa hay",
    "postId":1    
}
//them moi
axios.post(API_URL+ 'comments',comment).then(({data})=>console.log(data))

axios.get(API_URL+ 'comments').then(({data})=>console.log(data))

// sua 
axios.put(API_URL+ 'comments/'+2,comment).then(({data})=>console.log(data))

//xoa 
axios.delete(API_URL+ 'comments/'+2).then(({data})=>console.log(data))
