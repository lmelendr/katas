
const n = 12533

let decimal =""

let j = 0

for (i = n.toString().length - 1 ; i>= 0 ; i--){
    
    if( j!==0 && j % 3 === 0){
        decimal = n.toString()[i]+',' +decimal
    }else{
        decimal = n.toString()[i]+decimal
    }
    j+=1
}


console.log(decimal)