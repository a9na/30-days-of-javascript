/*
Array Prototype Last

Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

You may assume the array is the output of JSON.parse.

 

Example 1:

Input: nums = [null, {}, 3]
Output: 3
Explanation: Calling nums.last() should return the last element: 3.
Example 2:

Input: nums = []
Output: -1
Explanation: Because there are no elements, return -1.
 

Constraints:

arr is a valid JSON array
0 <= arr.length <= 1000
*/

Array.prototype.last = function() {
    // Check if the array is empty
    if (this.length === 0) {
        return -1;
    }
    // Return the last element
    return this[this.length - 1];
}


let nums1 = [null, {}, 3];
console.log(nums1.last()); // Output: 3

let nums2 = [];
console.log(nums2.last()); // Output: -1

/*
Array.prototype.last: This code adds a new method called last to the prototype of the Array object, so that every array can use this method.
this.length === 0: Checks if the array is empty.
return -1: If the array is empty, it returns -1.
this[this.length - 1]: If the array is not empty, it returns the last element of the array, using the fact that the index of the last element is length - 1.
*/
