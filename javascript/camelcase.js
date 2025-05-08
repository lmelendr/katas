// toCamelCase("hello world",1) === "helloWorld"
// toCamelCase("hello world",2) === "hellOworld"
// toCamelCase("hello world",3) === "hellOWorld"

// toCamelCase("Hello world",1) === "helloWorld"

// toCamelCase("Each number plus one",1) === "eachNumberPlusOne"
// toCamelCase("Each number plus one",2) === "eacHnumbeRpluSone"
// toCamelCase("Each number plus one",3) === "eacHNumbeRPluSOne"



function toCamelCase(s,n){
    //coding and coding..
    
      let output = []
      const arr = s.toLowerCase().split(" ")
      
      switch (n) {
      case 1 :
          output = arr.map((x,i) => (i===0) ? x : upperFirstChar(x))
          break
      
      case 2 :
          output = arr.map((x,i) => (i===arr.length - 1) ? x : reverse(upperFirstChar(reverse(x))))
          break
  
      case 3 :
  
          output = arr.map(x => upperBoth(x))
          output[0] = lowerFirstChar(output[0])
          output[output.length - 1] = reverse(lowerFirstChar(reverse(output[output.length - 1])))
  
          break
        
      }
      
      return output.join("")   
  
  }
  
  function reverse(s){
    return [...s].reverse().join("")
  }
  
  function lowerFirstChar(x){
    return x.replace(x.match(/\w/)[0],x.match(/\w/)[0].toLowerCase())
  }
  
  
  function upperFirstChar(x){
    return x.replace(x.match(/\w/)[0],x.match(/\w/)[0].toUpperCase())
  }
  
  function upperBoth(x){
    return reverse(upperFirstChar(reverse(upperFirstChar(x))))
  }
  
console.log(toCamelCase("SMcnHiA vtOXFvr YRkZ kvz LJsaA LREJa mRkWn KIgoE",3))