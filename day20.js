/*
Is Object Empty

Given an object or an array, return if it is empty.

An empty object contains no key-value pairs.
An empty array contains no elements.
You may assume the object or array is the output of JSON.parse.

 

Example 1:

Input: obj = {"x": 5, "y": 42}
Output: false
Explanation: The object has 2 key-value pairs so it is not empty.
Example 2:

Input: obj = {}
Output: true
Explanation: The object doesn't have any key-value pairs so it is empty.
Example 3:

Input: obj = [null, false, 0]
Output: false
Explanation: The array has 3 elements so it is not empty.
 

Constraints:

obj is a valid JSON object or array
2 <= JSON.stringify(obj).length <= 105
 

Can you solve it in O(1) time?
*/

function isEmpty(obj) {
    // Check if the object is an array
    if (Array.isArray(obj)) {
        // If array, check if its length is 0
        return obj.length === 0;
    } else {
        // If object, check if it has any keys
        return Object.keys(obj).length === 0;
    }
}

// Example usage:
console.log(isEmpty({"x": 5, "y": 42})); // Output: false
console.log(isEmpty({})); // Output: true
console.log(isEmpty([null, false, 0])); // Output: false
console.log(isEmpty([])); // Output: true

/*
For Objects: In JavaScript, we can check if an object has any keys by using Object.keys(obj).length. If the length is 0, the object is empty.
For Arrays: We can check if an array has any elements by checking its length property. If the length is 0, the array is empty.
However, both of these operations generally involve iterating over the keys or elements to count them, which is 𝑂(𝑛) in the worst case. To achieve constant time 
O(1), we leverage the fact that both Object.keys(obj).length for objects and arr.length for arrays can be checked directly without iteration.

Array.isArray(obj): This checks if the input is an array. If it is, we directly check the length of the array.
Object.keys(obj).length: This returns the number of keys in the object. If the length is 0, the object is empty.
*/
