/*
To Be Or Not To Be


Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 

Example 1:

Input: func = () => expect(5).toBe(5)
Output: {"value": true}
Explanation: 5 === 5 so this expression returns true.
Example 2:

Input: func = () => expect(5).toBe(null)
Output: {"error": "Not Equal"}
Explanation: 5 !== null so this expression throw the error "Not Equal".
Example 3:

Input: func = () => expect(5).notToBe(null)
Output: {"value": true}
Explanation: 5 !== null so this expression returns true.*/


/**
 * @param {string} val
 * @return {Object}
 */
// Define the expect function
var expect = function(val) {
    // Return an object with two methods: toBe and notToBe
    return {
        toBe: function(expectedVal) {
            // Check if val is strictly equal to expectedVal
            if (val === expectedVal) {
                return true; // Return true if they are equal
            } else {
                throw new Error("Not Equal"); // Throw an error if they are not equal
            }
        },
        notToBe: function(unexpectedVal) {
            // Check if val is not strictly equal to unexpectedVal
            if (val !== unexpectedVal) {
                return true; // Return true if they are not equal
            } else {
                throw new Error("Equal"); // Throw an error if they are equal
            }
        }
    };
};

// Examples of using the expect function

try {
    console.log(expect(5).toBe(5)); // true
} catch (e) {
    console.error(e.message); // Should not be called
}

try {
    console.log(expect(5).toBe(null)); // throws "Not Equal"
} catch (e) {
    console.error(e.message); // "Not Equal"
}

try {
    console.log(expect(5).notToBe(null)); // true
} catch (e) {
    console.error(e.message); // Should not be called
}

try {
    console.log(expect(5).notToBe(5)); // throws "Equal"
} catch (e) {
    console.error(e.message); // "Equal"
}
