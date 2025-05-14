function pigIt(str){
  
    let arr = str.split(" ")
  
    arr = arr.map( x => x.match(/\W/) ? x : change([...x]))
    
    return arr.join(" ")
    
  }
  
  function change (arr) {
     arr.push(arr[0]+'ay')
     arr.reverse().pop()
     arr.reverse()
     return arr.join('')
  }

  