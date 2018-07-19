// Constructor Functions/Psuedo-Classes Vs. Normal Functions

// ---------------------------- Constructor Functions --------------------------------- //

// Using the "new" keyword is equivalent to using "return this" in the function, unless 
// the function has an explicit return statement that's not "return this". E.g. [1]

// function MyClass(value) {
//	 this.value = value;
//	 return this; // Redundant if using "new" keyword
// }

// var a = MyClass(); 		// Both do the samething in this case
// var b = new MyClass();
// console.log(a.value); 	// 10
// console.log(b.value); 	// 10

// ------------------------------- Normal Functions -------------------------------- //

// If a function has an explicit return statement [that's not "return this"], 
// the value returned by the "new" keyword is just the return value and 
// not actually a reference to/instance of the function. E.g. [2]

// function MyClass(value) {
//	 this.value = value;
//	 return 0;
// }

// var a = new MyClass(10);   // a = 0, not a object of MyClass
// var b = MyClass(10); 	  // b = 0, returns the samething
// console.log(a.value)   	  // Undefined b/c "a" is not an instance