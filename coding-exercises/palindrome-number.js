/**
 * https://leetcode.com/problems/palindrome-number/
 * https://youtu.be/yubRKwixN-U
 * 
 * @param {*} x 
 * @returns 
 */
const isPalindrome = function (x) {
    if (x < 0)
        return false;

    if (x <= 9)
        return true;

    let r = x;
    const digits = [];
    while (r > 0) {
        digits.unshift(r % 10); // This gives the right-most digit
        r = Math.floor(r / 10);
    }

    for (let i = 0; i < digits.length / 2; i++) {
        if (digits[i] !== digits[digits.length - i - 1])
            return false;
    }

    return true;
};

module.exports.isPalindrome = isPalindrome;