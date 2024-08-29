// Date: 2021/09/02

// array
// array is a collection of elements that can be of different types

// array declaration
// var array_name = [element1, element2, element3, ...];
// var array_name = new Array(element1, element2, element3, ...);
// var array_name = new Array(size);
// var array_name = new Array();
// var array_name = [];
// Example
let fruits = ['Apple', 'Banana', 'Mango'];
console.log(fruits); // ['Apple', 'Banana', 'Mango']
let numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); // [1, 2, 3, 4, 5]
let colors = new Array(3);
console.log(colors); // [undefined, undefined, undefined]
let names = new Array();
console.log(names); // []
let animals = [];
console.log(animals); // []

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// accessing array elements
// array elements are accessed using their index
// array_name[index]
// Example
let fruits1 = ['Apple', 'Banana', 'Mango'];
console.log(fruits1[0]); // Apple
console.log(fruits1[1]); // Banana
console.log(fruits1[2]); // Mango


// changing array elements
// array elements can be changed using their index
// array_name[index] = new_value;
// Example
let fruits2 = ['Apple', 'Banana', 'Mango'];
fruits2[1] = 'Orange';
console.log(fruits2); // ['Apple', 'Orange', 'Mango']


// array length
// array length is the number of elements in an array
// array_name.length
// Example
let fruits3 = ['Apple', 'Banana', 'Mango'];
console.log(fruits3.length); // 3

// array methods

// push() method => adds one or more elements to the end of an array and returns the new length of the array
// Syntax: array_name.push(element1, element2, ...);

// pop() method => removes the last element from an array and returns that element
// Syntax: array_name.pop();

// shift() method => removes the first element from an array and returns that element
// Syntax: array_name.shift();

// unshift() method => adds one or more elements to the beginning of an array and returns the new length of the array
// Syntax: array_name.unshift(element1, element2, ...);

// splice() method => adds or removes elements from an array
// Syntax: array_name.splice(index, howmany, element1, element2, ...);

// slice() method => returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array
// Syntax: array_name.slice(begin, end);

// concat() method => merges two or more arrays and returns a new array
// Syntax: array_name.concat(array1, array2, ...);

// indexOf() method => returns the first index at which a given element can be found in the array, or -1 if it is not present
// Syntax: array_name.indexOf(element);

// lastIndexOf() method => returns the last index at which a given element can be found in the array, or -1 if it is not present
// Syntax: array_name.lastIndexOf(element);

// includes() method => determines whether an array includes a certain element, returning true or false as appropriate
// Syntax: array_name.includes(element);

// join() method => joins all elements of an array into a string
// Syntax: array_name.join(separator);

// toString() method => returns a string representing the specified array and its elements
// Syntax: array_name.toString();

// reverse() method => reverses the elements in an array
// Syntax: array_name.reverse();

// sort() method => sorts the elements of an array
// Syntax: array_name.sort();

// filter() method => creates a new array with all elements that pass the test implemented by the provided function
// Syntax: array_name.filter(function(currentValue, index, arr), thisValue);

// map() method => creates a new array with the results of calling a provided function on every element in the array
// Syntax: array_name.map(function(currentValue, index, arr), thisValue);

// reduce() method => executes a provided function for each value of the array (from left-to-right) and returns a single value
// Syntax: array_name.reduce(function(total, currentValue, currentIndex, arr), initialValue);

// forEach() method => calls a function for each element in the array
// Syntax: array_name.forEach(function(currentValue, index, arr), thisValue);

// find() method => returns the value of the first element in the array that satisfies the provided testing function
// Syntax: array_name.find(function(currentValue, index, arr), thisValue);

// findIndex() method => returns the index of the first element in the array that satisfies the provided testing function
// Syntax: array_name.findIndex(function(currentValue, index, arr), thisValue);

// some() method => checks if any of the elements in an array pass a test (provided as a function)
// Syntax: array_name.some(function(currentValue, index, arr), thisValue);

// every() method => checks if all elements in an array pass a test (provided as a function)
// Syntax: array_name.every(function(currentValue, index, arr), thisValue);

// fill() method => fills all the elements of an array from a start index to an end index with a static value
// Syntax: array_name.fill(value, start, end);

// copyWithin() method => copies array elements within the array, to and from specified positions
// Syntax: array_name.copyWithin(target, start, end);

// isArray() method => determines whether the passed value is an Array
// Syntax: Array.isArray(value);

