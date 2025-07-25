// You know how in Mathematics, you can write something like 1 < 2 < 3 and it would be completely fine? Let's re-create that functionality!

// You need to create a class called "Relational", which takes a single argument for its initial value. 
// Then, by calling various methods, such as .equals(value) or .lessThan(value), we can build a similar expression you could do in Mathematics. 
// Albeit with a load more characters.

// You need to implement the following methods:

// .equals(value), .notEquals(value)
// .lessThan(value), .lessThanOrEqualTo(value)
// .greaterThan(value), .greaterThanOrEqualTo(value)
// .passed() should also return the evaluated expression as a true or false value.
// And each much be able to compound with the previous statement.

// For example: new Relational(1).lessThan(2).lessThan(3).passed() should be equivalent to the Mathematical 1 < 2 < 3, or the code (1 < 2) && (2 < 3).

// You could, of course have longer expressions like 1 < 2 < 3 < 4 < 5, or even crazy, kinda useless stuff like 1 < 3 > 2 != 4.




class Relational {
    constructor(value) {

        this.value=value;
     //   this.ouput=`${this.value}`
        this.result=[]
    }

    passed() {
        
        return this.result.every(x => x == true);
    }

    equals(value) {
  //      this.ouput += ` = ${value}`
        this.result.push(this.value == value)
        this.value = value
        return this;
    }
    notEquals(value) {
   //     this.ouput += ` != ${value}`
        this.result.push(this.value != value)
        this.value = value
        return this;
    }
    lessThan(value) { 
   //     this.ouput += ` < ${value}`
        this.result.push(this.value < value)
        this.value = value
        return this;
    }
    lessThanOrEqualTo(value) { 
   //     this.ouput += ` <= ${value}`
        this.result.push(this.value <= value)
        this.value = value
        return this;
    }
    greaterThan(value) {
    //    this.ouput += ` > ${value}`
        this.result.push(this.value > value)
        this.value = value
        return this;
    }
    greaterThanOrEqualTo(value) { 
   //     this.ouput += ` >= ${value}`
        this.result.push(this.value >= value)
        this.value = value
        return this;      
    }
}

console.log(new Relational(1).lessThan(2).lessThan(1).passed())



