// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

//     arr = [[1,2,3],
//           [8,9,4],
//           [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

 const arr = [[1,2,3,6,7],
              [8,9,4,1,2],
              [0,3,8,6,4],
              [7,5,4,2,1],
              [9,6,5,8,3]]

// const arr = [[1, 2, 3, 4, 5, 6],
//              [20, 21, 22, 23, 24, 7], 
//              [19, 32, 33, 34, 25, 8], 
//              [18, 31, 36, 35, 26, 9],
//              [17, 30, 29, 28, 27, 10], 
//              [16, 15, 14, 13, 12, 11]]

snail = function(arr) {
    // enjoy
    let t = []
    let r = []
    let b = []
    let l = []
    let output = []
  
    let start = 0
  
    let end = arr.length
  
    if (arr.length>1){
  
        while ((end - start)>0){
  
            for (let i = start; i<end; i++){
  
                if (i===start){
                    for (let j = start; j<end; j++){
                        t.push(arr[i][j])
                          
                    }
                } else if (i!==end-1){
                    r.push(arr[i][end-1])
                    l.push(arr[i][start])
  
                } else {
                    for (let j =start; j<end; j++){
                      b.push(arr[i][j])

                    }     
  
                }
            
            }
  
            output=output.concat(t.concat(r.concat(b.reverse().concat(l.reverse()))))
            t = []
            r = []
            b = []
            l = []
            start++
            end--
        }
    } else {
  
        return arr.pop()
  
    }
    return(output)
  }

console.log(snail(arr))