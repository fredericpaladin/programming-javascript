/**
 * https://leetcode.com/problems/climbing-stairs/
 * https://youtu.be/Y0lT9Fck7qI
 * 
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {

    // There are 3 bases cases: 
    //   1) dp[n - 1] > 0 steps 
    //   2) dp[n - 2] > 1 step
    //   3) dp[n - 3] > 2 steps

    // Bottom-up dynamic programming: we start at the end 'n' and move to index 0
    let currentStep = 0;
    let previousStep = 1;
    let totalSteps = 0;

    for (let i = n - 1; i >= 0; i--) {
        totalSteps = currentStep + previousStep;
        currentStep = previousStep;
        previousStep = totalSteps;
    }

    return totalSteps;
};

module.exports.climbStairs = climbStairs;