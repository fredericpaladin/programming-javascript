/**
 * Sort an array using the insertion algorithm.
 * 
 * Time Complexity  (best):     O(n)
 * Time Complexity  (average):  O(n^2)
 * Time Complexity  (wors):     O(n^2)
 * 
 * Space Complexity (worst):    O(1)
 * 
 * @param {*} array 
 * @returns 
 */
const sort = function (array = []) {
    if (array.length == 0)
        return;

    for (let i = 0; i < array.length; i++) {

        // Extract the current value into a temp variable
        const value = array[i];

        let ptr = i - 1; // 1 position to the right of index

        // Loop backwards through the element of the array
        // and start shifting to the right each value
        // that is greater than to the current value,
        // until we find a value that is less than the current value
        // or we reached the beginning of the array
        while (ptr >= 0 && array[ptr] > value) {

            // Move the value to the right by 1 position to the left
            array[ptr + 1] = array[ptr];

            // Move 1 to the left
            ptr--;
        }

        // Reposition the value
        array[ptr + 1] = value;
    }
}

module.exports.sort = sort;