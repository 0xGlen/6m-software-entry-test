/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap(x, y){
    // Task 1: Add code here
    if (typeof x !== 'number' || typeof y !== 'number' || isNaN(x) || isNaN(y)) {
        return -1
    }

    const temp = x 
    x = y
    y = temp

    console.log ("x = ", x, "y =", y )
    
}

// Task 2: Add code here
const a = 1
const b = 2

swap(a, b)


module.exports = swap;
