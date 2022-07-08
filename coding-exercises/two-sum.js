/**
 * https://leetcode.com/problems/two-sum/
 * https://youtu.be/KLlXCFG5TnA
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 const twoSum = function(nums, target) {
    
    const map = {};
    
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        const diff = target - val;
        if (map[diff] != undefined)
            return [map[diff], i];
                    
        map[val] = i;
    }
    
    /* OLD INEFFICIENT IMPLEMENTATION
    let p = 0;
    let next = 0;
    
    while (p < nums.length - 1) {
        for (let i = p + 1; i < nums.length; i++) {
            if (nums[p] + nums[i] == target) {
                return [p, i];
            }
        }   
        
        p++;
    }
    
    return [];
    */
};

module.exports.twoSum = twoSum;