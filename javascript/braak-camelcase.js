// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
const str = "rightBadTryNextWeekLeaveFirstUseProblemPartManDifferentWorkVerbsImportantGroupDayDifferentGoFact"

function breakcamel(str){

    return [...str].map(e => (65 <= e.charCodeAt(0) && e.charCodeAt(0) <= 90) ? ' '+ e : e).join('')
    
}

console.log(breakcamel(str))