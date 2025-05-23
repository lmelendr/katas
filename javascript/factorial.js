//Your task is to find the last non-zero digit of n! (factorial)
//if n = 12  your function should return 6 since 12! = 479001600

let n = 12

let factorial=BigInt(1)


for (let i=BigInt(1);i<=n;i++){
    factorial=factorial*i
}

str = factorial.toString().substring((factorial.toString().length)/2)

console.log(factorial,str)

console.log(parseInt(str.match(/[^0]/g).pop()))

