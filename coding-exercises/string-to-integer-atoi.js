
/**
 * https://leetcode.com/problems/string-to-integer-atoi/
 * 
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
    const digits = {
        '0': true,
        '1': true,
        '2': true,
        '3': true,
        '4': true,
        '5': true,
        '6': true,
        '7': true,
        '8': true,
        '9': true
    };

    let valid = { ...digits };
    valid['-'] = true;
    valid['+'] = true;
    valid['.'] = true;

    let min = -1 * Math.pow(2, 31);
    let max = Math.pow(2, 31) - 1;

    let hasSign = false;
    let isNegative = false;
    let number = '';
    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);

        if (char == ' ') {
            if (number.length > 0) {
                // A number has already been found: stop the parsing
                break;
            }

            if (hasSign) {
                // A sign (+/-) was already found: we cannot parse this text
                number = '';
                break;
            }

            continue; // Skip white spaces
        }

        if (!valid[char]) {
            break;
        }

        if (char === '-') {
            if (number.length > 0) {
                // A number has already been found: stop the parsing
                break;
            }

            if (hasSign) {
                // A sign (+/-) was already found: we cannot parse this text
                number = '';
                break;
            }

            // Negative sign found
            hasSign = true;
            isNegative = true;
            continue;
        }

        if (char === '+') {
            if (number.length > 0) {
                // A number has already been found: stop the parsing
                break;
            }

            if (hasSign) {
                // A sign (+/-) was already found: we cannot parse this text
                number = '';
                break;
            }

            // Negative sign found
            hasSign = true;
            continue;
        }

        // Valid digit found
        number += char;
    }

    if (number.length == 0)
        return 0;

    if (isNegative)
        number = '-' + number;

    const num = Number(number);

    if (num < min)
        return min;

    if (num > max)
        return max;

    return num;
};

module.exports.myAtoi = myAtoi;