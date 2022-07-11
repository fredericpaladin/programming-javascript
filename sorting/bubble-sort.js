/**
 * Sort an array using the bubble sort algorithm.
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

    let hasSwapped = false;
    do {
        hasSwapped = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] <= array[i + 1]) {
                continue;
            }

            // This flags that something was swapped, therefore the array was not sorted
            hasSwapped = true;

            // Swap the items
            const temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
        }
    } while (hasSwapped);
}

module.exports.sort = sort;