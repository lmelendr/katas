// Note: This kata is a translation of this (Java) one: http://www.codewars.com/kata/rotate-array. I have not translated this first one as usual because I did not solved it, and I fear not being able to solve it (Java is not my cup of... tea). @cjmcgraw, if you want to use my translation on your kata feel free to use it.

// Create a function named "rotate" that takes an array and returns a new one with the elements inside rotated n spaces.

// If n is greater than 0 it should rotate the array to the right. If n is less than 0 it should rotate the array to the left. If n is 0, then it should return the array unchanged.

// Example:

// var data = [1, 2, 3, 4, 5];

// rotate(data, 1) // => [5, 1, 2, 3, 4]
// rotate(data, 2) // => [4, 5, 1, 2, 3]
// rotate(data, 3) // => [3, 4, 5, 1, 2]
// rotate(data, 4) // => [2, 3, 4, 5, 1]
// rotate(data, 5) // => [1, 2, 3, 4, 5]

// rotate(data, 0) // => [1, 2, 3, 4, 5]

// rotate(data, -1) // => [2, 3, 4, 5, 1]
// rotate(data, -2) // => [3, 4, 5, 1, 2]
// rotate(data, -3) // => [4, 5, 1, 2, 3]
// rotate(data, -4) // => [5, 1, 2, 3, 4]
// rotate(data, -5) // => [1, 2, 3, 4, 5]

const data = [1, 2, 3, 4, 5]

// function rotate(data,n){

//     if(n===0) return data

//     return n > 0 ? rotate([data[data.length - 1],...data.slice(0,-1)],n-1) : rotate([...data.slice(1),data[0]],n+1)
    
// }

function rotate(data, n) {
    if (n === 0) return data;
    const len = data.length;
    const rotations = n % len; // Maneja casos donde |n| > len
    if (rotations > 0) {
        return [...data.slice(-rotations), ...data.slice(0, -rotations)];
    } else {
        return [...data.slice(-rotations), ...data.slice(0, -rotations)];
    }
}

console.log(rotate(data,2),2%data.length )