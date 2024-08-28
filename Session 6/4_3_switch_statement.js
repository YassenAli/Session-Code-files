

// switch statement
// switch statement is used to execute a block of code depending on the value of an expression.
// Syntax:
// switch (expression) {
//     case value1:
//         // code block to be executed
//         break;
//     case value2:
//         // code block to be executed
//         break;
//     default:
//         // code block to be executed
// }
const x = 5;
switch (x) {
    case 5:
        const y = 5;
        console.log(y)
        break;
    case 6:
        console.log('x is 6')
        break;
    default:
        console.log('x is not 5')
}