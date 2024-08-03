/*
Problem: 
Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
Example 1:

Input: 
n = 10 
["call","call","call"]
Output: [10,11,12]
Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
Example 2:

Input: 
n = -2
["call","call","call","call","call"]
Output: [-2,-1,0,1,2]
Explanation: counter() initially returns -2. Then increases after each sebsequent call.
 

Constraints:

-1000 <= n <= 1000
0 <= calls.length <= 1000
calls[i] === "call"*/

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        return n++;
    };
};

/**
 * Example Usage:
 * const counter = createCounter(10);
 * console.log(counter()); // 10
 * console.log(counter()); // 11
 * console.log(counter()); // 12
 */

/*
Function Definition:
We define the createCounter function that takes a number n.

Returning a Function:
Inside createCounter, we return a new anonymous function. This anonymous function is our counter.

Closure in JavaScript:
The returned function forms a closure that captures the variable n. This means it remembers the value of n between calls.

Increment and Return:
Each time the returned function is called, it:

Returns the current value of n.
Increments n using the post-increment operator n++.*/

/*
First Call:

counter() is called. It accesses the n variable, which is 10.
It returns 10 and then increments n to 11.
Second Call:

counter() is called again. It now accesses the updated value of n, which is 11.
It returns 11 and then increments n to 12.
Third Call:

counter() is called once more. It now accesses the updated value of n, which is 12.
It returns 12 and then increments n to 13.
The key point is that the counter function retains access to the original n variable and its updated values through the closure. 
This allows the function to maintain its state across multiple calls, providing a way to keep track of the count and update it correctly.*/


