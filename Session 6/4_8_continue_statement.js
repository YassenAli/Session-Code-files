

// continue statement
// The continue statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.
// Syntax:
// continue;
// Example:
let i = 0;
while (i < 5) {
    if (i === 3) {
        i++;
        continue;
    }
    console.log(i);  // 0, 1, 2, 4
    i++;
}