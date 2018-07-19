// Declaring Instance Variables and Methods

// --------------------------- Declaring inside Constructor Function ----------------- //

// Variables and methods that are declared inside the constructor function
// are instantiated everytime for every object that is created from the psuedo-class.
// Every object of the pseudo-class has its own copy of the variables/methods.
/*
function MyClass() {
	// Local/Private Variables and Methods

    var privateVariable = 'Secret';

    var privateMethod = function() { 
    	var innerPrivateVariable = "Deep Secret"; 
    	return innerPrivateVariable; 
    };

    var anotherPrivateMethod = function() { 
    	var innerPrivateVariable = "Deep Secret Changed"; 
    	return innerPrivateVariable; 
    };

    // Public variables and methods
	
	this.publicVariable = 10;

    this.getPrivateVariable = function() { return privateVariable; };
    this.setPrivateVariable = function(value) { privateVariable = value; };
    
    this.getInnerPrivateVariable = privateMethod;	
    this.setGetInnerPrivateVariable = function() { 
    	this.getInnerPrivateVariable = anotherPrivateMethod; // Reassign variable to another private method
    };
}

var a1 = new MyClass();
var a2 = new MyClass();

// Public
console.log(a1.publicVariable);		// 10
console.log(a2.publicVariable);		// 10
a1.publicVariable = 20;
console.log(a1.publicVariable);		// 20
console.log(a2.publicVariable);		// 10

// Private
console.log(a1.getPrivateVariable()); 		// "Secret"
console.log(a2.getPrivateVariable()); 		// "Secret"
a1.setPrivateVariable("Secret Changed");
console.log(a1.getPrivateVariable());		// "Secret Changed"
console.log(a2.getPrivateVariable());		// "Secret"

console.log(a1.getInnerPrivateVariable()); 	// "Deep Secret"
console.log(a2.getInnerPrivateVariable());	// "Deep Secret"
a1.setGetInnerPrivateVariable();
console.log(a1.getInnerPrivateVariable());	// "Deep Secret Changed"
console.log(a2.getInnerPrivateVariable());	// "Deep Secret"
*/

// --------------------------- Prototyping ------------------------- //

// Prototyping allows other variables and functions to extend the constructor function 
// outside of the constructor function. All variables/methods declared via prototyping 
// inherit from the "prototype" method of the psuedo-class, so if the "prototype" method 
// is modified, the change is reflected on all objects from that psuedo-class. 
// Furthermore, variable/methods declared via prototyping are instantiated ONLY once; this 
// gives prototyping static-like properties and increases memory efficiency.

// Variables/methods declared via prototyping are still instances so 
// objects must be instantiated to have access. Unlike variables/methods declared
// inside the constructor function, variables/methods declared via prototying do not 
// have direct access to the private variables in the constructor function; need to use
// setters and getters aka privileged/helper functions. All variables/methods declared 
// via prototyping are public.

// *NOTE: Never declare prototype variables/methods inside the constructor function. 
// By doing so defeats the purpose of prototyping. Variables/methods get overwritten
// everytime a new object is instantiated.

/*
function MyClass() { 
	
	var privateVariable = 'Secret';
	
	this.getPrivateVariable = function() { return privateVariable; };
}

MyClass.prototype.prototypeVariable = 10;

MyClass.prototype.setPrototypeVariable = function(value) { // Method declared via prototyping
	MyClass.prototype.prototypeVariable = value;
};

var a1 = new MyClass();
var a2 = new MyClass();
console.log(a1.prototypeVariable);			// 10
console.log(a2.prototypeVariable);			// 10

// All three do the samething
a1.setPrototypeVariable(20);
//MyClass.prototype.prototypeVariable = 20;
//MyClass.prototype.setPrototypeVariable(20);

console.log(a1.prototypeVariable);			// 20
console.log(a2.prototypeVariable);			// 20

secretVariable = a2.getPrivateVariable();	// Need to use getter method to get private variable
a2.setPrototypeVariable(secretVariable); 	

console.log(a1.prototypeVariable);			// "Secret"
console.log(a2.prototypeVariable);			// "Secret"
*/

// Declaring static variables/methods

// ---------------------------------- Public ------------------------------------------ //

/*
function MyClass() { }

MyClass.publicStaticVariable = 10;

MyClass.setPublicStaticVariable = function(value) { // Static method
	MyClass.publicStaticVariable = value;
}

console.log(MyClass.publicStaticVariable); // 10

MyClass.setPublicStaticVariable(20);
// MyClass.publicStaticVariable = 20;

console.log(MyClass.publicStaticVariable); // 20

var a = new MyClass();
console.log(a.publicStaticVariable); // undefinded b/c that static variable is attached to the constructor function object itself, not to any instances
*/

// ---------------------------------------- Private ------------------------------------------- //

// Implementing private static variables/methods in JS is a little tricky. The constructor function must be wrapped
// in a outer function that returns the constructor function definition, forming a closure. Private static variables/methods
// are declared above the constructor function definition within the wrapper function. 

function outerFunction() { 
	
	// Private static variables/methods

	var privateStaticVariable = "Static Secret";

	var privateStaticMethod = function() {
		var innerPrivateVariable = "Deep Static Secret"; 
    	return innerPrivateVariable; 
	};

	function MyClass() { 
		// Private instance variables/methods

		var privateInstanceVariable = "Instance Secret";

		var privateInstanceMethod = function() {
			var innerPrivateVariable = "Deep Instance Secret"; 
    		return innerPrivateVariable; 
		}

		// Public instance variables/methods
		this.publicInstanceVariable = "Instance Known";

		this.getPrivateInstanceVariable = function() { return privateInstanceVariable; };
    	this.setPrivateInstanceVariable = function(value) { privateInstanceVariable = value; };
		
		this.getInnerPrivateInstanceVariable = privateInstanceMethod;

		this.getPrivateStaticVariable = function() { return privateStaticVariable; };
		this.setPrivateStaticVariable = function(value) { privateStaticVariable = value; };

		this.getInnerPrivateStaticVariable = privateStaticMethod;
	}

	// Prototype variables/methods (public instance but instantiated only once)

	MyClass.prototype.prototypeVariable = "Prototype(Instance) Known";

	MyClass.prototype.setPrototypeVariable = function(value) { 
		MyClass.prototype.prototypeVariable = value;
	};

	// Public static variables/methods

	MyClass.publicStaticVariable = "Static Known";

	MyClass.getPrivateStaticVariable = function() { return privateStaticVariable; };
	MyClass.setPrivateStaticVariable = function(value) { privateStaticVariable = value; };


	MyClass.getInnerPrivateStaticVariable = privateStaticMethod;

	return MyClass; // Return the function definition
}

var MyClass = outerFunction();
var a1 = new MyClass();
var a2 = new MyClass();


// ------------------ Private Static --------------------------------- //

// Using privileged/helper public instance methods
console.log(a1.getPrivateStaticVariable());				// "Static Secret"
console.log(a2.getPrivateStaticVariable());				// "Static Secret"
a1.setPrivateStaticVariable("Static Secret Changed");	
console.log(a1.getPrivateStaticVariable());				// "Static Secret Changed"
console.log(a2.getPrivateStaticVariable());				// "Static Secret Changed"
console.log(a1.getInnerPrivateInstanceVariable());		// "Deep Static Secret"

// Using priviledged/helper public static methods
MyClass.setPrivateStaticVariable("Static Secret Changed Again");
console.log(MyClass.getPrivateStaticVariable());		// "Static Secret Changed Again"
console.log(MyClass.getInnerPrivateStaticVariable());	// "Deep Static Secret"


// ------------------------- Private Instance ----------------------------------- //

console.log(a1.getPrivateInstanceVariable()); 			// "Instance Secret"
a1.setPrivateInstanceVariable("Instance Secret Changed");
console.log(a1.getPrivateInstanceVariable()); 			// "Instance Secret Changed"
console.log(a1.getInnerPrivateInstanceVariable()); 		// "Deep Instance Secret"


// ------------------------- Public Instance ---------------------------------- //

console.log(a1.publicInstanceVariable);					// "Instance Known"
console.log(a2.publicInstanceVariable);					// "Instance Known"
a1.publicInstanceVariable = "Instance Known Changed";
console.log(a1.publicInstanceVariable);					// "Instance Known Changed"
console.log(a2.publicInstanceVariable);					// "Instance Known"

// Prototype
console.log(a1.prototypeVariable);		// "Prototype(Instance) Known"
console.log(a2.prototypeVariable);		// "Prototype(Instance) Known"

MyClass.prototype.setPrototypeVariable("Prototype(Instance) Known Changed") 
// MyClass.prototype.prototypeVariable = "Prototype(Instance) Known Changed";

console.log(a1.prototypeVariable);		// "Prototype(Instance) Known Changed"
console.log(a2.prototypeVariable);		// "Prototype(Instance) Known Changed"

// ------------------------------------ Public Static -------------------------------- //

console.log(MyClass.publicStaticVariable);	// "Static Known"
MyClass.publicStaticVariable = "Static Known Changed";
console.log(MyClass.publicStaticVariable);	// "Static Known Changed";