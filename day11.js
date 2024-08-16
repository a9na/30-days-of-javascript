/*
Memoize

Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
 

Example 1:

Input:
fnName = "sum"
actions = ["call","call","getCallCount","call","getCallCount"]
values = [[2,2],[2,2],[],[1,2],[]]
Output: [4,4,1,3,2]
Explanation:
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
// "getCallCount" - total call count: 1
memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
// "getCallCount" - total call count: 2
Example 2:

Input:
fnName = "factorial"
actions = ["call","call","call","getCallCount","call","getCallCount"]
values = [[2],[3],[2],[],[3],[]]
Output: [2,6,2,2,6,2]
Explanation:
const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
const memoFactorial = memoize(factorial);
memoFactorial(2); // "call" - returns 2.
memoFactorial(3); // "call" - returns 6.
memoFactorial(2); // "call" - returns 2. However factorial was not called because 2 was seen before.
// "getCallCount" - total call count: 2
memoFactorial(3); // "call" - returns 6. However factorial was not called because 3 was seen before.
// "getCallCount" - total call count: 2
Example 3:

Input:
fnName = "fib"
actions = ["call","getCallCount"]
values = [[5],[]]
Output: [8,1]
Explanation:
fib(5) = 8 // "call"
// "getCallCount" - total call count: 1
 

Constraints:

0 <= a, b <= 105
1 <= n <= 10
0 <= actions.length <= 105
actions.length === values.length
actions[i] is one of "call" and "getCallCount"
fnName is one of "sum", "factorial" and "fib"
*/

function memoize(fn) {
  const cache = {};
  let callCount = 0;

  const memoizedFn = function(...args) {
    const key = JSON.stringify(args);
    if (cache.hasOwnProperty(key)) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      callCount++;
      return result;
    }
  };

  memoizedFn.getCallCount = function() {
    return callCount;
  };

  return memoizedFn;
}

function sum(a, b) {
  return a + b;
}

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function fib(n) {
  if (n <= 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

function runMemoized(fnName, actions, values) {
  let fn;
  if (fnName === "sum") {
    fn = sum;
  } else if (fnName === "factorial") {
    fn = factorial;
  } else if (fnName === "fib") {
    fn = fib;
  }

  const memoizedFn = memoize(fn);
  const result = [];

  for (let i = 0; i < actions.length; i++) {
    if (actions[i] === "call") {
      result.push(memoizedFn(...values[i]));
    } else if (actions[i] === "getCallCount") {
      result.push(memoizedFn.getCallCount());
    }
  }

  return result;
}

// Example usage:
const fnName = "sum";
const actions = ["call", "call", "getCallCount", "call", "getCallCount"];
const values = [[2, 2], [2, 2], [], [1, 2], []];
console.log(runMemoized(fnName, actions, values));  // Output: [4, 4, 1, 3, 2]


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */


/*
memoize Function:

It takes a function fn and returns a memoized version of it.
A cache object is used to store results of previous function calls.
callCount keeps track of how many times the original function fn was actually called.
memoizedFn is the function that checks if the result for the given arguments is already in the cache. 
If it is, it returns the cached result; if not, it computes the result, caches it, increments the call count, and then returns the result.


sum, factorial, fib Functions:

These are simple implementations of the sum, factorial, and Fibonacci functions.


runMemoized Function:

It selects the appropriate function based on the fnName parameter.
It then processes the actions and values arrays to either call the memoized function or get the call count, storing results in the result array.
Finally, it returns the result array.



In the example provided:

We memoize the sum function and make several calls.
The getCallCount action is used to check how many times the original function was called, ensuring the memoization is working correctly.
*/
