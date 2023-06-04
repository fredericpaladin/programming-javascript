

/**
 * https://leetcode.com/problems/second-largest-digit-in-a-string/
 * 
 * @param {string} s
 * @return {number}
 */
const secondHighest = function (s) {

    let highest = -1;
    let secondHighest = -1;

    for (let i = 0; i < s.length; i++) {
        const ascii = s.charCodeAt(i);
        if (ascii < 48 || ascii > 57) {
            continue;
        }

        const num = ascii - 48;

        if (num > highest) {
            secondHighest = highest;
            highest = num;
        } else if (num > secondHighest && num < highest) {
            secondHighest = num;
        }
    }

    return secondHighest;
};

module.exports.secondHighest = secondHighest;