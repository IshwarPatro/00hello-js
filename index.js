var a;

a=10;
console.log(typeof a);
console.log(a);

a="hello world";
console.log(typeof a);
console.log(a);

a=true;
console.log(typeof a);
console.log(a);

a=null
console.log(typeof a);
console.log(a);

// String
// ".",'.',`.`

var str="how are you doing?\nI am fine.\nHow about you."
console.log(str)


// Input variable in output

var num=200.8
console.log(`half of ${num} is ${num/2}`)

// var vs let

let c=100
console.log(c)

// let a="123"
// console.log(a)
// let a=100
//     ^

// SyntaxError: Identifier 'a' has already been declared

// For loop in Js

var num=10;
var i;
console.log("Print even number 0-10:-")
for(i=0;i<=num;i++){
    if(i%2==0){
        console.log(i);
        let j=1000;
    }
}
console.log("the value of i="+i);

// console.log("the value of i="+j); (j is defined inside the loop thats why we cannot  access the variable j)

// Const

const b=90;
console.log(b)

