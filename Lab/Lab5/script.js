class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password= password;
    }
    login(){
        return `Dang nhap thanh cong ` + this.email;
    }
    getInfo(){
        return `User Name: ` + this.name + `Email : ` + this.email + `Password : ` + this.password;
    }
}

class Student extends User{
    constructor(name, email,password,course){
        super(name,email,password);
        this.course = course;
    }
    learning() {
        return this.getInfo() + 'Khóa : ' + this.course;
    }
}

class Teacher extends User{
    constructor(name, email,password,start_date){
        super(name, email,password);
        this.start_date = start_date;
    }
    teaching(){
        return this.getInfo() + 'Bat dau day : ' + this.start_date;        
    }
}
const newuser = new User ('khim - ','khim@gmail.com  ','pc05680 - ');
console.log(newuser.login());

const newstudent = new Student ('khim - ','khim@gmail.com - ','pc05680 - ' ,'k18.3 ');
console.log(newstudent.learning());

const newteacher = new Teacher ('Khim - ','khim@gmail.com - ','pc05680 - ' ,'2020 ');
console.log(newteacher.teaching());
