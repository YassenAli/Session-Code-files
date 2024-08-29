

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
// y=4;

try {
    const y = 5;
} catch (error) {
    console.log(error)
} finally {
    console.log('Finally block')
}