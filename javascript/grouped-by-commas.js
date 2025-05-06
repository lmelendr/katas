
const n = 1253355

let output =""

let j = 0

for (i = n.toString().length - 1 ; i>= 0 ; i--){
    
    if( j!==0 && j % 3 === 0){
        output = n.toString()[i]+',' + output
    }else{
        output = n.toString()[i]+ output
    }
    j+=1
}

console.log(decimal)