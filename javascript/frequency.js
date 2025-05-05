
// Given an input array (arr) of positive integers, the objective is to return an output array where each index represents the amount of times an element appeared (frequency) in the input array.
// More specifically, the element at each index of the output array will be an array (bucket) containing integers that appeared index-amount-of-times.
// Otherwise, slot nulls (JavaScript, Java), None's (Python) nils (Ruby), or NULL's (C/C++) where appropriate. A valid array will always be provided.
// If an array of [1,2,3,4,4,5,5,5] is passed in, the expected output should be: [null, [1,2,3], [4], [5], null, null, null, null, null].

// bucketize(arr) ======> outputArray
// bucketize([1,2,3,4,4,5,5,5]) ======> [null, [1,2,3], [4], [5], null, null, null, null, null]

const arr = [1,2,3,4,4,5,5,5]

function bucketize(arr) {
    // Input your solution here!
    
    let obj = new Object() //{value, repeat-number}
  
    let output = []
  
    for (let i = 0; i <= arr.length; i++){
        output.push(null)
    }
  
    for (let i = 0; i < arr.length; i++){
  
        Object.keys(obj).includes(arr[i].toString()) ? obj[arr[i]] = obj[arr[i]] + 1 : obj[arr[i]] = 1
  
    }
  
    let entries = Object.entries(obj)
  
    for (let i = 0; i < entries.length; i++){
  
        !output[entries[i][1]] ? output[entries[i][1]] = Array.of(Number(entries[i][0])) : output[entries[i][1]].push(Number(entries[i][0]))
    }
    
    return output
    
  }

  console.log(bucketize(arr))