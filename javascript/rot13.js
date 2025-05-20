// How can you tell an extrovert from an introvert at NSA?
// Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

// I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
// According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

// For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

// Test examples:

// "EBG13 rknzcyr." -> "ROT13 example."

// "This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"


const s='This is my first ROT13 excercise!'

const rot13 = {
    a : 'n',b : 'o',c : 'p',d : 'q',e : 'r',f : 's',g : 't',h : 'u',i : 'v',j : 'w',k : 'x',l : 'y',m : 'z',
    A : 'N',B : 'O',C : 'P',D : 'Q',E : 'R',F : 'S',G : 'T',H : 'U',I : 'V',J : 'W',K : 'X',L : 'Y',M : 'Z'
}

regex=new RegExp('[A-Za-z]')

arr = [...s]

output = arr.map( x => !regex.test(x) ? x : !rot13[x] ? valueTokey(x,rot13) :rot13[x] )

function valueTokey (value,obj) {
    for ( let key in obj) {
        if (obj[key] === value ) {
            return key
        }
    }  
}
console.log(output.join(''))