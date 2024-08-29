//         1- Declaring a JavaScript Variable without initialization

// var , let (yes)
// const (error)

var carName;

// console.log(carName);

let Name;

// console.log(Name);


//         2- ReDeclaring variables
var x = 5;
var x = 6;

// console.log(x);


let y = 7 ;
// let y = 8 ;


const z = 9;
// const z = 10 ;



//         3- Reassigning variables

var user = "name" ;
user ="namee";
// console.log(user);


let password = "n123";
password = "n1234";
// console.log(password);


const id = 122003;
// id = 122004;
// console.log(id);




//         4- scope variables

{
var a = 12 ;
// console.log(a);
}

// console.log(a);

{
let b = 14 ;
//   console.log(b);
}
    
    // console.log(b);

{
const c = 16 ;
//   console.log(c);
}
//  console.log(c);



//         5- hoisting variables

// Variables defined with var are hoisted to the top and can be initialized at any time.
// Meaning: You can use the variable before it is declared:


color = "blue";
var color;





//       6- One Statement, Many Variables

let person = "John Doe", carname = "Volvo", price = 200;

// console.log(person ,carname ,price )





