// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo0099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.


const str = 'fo99obar0099'

function incrementString (str) {
    // return incrementedString
    const match = str.match(/[0-9]+$/) //$ coincide con el final de la cadena
    return !match ? str + '1' : str.replace(/[0-9]+$/,addZeros(match[0].length,(parseInt(match[0]) + 1).toString()))
  }
  
  function addZeros (n,str){
  
      while ( n>str.length && n !== str.length){
          str = '0'+str
          
      }
      
      return str
  
  }

console.log(incrementString(str))