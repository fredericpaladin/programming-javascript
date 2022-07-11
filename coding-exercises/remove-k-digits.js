/**
 * https://leetcode.com/problems/remove-k-digits/
 * https://youtu.be/cFabMOnJaq0
 * 
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const removeKdigits = function (num, k) {

    const stack = [];
    let i = 0;
    let remK = k;

    while (remK > 0) {
        const val = num.charAt(i);
        if (stack.length == 0 || stack[stack.length - 1] <= val) {
            // Add the elements into the stack but only in increasing order
            stack.push(val);
            i++;
        } else {
            // Pop the element from the stack
            // Note: don't increase 'i' because we will continue to pop
            // for as long as the latest value is greater than 'val'
            stack.pop();
            remK--;
        }
    }

    // Add the remaining element to the stack: this will be the final number
    while (i < num.length) {
        const val = num.charAt(i);
        stack.push(val);
        i++;
    }

    // Remove any leading zero
    while (stack.length > 0 && stack[0] == '0') {
        stack.shift();
    }

    return stack.length == 0 ? "0" : stack.join('');
};

module.exports.removeKdigits = removeKdigits;