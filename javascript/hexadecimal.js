
// const hexa = {
//    10 : 'A',
//    11 : 'B',
//    12 : 'C',
//    13 : 'D',
//    14 : 'E',
//    15 : 'F'     
// }

// let n = 300 
// let arr = []
// let i=q=r=0

// while (n>=16) {
//     arr.push(n%16)
//     n=(Math.floor(n/16))
//     i++
    
// }

// arr.push(n)

// arr=arr.map(x => x<10 ? '0'+ x.toString() : x.toString())

// arr.some( i => i>9) ? console.log(hexadecimal(arr)) : console.log(arr.reverse().join(""))

// function hexadecimal (arr){

//     for (const i in hexa) {
//         arr=arr.map(x => x === i ? hexa[i] : x )
//     }

//     return arr.reverse().join("")
// }

function rgb(r, g, b) {
  
    let arr = [r,g,b]
    
    arr = round(arr)

    arr = arr.map(x => x<16 ? '0' + x.toString(16).toUpperCase() : x.toString(16).toUpperCase())
    
    return arr.join('') 

}

function round(arr){

    for (let i=0 ; i<arr.length ; i++){
        if(arr[i]<0){
            arr[i]=0
        }else if(arr[i]>255){
            arr[i]=255
        }
    }
    return arr
}

