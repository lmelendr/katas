

const array = [20,10,-80,10,10,15,35];



function findEvenIndex(array) {
  //Code goes here!
    for(let i=0;i<array.length;i++){
        const left = array.filter((x,j) => j<i);
        const right = array.filter((x,j) => i<j);

        if(left.reduce((sum,x) => sum+x,0) === right.reduce((sum,x) => sum+x,0)) { return i}
    } 
    
    return -1
} 

console.log(equal(array))