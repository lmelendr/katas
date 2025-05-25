// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

const str = " Hello there thanks for trying my Kata"

function generateHashtag (str) {
  
    const arr = str.split(" ").filter(x => x !== "").map(element => element.replace(/\w/,element[0].toUpperCase()));
    
    return arr.join("") === "" || arr.join("").length > 139 ? false : '#' + arr.join("")
    
 }




console.log(generateHashtag(str))