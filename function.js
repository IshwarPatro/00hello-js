// function calculator

// There are three types of function

//1. Function Declaration

function calculator(str,a,b){
    if (str == "add"){
        return a+b;
    }
    else if(str == "sub"){
        if(a>b){
            return a-b;
        }
        else{
            return b-a;
        }
    }
}

var a=calculator("add",3,4);

console.log("The answer="+a);


// 2. Function Expression

// let variable_name = function () {
//     // do something
// }
// name of variable is ised to invoke the funciton
// variable_name();

let sayHi=function () {
    console.log("hello guys is am function expression");
}

console.log("line 54\n" + sayHi);
sayHi();
//abcd(); // error abcd is not defined


// 3) IIFE-> Imediately invoke function expression

function add(a, b) {
    return a + b
}
add(2, 3);

let additionIIFE = (function (a, b) {
  console.log(a + b);
})(20, 30);

// console.log(additionIIFE);
// console.log(additionIIFE(20, 30));