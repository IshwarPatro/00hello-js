// Javascripts objects are always in key value pair 

let obj = {};  //empty object
console.log(obj);

let person = {
    //key : value 
    name: "Abhishek",
    age: 28,
    phone: 9999999999,
    gender: "Male",
    height: "170cm"
};

console.log(`Hey ${person.name}, thank you for signing up !`);
console.log(person.gender);
console.log(person["gender"]);

let str = "Hello";
console.log(str.length); //dot notation
console.log(str["length"]); //square bracket notation

//nesting of objects
let captainAmerica = {
    firstName: "Steve",
    lastName: "Rogers",
    friends: ["Bucky", "Tony Stark", "Brue Banner"],
    age: 102,
    isAvenger: true,
    address: {
        state: "Manhattan",
        city: "New York",
        country: "USA",
        phone: 67676,
        phonenumber: function (a,b){
            console.log(`${captainAmerica.firstName+" "+captainAmerica.lastName} phone number is ${this.phone}`+a+b);
            console.log(`${captainAmerica.firstName+" "+captainAmerica.lastName} phone number is ${this.phone}  `+(`${this.phone}`*a*b));
        }
    },
    sayHi: function () {
        console.log(`Hello my name is ${this.firstName}`);
    }
};

console.log(captainAmerica);
console.log(captainAmerica.friends);
console.log(captainAmerica.friends[0]);
console.log(captainAmerica.sayHi()); //method accessing 
console.log(captainAmerica.address.phonenumber(7,9));
console.table(captainAmerica);


// how to access key and it values inside a javascript OBJECT
console.log("keys and values:-")

for (let a in captainAmerica){
    console.log(a +"  "+ captainAmerica[a]); 
    console.log();
}

let Black_Widow = {
    firstName:"Natasha",
    middlename:"Alianovna",
    lastName:"Romanova",
    russian_name:"Наталья Алиановна Романов",
    Age:33,
    Birthday:"December 3,1984",
    Sex:"Female",
    Species:"Unknown",
    Height:"5'7",
    Weight:"125lbs",
    Alignment:"Neutral Good",
    Citizenship:["Soviet (formerly)","Russian (formerly)","American"],
    address:{
        country:"Norway", 
        city1:"Budapest",
        city2:"Morocco"
    }
}

console.log(Black_Widow.address.city1)
console.log((Black_Widow.russian_name).toUpperCase())
// methods-> objects ke andar function
// console.log(str.toUpperCase());