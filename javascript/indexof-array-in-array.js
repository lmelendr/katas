
//JavaScript's indexOf does not work with arrays as input. This is because [1,2] === [1,2] will return false in JavaScript. Many other languages have similar quirks.
//However, sometimes it is useful to search for an Array. 
//Write a function that looks for an array within a two-dimensional array and returns the index of the first matching element. If there is no match, your function should return -1.


var arrayToSearch = [[2,3],[7,2],[9,20],[1,2],[7,2],[45,4],[7,87],[4,5],[2,7],[6,32]];
var query = [7,28]; // => 0


var searchArray = function (arrayToSearch, query) {
    // TODO your code here
      
      if (arrayToSearch.some(x => !Array.isArray(x)) || arrayToSearch.some(x => x.length > 2) || !Array.isArray(query) || query.length > 2 ) {
    
        throw new Error("no cumple con los criterios")
    
      }else {
        
        arrayToSearch = arrayToSearch.map(x => x.join())
    
        let indice = []
    
        arrayToSearch.forEach((e,i) => {
            if (e === query.join()){
                indice.push(i)
                
        }
        })
    
        return indice.length >= 1  ? indice[0] : -1
      }
       
}  


console.log(searchArray(arrayToSearch,query))