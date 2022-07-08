/**
 * https://leetcode.com/problems/binary-search/
 * https://youtu.be/s4DPM8ct1pI
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    let leftPtr = 0;
    let rightPtr = nums.length - 1;

    do {
        let midPtr = Math.floor((rightPtr + leftPtr) / 2);
        // let midPtr = leftPtr + Math.floor((rightPtr - leftPtr) / 2);  // ALTERNATIVE: THIS AVOID ADDING 2 LARGE NUMBERS
        const val = nums[midPtr];

        if (val < target) {
            leftPtr = midPtr + 1;
        } else if (val > target) {
            rightPtr = midPtr - 1;
        } else {
            return midPtr; // Found it
        }

    } while (leftPtr <= rightPtr);

    return -1;
};

module.exports.search = search;