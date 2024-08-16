/*
Allow One Function Call

Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.
 

Example 1:

Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
Output: [{"calls":1,"value":6}]
Explanation:
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn was not called
Example 2:

Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
Output: [{"calls":1,"value":140}]
Explanation:
const onceFn = once(fn);
onceFn(5, 7, 4); // 140
onceFn(2, 3, 6); // undefined, fn was not called
onceFn(4, 6, 8); // undefined, fn was not called
 

Constraints:

calls is a valid JSON array
1 <= calls.length <= 10
1 <= calls[i].length <= 100
2 <= JSON.stringify(calls).length <= 1000
*/

function once(fn) {
    let called = false;  // This variable keeps track of whether fn has been called

    return function(...args) {  // This returned function has access to the `called` variable
        if (!called) {  // If `called` is false, it means `fn` hasn't been called yet
            called = true;  // Set `called` to true to indicate that `fn` has been called
            return fn(...args);  // Call `fn` with the provided arguments and return the result
        }
        return undefined;  // If `called` is true, return undefined (don't call `fn` again)
    };
}

/*
When you define a function inside another function in JavaScript, the inner function forms a closure. 
This means that the inner function retains access to the variables of the outer function, even after the outer function has finished executing.
In our case, the inner function (the one returned by once) retains access to the called variable, which is defined in the outer once function.

The called variable is initialized as false when the once function is first executed.
This variable is accessible and modifiable by the inner function (the one returned by once).

On the first call to the function returned by once, the called variable is false.
Since called is false, the function knows that fn hasn't been called yet.
The inner function then sets called to true and calls fn, ensuring that fn runs and returns its result.
On subsequent calls, the called variable remains true.
Since called is now true, the function knows that fn has already been called once.
It immediately returns undefined without calling fn again.
*/
