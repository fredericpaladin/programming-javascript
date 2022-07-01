/**
 * Calculate the Fibonacci number.
 * 
 * The Fibonacci sequence is a sequence of numbers,
 * where each number is the sum of the two preceding ones.
 * 
 *  F{n} = F{n-1} + F{n-2}
 * 
 * Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
 * 
 * @param {*} num 
 */
const calculate = function (num) {
    if (num < 2)
        return num;
    return calculate(num - 1) + calculate(num - 2);
}

/**
 * Calculate the Fibonacci number.
 * This function implements memoization.
 * 
 * The Fibonacci sequence is a sequence of numbers,
 * where each number is the sum of the two preceding ones.
 * 
 *  F{n} = F{n-1} + F{n-2}
 * 
 * Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
 * 
 * @param {*} num 
 */
const calculateMemoized = function (num, previousValues = []) {
    if (previousValues[num] != null)
        return previousValues[num];

    let seq;
    if (num <= 1)
        seq = 1;
    else
        seq = calculate(num - 1) + calculate(num - 2);

    previousValues[num] = seq; // Memoize the value
    return seq;
}

/**
 * Get the Fibonacci sequence.
 * 
 * The Fibonacci sequence is a sequence of numbers,
 * where each number is the sum of the two preceding ones.
 * 
 *  F{n} = F{n-1} + F{n-2}
 * 
 * Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
 * 
 * @param {*} num 
 */
const getSequence = function (num) {
    const sequence = [];
    for (let i = 1; i <= num; i++)
        sequence.push(calculate(i));

    return sequence;
}

module.exports.calculate = calculate;
module.exports.calculateMemoized = calculateMemoized;
module.exports.getSequence = getSequence;