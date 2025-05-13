
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