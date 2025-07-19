
let student={
    personalData:{
        name:'amar',
        age:24,
        city:'mumbai'
    }
}
// console.log(student?.collegeData?.city)

let other={
    // name:()=>{
    //     return "amar ram";
    // }
    friends:[{name:"amr"},{name:"ashika"}]
}

// console.log(other.name?.());

console.log(other?.friends[0]?.name);
