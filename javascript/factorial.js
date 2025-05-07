//Your task is to find the last non-zero digit of n! (factorial)
//if n = 12  your function should return 6 since 12! = 479001600

let n = 300
let f = 1

while(n!==1 && n >= 0){
    n === 0 ? n = 2 : f = f*n
    n-=1
}
console.log(Math.max(f))
console.log(f)
console.log(parseInt(f.toString().match(/[^0]/g).pop()))
