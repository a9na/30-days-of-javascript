/*
Array Wrapper

Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].
 

Example 1:

Input: nums = [[1,2],[3,4]], operation = "Add"
Output: 10
Explanation:
const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
obj1 + obj2; // 10
Example 2:

Input: nums = [[23,98,42,70]], operation = "String"
Output: "[23,98,42,70]"
Explanation:
const obj = new ArrayWrapper([23,98,42,70]);
String(obj); // "[23,98,42,70]"
Example 3:

Input: nums = [[],[]], operation = "Add"
Output: 0
Explanation:
const obj1 = new ArrayWrapper([]);
const obj2 = new ArrayWrapper([]);
obj1 + obj2; // 0
 

Constraints:

0 <= nums.length <= 1000
0 <= nums[i] <= 1000
Note: nums is the array passed to the constructor
*/

class ArrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }
    
    // Overriding the toString method to provide the desired string representation
    toString() {
        return `[${this.nums.join(',')}]`;
    }

    // Overriding the valueOf method to provide the desired behavior for addition
    valueOf() {
        return this.nums.reduce((acc, num) => acc + num, 0);
    }
}

// Example usage:
const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);

console.log(obj1 + obj2);  // Output: 10

const obj3 = new ArrayWrapper([23, 98, 42, 70]);

console.log(String(obj3));  // Output: "[23,98,42,70]"


/*
Constructor (constructor(nums)):

The constructor accepts an array of integers (nums) and stores it in the instance variable this.nums.

String Representation (toString()):

The toString() method is overridden to provide the desired string format.
The join(',') method is used to create a comma-separated string from the array elements, and then it's wrapped in square brackets.

Addition (valueOf()):

The valueOf() method is overridden to handle the addition operation.
JavaScript uses the valueOf method when performing arithmetic operations. Here, we sum all elements of the array using reduce.
*/
