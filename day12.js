/*
Add Two Promises

Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
 

Example 1:

Input: 
promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
Output: 7
Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.
Example 2:

Input: 
promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
Output: -2
Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.
 

Constraints:

promise1 and promise2 are promises that resolve with a number
*/

function addTwoPromises(promise1, promise2) {
    return Promise.all([promise1, promise2])
        .then(([value1, value2]) => {
            return value1 + value2;
        });
}

// Example usage:
const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

const p = addTwoPromises(promise1, promise2);
p.then(result => {
    console.log(result); // Output: 7
});


/*

Promise.all is a static method that takes an array of promises as an argument.
It returns a single promise that resolves when all promises in the array have resolved. If any promise rejects, the whole Promise.all promise rejects.
When all promises resolve, Promise.all returns a promise that resolves with an array of the results of the input promises, in the same order as they were provided.
.then(([value1, value2]) => {...}):

The .then method is used to handle the resolved value from Promise.all.
The array [value1, value2] is a destructuring assignment that extracts the two values from the array returned by Promise.all.
Inside the .then block, value1 and value2 are the resolved values from promise1 and promise2, respectively.
*/
