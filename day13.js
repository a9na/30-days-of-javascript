/*
Sleep

Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

Example 1:

Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
Example 2:

Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.
 

Constraints:

1 <= millis <= 1000
*/

async function sleep(millis) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, millis);
  });
}

// Example usage:
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // Approximately 100
});


/*
return new Promise(resolve => { ... }):

This line creates a new Promise. The Promise constructor takes an executor function, which is provided with a resolve callback. This callback is used to resolve the promise when the time has elapsed.

setTimeout(() => { resolve(); }, millis);:

Inside the Promise, the setTimeout function is used to create a delay.
setTimeout schedules a function to be executed after a specified number of milliseconds.
After the delay, the resolve function is called, which resolves the promise.

Example Usage:

let t = Date.now();: Capture the current time in milliseconds.
sleep(100).then(() => { ... }): Call the sleep function with a 100ms delay. Once the promise is resolved, the then callback is executed.
console.log(Date.now() - t);: Logs the difference in time between the start and the time when the promise is resolved. This should be approximately 100ms, verifying the sleep duration.
*/
