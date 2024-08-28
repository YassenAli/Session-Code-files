

// try catch statement
// try catch statement is used to handle errors in JavaScript.
// Syntax:
// try {
//     // code block to be executed
// } catch (error) {
//     // code block to be executed if an error occurs
// } finally {
//     // code block to be executed after try and catch blocks
// }
// Example:
const y = 5;
// y=4;

try {
    const x = 5;
    if (x === 5) {
        const y = 5;
        console.log(y)
    }
} catch (error) {
    console.log('An error occurred')
} finally {
    console.log('Finally block')
}