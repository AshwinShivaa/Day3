// Do the below programs in anonymous function & IIFE
// a)Print odd numbers in an array
// b)Convert all the strings to title caps in a string array
// c)Sum of all numbers in an array
// d)Return all the prime numbers in an array
// e)Return all the palindromes in an array
// f)Return median of two sorted arrays of the same size.
// g)Remove duplicates from an array
// h)Rotate an array by k times


// a)Print odd numbers in an array 

//anonymous function
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let odd = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      console.log(arr[i]);
    }
  }
}; odd(arr);

//IIFE function
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

(function() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2!== 0) {
      console.log(arr[i]);
    }
  }
})();



// b)Convert all the strings to title caps in a string array 

//anonymous function

let stringArray = ["apple", "mango", "orange", "grape"];

let convertToTitleCaps = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
  }
  console.log(arr);
};
convertToTitleCaps(stringArray);

//IIFE function 

let stringArray = ["apple", "mango", "orange", "grape"];

(function() {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
  }
  console.log(arr);
})(); 

// c)Sum of all numbers in an array

//anonymous function 

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = function(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

console.log(sum(arr));

//IIFE function

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sumResult = (function(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
})(arr);

console.log(sumResult);

// d)Return all the prime numbers in an array 

//anonymous function
let arr = [2, 3, 5, 7, 8, 11, 13, 17, 19, 23];

let findPrimes = function(arr) {
  return arr.filter(num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  });
};

console.log(findPrimes(arr)); 

//IIFE function 

let arr = [2, 3, 5, 7, 8, 11, 13, 17, 19, 23];

let primeNumbers = (function(arr) {
  return arr.filter(num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  });
})(arr);

console.log(primeNumbers); 

// e)Return all the palindromes in an array

//anonymous function 
let arr = ["level", "hello", "madam", "world", "radar"];

let findPalindromes = function(arr) {
  return arr.filter(word => {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
  });
};

console.log(findPalindromes(arr)); 

//IIFE function 
let arr = ["level", "hello", "madam", "world", "radar"];

let palindromes = (function(arr) {
  return arr.filter(word => {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
  });
})(arr);

console.log(palindromes); 

// f)Return median of two sorted arrays of the same size. 

//anonymous function 
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

let findMedian = function(arr1, arr2) {
  const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
  const length = mergedArray.length;

  if (length % 2 === 0) {
    // If the length is even, return the average of the middle elements
    const midIndex = length / 2;
    return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
  } else {
    // If the length is odd, return the middle element
    const midIndex = Math.floor(length / 2);
    return mergedArray[midIndex];
  }
};

console.log(findMedian(arr1, arr2)); 

//IIFE function 
let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

let median = (function(arr1, arr2) {
  const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
  const length = mergedArray.length;

  if (length % 2 === 0) {
    const midIndex = length / 2;
    return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
  } else {
    const midIndex = Math.floor(length / 2);
    return mergedArray[midIndex];
  }
})(arr1, arr2);

console.log(median); 

// g)Remove duplicates from an array

//anonymous function 
let arr = [1, 2, 2, 3, 4, 4, 5, 6];

let removeDuplicates = function(arr) {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
};

console.log(removeDuplicates(arr)); 

//IIFE function 
let arr = [1, 2, 2, 3, 4, 4, 5, 6];

let uniqueArray = (function(arr) {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
})(arr);

console.log(uniqueArray); 

// h)Rotate an array by k times 

//anonymous function 
let arr = [1, 2, 3, 4, 5];
let k = 2;

let rotateArray = function(arr, k) {
  const len = arr.length;
  k %= len; // Ensure k is within array length

  const rotated = [...arr.slice(len - k), ...arr.slice(0, len - k)];
  return rotated;
};

console.log(rotateArray(arr, k)); 

//IIFE function 
let arr = [1, 2, 3, 4, 5];
let k = 2;

let rotatedArray = (function(arr, k) {
  const len = arr.length;
  k %= len;

  const rotated = [...arr.slice(len - k), ...arr.slice(0, len - k)];
  return rotated;
})(arr, k);

console.log(rotatedArray); 








