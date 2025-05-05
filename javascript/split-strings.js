
//Complete the solution so that it splits the string into pairs of two characters. 
//If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

//Examples:

//* 'abc' =>  ['ab', 'c_']
//* 'abcdef' => ['ab', 'cd', 'ef']



let str = 'abcdef'

function splitStrings (str){

    let result=[]

    str.length % 2 === 0 ? str : str = str + '_'

    for (let i=0 ; i<[...str].length ; i=i+2){

        result.push([...str][i]+[...str][i+1])
    }

    return result

}

console.log(splitStrings(str))