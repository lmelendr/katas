// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, 
// or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word){
  
    const str = word.toLowerCase();
    let str2 = "";
    let output = ""
    
    for (i=0;i<str.length;i++) {

      output += str.substring(i+1).includes(str[i]) || str2.includes(str[i]) ? ')' : '('

      str2+=str[i]

    }
  
    return output;
}

console.log(duplicateEncode("Success"))