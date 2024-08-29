/*
Compact Object

Given an object or array obj, return a compact object.

A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

 

Example 1:

Input: obj = [null, 0, false, 1]
Output: [1]
Explanation: All falsy values have been removed from the array.
Example 2:

Input: obj = {"a": null, "b": [false, 1]}
Output: {"b": [1]}
Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.
Example 3:

Input: obj = [null, 0, 5, [0], [false, 16]]
Output: [5, [], [16]]
Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.
 

Constraints:

obj is a valid JSON object
2 <= JSON.stringify(obj).length <= 106
*/

function compactObject(obj) {
    if (Array.isArray(obj)) {
        return obj
            .map(item => compactObject(item))  // Recursively process each item
            .filter(item => Boolean(item));    // Keep only truthy items
    } else if (typeof obj === 'object' && obj !== null) {
        return Object.keys(obj)
            .reduce((acc, key) => {
                const value = compactObject(obj[key]);
                if (Boolean(value)) {
                    acc[key] = value;  // Add key to the accumulator if value is truthy
                }
                return acc;
            }, {});
    } else {
        return obj;
    }
}

// Example usage:
const obj1 = [null, 0, false, 1];
const obj2 = {"a": null, "b": [false, 1]};
const obj3 = [null, 0, 5, [0], [false, 16]];

console.log(compactObject(obj1)); // Output: [1]
console.log(compactObject(obj2)); // Output: { "b": [1] }
console.log(compactObject(obj3)); // Output: [5, [], [16]]

/*
Handling Arrays:

We check if obj is an array using Array.isArray(obj).
If it is, we map each element through the compactObject function to recursively process it.
Then, we filter out any falsy values using Boolean(item).

Handling Objects:

We check if obj is a non-null object using typeof obj === 'object' && obj !== null.
If it is, we iterate over its keys, recursively compacting each value.
If the compacted value is truthy, we add it to the resulting object.

Base Case:

If obj is neither an array nor an object (i.e., it's a primitive value), we simply return it as-is.
*/
