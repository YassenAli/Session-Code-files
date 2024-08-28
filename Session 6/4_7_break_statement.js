

// break statement
// The break statement is used to terminate the loop or switch statement and transfer the control to the code that follows the loop or switch statement.
// Syntax:
// break;
// Example:
let i = 0;
while (i < 5) {
    if (i === 3) {
        break;
    }
    console.log(i);  // 0, 1, 2
    i++;
}