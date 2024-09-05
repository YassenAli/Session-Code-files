function changeValue(x) {
    x = 20;
    console.log("Inside function:", x);
}

let a = 10;
changeValue(a);
console.log("Outside function:", a);



function changeObject(obj) {
    obj.name = "Changed Name";
}

let person = { name: "Original Name" };
changeObject(person);
console.log(person.name);


// function changePrimitive(wrapper) {
//     wrapper.value = 20;
// }
//
// let numberWrapper = { value: 10 };
// changePrimitive(numberWrapper);
// console.log(numberWrapper.value);