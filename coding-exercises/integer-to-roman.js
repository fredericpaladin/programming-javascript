/**
 * https://leetcode.com/problems/integer-to-roman/
 * https://youtu.be/ohBNdSJyLh8
 * 
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 
 * 1 <= num <= 3999
 * 
* @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {

    let divisor = 1000;
    let quotient;
    let remainder = num;
    let roman = '';

    do {

        quotient = Math.floor(remainder / divisor);

        if (divisor == 1000) {
            roman += subRoman("M", "", "", quotient);
        } else if (divisor == 100) {
            roman += subRoman("C", "D", "M", quotient);
        } else if (divisor == 10) {
            roman += subRoman("X", "L", "C", quotient);
        } else {
            roman += subRoman("I", "V", "X", quotient);
        }

        remainder = remainder % divisor;
        divisor = Math.floor(divisor / 10);
    } while (divisor > 0);

    return roman;
};

const subRoman = function (char1, char2, char3, quotient) {
    let roman = '';

    if (quotient <= 3)
        roman += char1.repeat(quotient);
    else if (quotient == 4)
        roman += char1;

    if (quotient >= 4 && quotient <= 8)
        roman += char2;

    if (quotient >= 6 && quotient <= 8)
        roman += char1.repeat(quotient - 5);
    else if (quotient == 9)
        roman += char1 + char3;

    return roman;
}

module.exports.intToRoman = intToRoman;