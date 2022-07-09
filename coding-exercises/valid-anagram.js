/**
 * https://leetcode.com/problems/valid-anagram/
 * https://youtu.be/3OamzN90kPg
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
    const sSet = {};
    const tSet = {};

    // Use the longest string length for the loop
    const length = Math.max(s.length, t.length);
    for (let i = 0; i < length; i++) {

        if (i < s.length) {
            const sChar = s.charAt(i).toLowerCase();
            if (sChar !== ' ') {
                if (sSet[sChar] === undefined) {
                    sSet[sChar] = 0; // First occurrence
                }

                sSet[sChar]++; // Increase the counter
            }
        }

        if (i < t.length) {
            const tChar = t.charAt(i).toLowerCase();
            if (tChar !== ' ') {
                if (tSet[tChar] === undefined) {
                    tSet[tChar] = 0; // First occurrence
                }

                tSet[tChar]++; // Increase the counter
            }
        }
    }

    const sKeys = Object.keys(sSet);
    const tKeys = Object.keys(tSet);

    if (sKeys.length !== tKeys.length) {
        return false;
    }

    for (const key of sKeys) {
        if (sSet[key] !== tSet[key]) {
            return false;
        }
    }

    return true;
};

module.exports.isAnagram = isAnagram;