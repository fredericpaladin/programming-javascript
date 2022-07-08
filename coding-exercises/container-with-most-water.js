/**
 * https://leetcode.com/problems/container-with-most-water/
 * https://youtu.be/UuiTKBwPgAo
 * 
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {

    let maxArea = 0;
    let leftPtr = 0;
    let rightPtr = height.length - 1;

    do {
        const leftHeight = height[leftPtr];
        const righHeight = height[rightPtr];

        const y = Math.min(leftHeight, righHeight);
        const x = rightPtr - leftPtr;

        const area = x * y;
        if (area > maxArea)
            maxArea = area;

        if (leftHeight < righHeight)
            leftPtr++;
        else
            rightPtr--;

    } while (leftPtr < rightPtr);

    return maxArea;
};

module.exports.maxArea = maxArea;