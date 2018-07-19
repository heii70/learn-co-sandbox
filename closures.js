// Closures are the combination of nested functions and the environment in which 
// they are declared in. 

// Closures are able to access parent variables 
// even after the parent function finishes. This is the way JS sets
// private variables and methods like the "private" keyword in Java and C++

// Variables [declared with "var"] and methods declared outside the return statement
// are Private [unless explicitly put in the return statement] and Public inside the 
// return statement

//------------------- Single nested method -------------------//

/*
function outerFunction() {
   var privateVariable = "secret";
 
   return function() { // public method
      return privateVariable;
   }
}
*/
  
// var test = outerFunction();
// console.log(test.privateVariable); // Undefined, cannot be accessed directly 
// console.log(test()); // "secret"

//------------------- Multiple nested methods -----------------//
/*
function outerFunction() {
  // local/private variables and method

  var privateVariable = "secret";
 
  function privateMethod() {
    var innerPrivateVariable = "Deep Secret"; // local/private to the inner method
    return innerPrivateVariable;
  }

  return {
    // public variables and methods

    publicVariable: 10,

    getPrivateVariable: function() {
      return privateVariable;
    },
    
    setPrivateVariable: function(msg) {
      privateVariable = msg;
    },

    getInnerPrivateVariable: privateMethod
    
    // privateMethod // Returns the private method directly, making it directly accessable; becomes public essentially. Avoid doing this.
    
  }
}

var test = outerFunction();
console.log(test.getPrivateVariable()); // "secret"
console.log(test.setPrivateVariable("secret changed"));
console.log(test.getPrivateVariable()); // "secret changed"
console.log(test.publicVariable); // 10
// console.log(test.privateMethod()); // Throws error b/c privateMethod isn't directly accessable
console.log(test.getInnerPrivateVariable());
*/

//------------------ Function Declaration with an Anonymous Function ------------------//
/*
var test = (function() {
  // public variables and methods

  var privateVariable = "secret";
 
  function privateMethod() {
    var innerPrivateVariable = "Deep Secret"; // local/private to the inner method
    return innerPrivateVariable;
  }

  return {
    // public variables and methods

    publicVariable: 10,

    getPrivateVariable: function() {
      return privateVariable;
    },
    
    setPrivateVariable: function(msg) {
      privateVariable = msg;
    },

    getInnerPrivateVariable: privateMethod    
  }
})();

console.log(test.getPrivateVariable()); // "Secret"
console.log(test.getInnerPrivateVariable()); // "Deep Secret"
*/