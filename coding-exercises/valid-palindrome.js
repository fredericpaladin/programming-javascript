/**
 * https://leetcode.com/problems/valid-palindrome/
 * https://youtu.be/jJXJ16kPFWg
 * 
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {

    const chars = s.split('');

    let leftPtr = 0;
    let rightPtr = chars.length - 1;
    const regExp = /[a-z0-9]/;

    do {
        const left = chars[leftPtr].toLowerCase();
        const right = chars[rightPtr].toLowerCase();

        if (!regExp.test(left)) {
            // Non-alphanumeric character
            leftPtr++;
            continue;
        }

        if (!regExp.test(right)) {
            // Non-alphanumeric character
            rightPtr--;
            continue;
        }

        if (left != right) {
            return false;
        }

        leftPtr++;
        rightPtr--;
    } while (leftPtr <= rightPtr);

    return true;
};

module.exports.isPalindrome = isPalindrome;