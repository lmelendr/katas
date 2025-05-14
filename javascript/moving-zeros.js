
const arr = [false,1,0,1,2,0,1,3,"a"]

function moveZeros(arr) {
  
    let result = arr.filter(x => x!==0)
    
    const n = arr.length - result.length
    
    for (let i = 0 ; i<n ; i++){
      
      result.push(0)
    }
    
    return result
 }

 console.log(moveZeros(arr))