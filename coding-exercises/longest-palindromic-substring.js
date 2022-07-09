/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * https://youtu.be/XYQecbcd6_c
 * 
 * @param {string} s
 * @return {string}
 */
 const longestPalindrome = function(s) {
    
    let longest = '';
    const chars = s.split('');
    chars.forEach((char, index) => {
        
        // Odd length substrings
        let leftOdd = index - 1;
        let rightOdd = index + 1;
        let longestOdd = [char]; // for odd substrings, 1 character is a valid palindrome
        while (leftOdd >= 0 && rightOdd < chars.length) {
            if (chars[leftOdd] !== chars[rightOdd]) {
                break; // Not a palindrome: break the loop
            }

            // Palindrome
            longestOdd = chars.slice(leftOdd, rightOdd + 1);
            
            leftOdd--;
            rightOdd++;
        }

        if (longestOdd.length > longest.length) {
            longest = longestOdd.join('');
        }

        // Even length substrings
        let leftEven = index - 1;
        let rightEven = index;
        let longestEven = [];
        while (leftEven >= 0 && rightEven < chars.length) {
            if (chars[leftEven] !== chars[rightEven]) {
                break; // Not a palindrome: break the loop
            }

            // Palindrome
            longestEven = chars.slice(leftEven, rightEven + 1);
            
            leftEven--;
            rightEven++;
        }
        
        if (longestEven.length > longest.length) {
            longest = longestEven.join('');
        }
    });
    
    return longest;
};

module.exports.longestPalindrome = longestPalindrome;