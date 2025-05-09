
// const n = 0
// let fibonacci = [0,1]

// if (!n){
//     console.log(fibonacci[0])
//     return
// }

// for (i=2; i<n; i++){

//     fibonacci.push(fibonacci[i-1]+fibonacci[i-2])
// }

// console.log(fibonacci.pop())

function nthFibo(n) {
    // Return the n-th number in the Fibonacci Sequence
     let fibonacci = [0,1]
     
     return n === 1 ? fibonacci[n-1] : numFibonacci(fibonacci,n)
     
}
     
function numFibonacci(array,num) {
    for (i=2; i<num; i++){
   
       array.push(array[i-1]+array[i-2])
    }
     
    return array.pop()
}

 console.log(nthFibo(4))