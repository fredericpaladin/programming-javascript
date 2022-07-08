/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/
 * https://youtu.be/wiGpQwVHdE0
 * 
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {

    let hashSet = {};
    let subArray = [];
    let longest = 0;

    const chars = s.split('');
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];

        if (hashSet[char] !== undefined) {
            // Found a duplicate: start removing all characters from the right until we find the same char

            let rem;

            do {
                rem = subArray.shift(); // Remove from the right
                delete hashSet[rem]; // Also remove it from the set
            } while (rem !== char && subArray.length > 0);
        }

        // Flag that this char was used
        hashSet[char] = true;

        // Add to the current substring
        subArray.push(char);

        // Check the length of the substring and set the longest accordingly
        if (subArray.length > longest) {
            longest = subArray.length;
        }
    }

    /*
    
    OLD IMPLEMENTATION (INEFFICIENT)
    
    let hashMap = {};
    let currentSub = [];
    let longest = 0;
    
    const chars = s.split(''); // Make sure to pass '' otherwise split() doesn't work!
    
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        
        if (hashMap[char] !== undefined) {
            // Found a duplicate: reset the map and the current substring
            i = hashMap[char]; // Note: we set i back to the first occurrence, because then 'i++' is applied
            
            hashMap = {};
            currentSub = [];
            continue;
        }
        
        // Flag that this char was used
        hashMap[char] = i;
        
        // Add to the current substring
        currentSub.push(char);
        
        // Check the length of the substring and set the longest accordingly
        if (currentSub.length > longest) {
            longest = currentSub.length;
        }
    }
    */

    return longest;
};

module.exports.lengthOfLongestSubstring = lengthOfLongestSubstring;