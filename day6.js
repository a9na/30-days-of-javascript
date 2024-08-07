/* Filter Elements from Array
Easy
Companies
Hint
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.

 

Example 1:

Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10
Example 2:

Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
Output: [1]
Explanation:
fn can also accept the index of each element
In this case, the function removes elements not at index 0
Example 3:

Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
Output: [-2,0,1,2]
Explanation:
Falsey values such as 0 should be filtered out
 

Constraints:

0 <= arr.length <= 1000
-109 <= arr[i] <= 109 
*/


function filterArray(arr, fn) {
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

// Example usage:
const arr = [1, 2, 3, 4, 5];
const fn = (element, index) => element % 2 === 0; // Filter even numbers
console.log(filterArray(arr, fn)); // Output: [2, 4]


/*
filteredArr Initialization: We start by initializing an empty array filteredArr to collect the elements that pass the filtering function.
Iteration: We iterate through the input array arr using a for loop.
Applying the Filtering Function: For each element in the array, we call the filtering function fn with the element and its index.
Truthy Check: If the result of fn(arr[i], i) is truthy, we add the element to filteredArr.
Return Result: After the loop completes, we return the filteredArr which contains all elements that passed the filter.
*/
