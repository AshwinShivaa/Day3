// Do the below programs in arrow functions.

// a.Print odd numbers in an array 
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let printOddNumbers = (arr) => {
  arr.forEach(num => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

printOddNumbers(numbers);

// b.Convert all the strings to title caps in a string array 
let stringArray = ["apple", "banana", "orange", "grape"];

let convertToTitleCaps = (arr) => {
  return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
};

console.log(convertToTitleCaps(stringArray)); 

// c.Sum of all numbers in an array 

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = arr => arr.reduce((total, num) => total + num, 0);

console.log(sum(arr));

// d.Return all the prime numbers in an array  
let arr = [2, 3, 5, 7, 8, 11, 13, 17, 19, 23];

let findPrimes = arr => arr.filter(num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
});

console.log(findPrimes(arr)); 

// e.Return all the palindromes in an array 
let arr = ["level", "hello", "madam", "world", "radar"];

let findPalindromes = arr => arr.filter(word => {
  const reversed = word.split('').reverse().join('');
  return word === reversed;
});

console.log(findPalindromes(arr));

