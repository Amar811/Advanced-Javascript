
Object.prototype.myAppData="this is our prototype"
Object.prototype.myData=function(){
    return "custom function"
}

String.prototype="this is a prototype of string"

let users={
getFullName:function(){
        return this.name+" "+this.last
    },
    getAge:function(){
     let age=new Date().getFullYear()-this.birth;
     return age;
    }
}




let student={
    name:'amar',
    last:'ram',
    birth:2000,
    // getAge:users.getAge,
}

let teacher={
    name:'rajesh',
    last:'yadav',
    birth:1988,
    //  getAge:users.getAge,

}

teacher.__proto__=users;
student.__proto__=users

// console.warn(student.getAge())
// console.warn(teacher.getAge())