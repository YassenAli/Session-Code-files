function changeValue(x) {
    console.log(x);
    x = 20;
    console.log("Inside function:", x);
}

let a = 10;
changeValue(a);
console.log("Outside function:", a);



<<<<<<< HEAD
function changeObject(obj) {
    obj.name = "Changed Name";
}

let person = { name: "Original Name" };
changeObject(person);
console.log(person.name);
=======
// function changeObject(obj) {
//     obj.name = "Changed Name";
// }

// let person = { name: "Original Name" };
// changeObject(person);
// console.log(person.name);
>>>>>>> 1da536c924f6f851f809dd215388be78fa7f3ea0


function changePrimitive(wrapper) {
    wrapper.value = 20;
}

let numberWrapper = { value: 10 };
changePrimitive(numberWrapper);
console.log(numberWrapper.value);