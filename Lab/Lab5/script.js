// class User {
//     constructor(name, email, password) {
//         this.name = name;
//         this.email = email;
//         this.password= password;
//     }
//     login(){
//         return `Dang nhap thanh cong ` + this.email;
//     }
//     getInfo(){
//         return `User Name: ` + this.name + `Email : ` + this.email + `Password : ` + this.password;
//     }
// }

// class Student extends User{
//     constructor(name, email,password,course){
//         super(name,email,password);
//         this.course = course;
//     }
//     learning() {
//         return this.getInfo() + 'Khóa : ' + this.course;
//     }
// }

// class Teacher extends User{
//     constructor(name, email,password,start_date){
//         super(name, email,password);
//         this.start_date = start_date;
//     }
//     teaching(){
//         return this.getInfo() + 'Bat dau day : ' + this.start_date;        
//     }
// }
// const newuser = new User ('khim - ','khim@gmail.com  ','pc05680 - ');
// console.log(newuser.login());

// const newstudent = new Student ('khim - ','khim@gmail.com - ','pc05680 - ' ,'k18.3 ');
// console.log(newstudent.learning());

// const newteacher = new Teacher ('Khim - ','khim@gmail.com - ','pc05680 - ' ,'2020 ');
// console.log(newteacher.teaching());



//Bai5
  import {     
    Comment
  } from './module/comments/index.js'
  
  let commentApi = new Comment('http://localhost:3000');
  commentApi.getAll().then(comments => console.log('Tất cả commnet:', comments));
  commentApi.getOne(1).then(comment => console.log('Comment với ID 1:', comment));
  
  //them
  const caretedComment = { content: 'Bình luận mới nha mấy ní' };
  commentApi.create(caretedComment).then(createdComment => console.log('Bình luận Đã tạo:', createdComment));

  //xua
  const updatedComment = { content: 'Bình luận Vừa được update' };
  commentApi.update(1, updatedComment).then(updatedComment => console.log('Bình luận Đã cập nhật:', updatedComment));

  //xoa
  commentApi.delete(2).then(deletedComment => console.log('Comment đã xóa:', deletedComment));
  


  import {
    Post
  } from './module/posts/index.js'

  let postApi = new Post('http://localhost:3000');
  postApi.getAll().then(posts => console.log('Tất cả bài viết:', posts));
  postApi.getOne(1).then(post => console.log('Bài viết với id là 1:', post));

//them
const createdPost = { titel: 'Bài viết mới nha mấy ní' };
postApi.create(createdPost).then(createdPost => console.log('Bài viết:', createdPost));

//xua
const updatedPost = { title: 'Bài viết Vừa được update' };
postApi.update(1, updatedPost).then(updatedPost => console.log('Bài viết Đã cập nhật:', updatedPost));

//xoa
postApi.delete(2).then(deletedPost => console.log('Post đã xóa:', deletedPost));

// Bài 1

// Trong JavaScript, từ khóa this đại diện cho đối tượng hiện đang gọi hàm hoặc phương thức. 
// Giá trị của this có thể thay đổi tùy thuộc vào ngữ cảnh mà hàm hoặc phương thức được gọi.

//vd
// let Dkhim = {
//     age: "20 tuổi",
//     info() {
//       console.log(`Dkhim  ${this.age}!`);
//     },
//   };
  
//   Dkhim.info();

//Bài 2

// class Shape {
//     constructor(x,y){
//         this.x= x;
//         this.y = y;
//     }
//     move(x,y){
//         self.x = x;
//         self.y = y;
//     }
// }

//Bài 3
     
//   class Clock {
//     constructor({ template }) {
//       this.template = template;
//       this.timer = null;
//     }  
//     render() {
//      let date = new Date();
  
//      let hours = date.getHours();
//      if(hours < 10) hours = '0' + hours;

//      let mins = date.getMinutes();
//      if(mins < 10) mins = '0' + mins;

//      let secs = date.getSeconds();
//      if(secs < 10) secs = '0' + secs;

  
//      let output = this.template
//      .replace('h', hours)
//      .replace('m', mins)
//      .replace('s', secs);
  
//       console.log(output);
//     }     
//     stop() {
//       clearInterval(this.timer);
//     }
//     start() {
//         this.render();
//         this.timer = setInterval(this.render.bind(this), 1000); // Bind 'this' correctly
//       }
//   }
  
//   let clock = new Clock({ template: 'h:m:s' });
//   clock.start();
  
//Bài 4
// var person = {
//     firstname: "Khim",
//     lastname: "Dinh",
//     set lname(newlastname) {
//         this.lastname = newlastname;
//     },
//     set fname(newfirstname) {
//         this.firstname = newfirstname;
//     },
//     get fullName() {
//         return this.firstname + "~" + this.lastname;
//     }
// };

// person.lname = 'Home'; 
// person.fname = 'Go'; 
// console.log(person.fullName); 
