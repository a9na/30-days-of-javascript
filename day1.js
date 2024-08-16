/*Create Hello World Function

Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 

Example 1:

Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
Example 2:

Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".
 

Constraints:

0 <= args.length <= 10

*/



/**
 * @return {Function}
 */

function createHelloWorld() {
    return function() {
        return "Hello World";
    };
}

// Example usage:
const f = createHelloWorld();
console.log(f()); // "Hello World"
console.log(f({}, null, 42)); // "Hello World"


/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */

 /*
 Explanation:

The createHelloWorld function is defined.
This function returns a new function that, when called, returns the string "Hello World".
The returned function ignores any arguments passed to it and always returns "Hello World".
This satisfies the requirements that the function returned by createHelloWorld should always return "Hello World" regardless of any arguments provided.

The function always ignores any arguments because it does not use them in its implementation. In JavaScript, functions can accept arguments, 
but if those arguments are not referenced or used within the function body, they have no effect on the function's output.
 
 */ 
