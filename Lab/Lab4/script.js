function User(name,email){
    this.name = name ;
    this.email = email;

}
let arr = [
    {
        name : "Khim",
        email : "khim@gmail.com"
    },
    {
        name : "Khiem",
        email : "khiem@gmail.com"
    }
]
arr.forEach(item => {
    let user = new User ( item.name ,  item.email)
})

class UserInfo{
    constructor(name,email){
        this.name = name ;
        this.email = email;
    }
    login(){
        console.log(`${this.email} login success!`);
    }
}
student = new UserInfo("teo","teo@gmail.com");
teacher = new UserInfo("ti","ti@gmail.com");

student.learning = function(){
    console.log(`${this.name} is learning`);
}

teacher.learning = function(){
    console.log(`${this.name} is learning`);
}
console.log(student);
console.log(teacher);

student.login();
student.learning();

teacher.login();
teacher.learning();

setTimeout(function(){
    console.log("cho tui lay vo , tui log ra cho coi");
},2000)