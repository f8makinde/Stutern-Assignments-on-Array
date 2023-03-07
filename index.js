// Answer 1
// In JavaScript, arrays are mutable, which means that their values can be changed during runtime. There are array methods that mutate the original array and array methods that do not mutate the original array. The main differences between mutating and non-mutating array methods are as follows:

// Mutating array methods modify the original array in-place, whereas non-mutating array methods return a new array or a new value without modifying the original array.
// Mutating array methods have the potential to cause side effects and can make code harder to reason about, whereas non-mutating array methods tend to be more predictable and easier to reason about.
// Here are five examples of mutating array methods:

// push(): Adds one or more elements to the end of an array and returns the new length of the array.
// pop(): Removes the last element from an array and returns that element.
// splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// sort(): Sorts the elements of an array in place and returns the sorted array.
// reverse(): Reverses the order of the elements in an array in place and returns the reversed array.
// Here are five examples of non-mutating array methods:

// concat(): Joins two or more arrays and returns a new array that contains all the elements of the original arrays.
// slice(): Returns a shallow copy of a portion of an array into a new array selected from start to end (end not included) where start and end represent the index of items in that array.
// join(): Joins all elements of an array into a string and returns the string.
// map(): Creates a new array with the results of calling a provided function on every element in the calling array.
// filter(): Creates a new array with all elements that pass the test implemented by the provided function. 1

//Answer 2
// Define the original array
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// Add 'Kotlin' to the end of the array
languages.push('Kotlin');

// Add 'Java' after 'Ruby'
let indexOfRuby = languages.indexOf('Ruby');
languages.splice(indexOfRuby+1, 0, 'Java');

// Remove the first item in the array
languages.shift();

// Add 'Scala' and 'Swift' to the beginning of the array
languages.unshift('Scala', 'Swift');

// Replace 'PHP' with 'Go' and 'Rust'
let indexOfPHP = languages.indexOf('PHP');
languages.splice(indexOfPHP, 1, 'Go', 'Rust');

// answer= ['Scala', 'Swift', 'JavaScript', 'Ruby', 'Java', 'PHP', 'Python', 'Kotlin']

// Answer
// After calling the changeFruit function with the fruit array as an argument, the value of fruit will be ['apple', 'mango', 'orange']. This is because the function modifies the third element of the fruit array, which is 'banana', and replaces it with 'orange'. Since arrays are passed by reference in JavaScript, the changes made to the fruit array inside the function are reflected in the original fruit array outside the function.

//Answer 4
function max(arr) {
    let maxVal = arr[0]; // initialize maxVal to the first element of the array
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxVal) {
        maxVal = arr[i]; // update maxVal if the current element is greater
      }
    }
    return maxVal;
  }
  let arr = [4, 5, 10, -2];
let maxValue = max(arr);
console.log(maxValue);
// answer= 10

// Answer 5
function valTimesIndex(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] * i);
    }
    return result;
  }
  
  let arr1 = [1, 2, 3];
  let result = valTimesIndex(arr);
  console.log(result); // prints [0, 2, 6]
  
  arr1 = [5, 10, 15];
  result = valTimesIndex(arr);
  console.log(result); // prints [0, 10, 30]
  