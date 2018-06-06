// Closures are nested functions that are able to access parent variables 
// even after the parent function finishes. This is the way JS sets
// private variables and methods like the "private" keyword in Java and C++

//------------------- Single nested method -------------------//
/*
function outerFunction() {
  var innerVariable = "I'm sort of a secret.";
 
  return function innerScope() {
    var inaccessible = "Nothing can touch me.";
 
    return innerVariable;
  }
  
  var myScope = outerFunction();
  console.log(myScope());
*/

//------------------- Multiple nested methods -----------------//
/*
function outerFunction() {
  var innerVariable = "I'm sort of a secret.";
 
  return {
    
    innerScope1: function() {
      var inaccessible = "Nothing can touch me.";
 
      return innerVariable;
    },
    
    innerScope2: function() {
      var inaccessible = "Nothing can touch me either.";
 
      return innerVariable.replace('.', ' too.');
    }
    
  }
}

var myScope = outerFunction();
console.log(myScope.innerScope1());
console.log(myScope.innerScope2());
*/

//------------------ Shortcut: Don't need "outerFunction" declaration ------------------//

var myScope = (function() {
  var innerVariable = "I'm sort of a secret.";
 
  return {
    
    innerScope1: function() {
      var inaccessible = "Nothing can touch me.";
 
      return innerVariable;
    },
    
    innerScope2: function() {
      var inaccessible = "Nothing can touch me either.";
 
      return innerVariable.replace('.', ' too.');
    }
    
  }
})()

console.log(myScope.innerScope1()); // I'm sort of a secret.
console.log(myScope.innerScope2()); // I'm sort of a secret too.

/* Resources:
https://lazamar.github.io/closures-private-variables-and-methods-in-javascript/
*/