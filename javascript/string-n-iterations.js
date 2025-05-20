// We have a string s

// We have a number n

// Here is a function that takes your string, concatenates the even-indexed chars to the front, odd-indexed chars to the back.

// Examples
// s = "Wow Example!"
// result = "WwEapeo xml!"
// s = "I'm JomoPipi"
// result = "ImJm ii' ooPp"
// The Task:
// return the result of the string after applying the function to it n times.

// example where s = "qwertyuio" and n = 2:

// after 1 iteration  s = "qetuowryi"
// after 2 iterations s = "qtorieuwy"
// return "qtorieuwy"

function sortMyString(S) {
    // your code here
  
    const arr = [...S]

    let even = []

    let odd = []

    arr.forEach( (v,i) => i%2 ? odd.push(v) : even.push(v))
    
     
    return even.concat(odd).join('');
}

s="qwertyuio"
n=524

for (i=0;i<n;i++) {
    s=sortMyString(s)
}

console.log(s)


//console.log(sortMyString('Wow Example!'))