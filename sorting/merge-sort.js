/**
 * Sort an array using the merge sort algorithm.
 * 
 * Time Complexity  (best):     O(n log(n))
 * Time Complexity  (average):  O(n log(n))
 * Time Complexity  (wors):     O(n log(n))
 * 
 * Space Complexity (worst):    O(n)
 * 
 * @param {*} array 
 * @returns 
 */
const sort = function (array = []) {
    const length = array.length;
    if (length < 2) {
        return;
    }

    const middle = Math.floor(length / 2);
    const leftArray = [];
    for (let i = 0; i < middle; i++) {
        leftArray.push(array[i]);
    }

    const rightArray = [];
    for (let i = middle; i < array.length; i++) {
        rightArray.push(array[i]);
    }

    sort(leftArray);
    sort(rightArray);

    _merge(array, leftArray, rightArray);
}

const _merge = function (array, leftArray, rightArray) {
    let a = 0;
    let l = 0;
    let r = 0;

    // Merge the values from left and right subarray by comparing their sorted values
    while (l < leftArray.length && r < rightArray.length) {
        if (leftArray[l] <= rightArray[r]) {
            array[a] = leftArray[l];
            l++;
        } else {
            array[a] = rightArray[r];
            r++;
        }
        a++;
    }

    // Add all the remaining values from the left subarray (if any)
    while (l < leftArray.length) {
        array[a] = leftArray[l];
        l++;
        a++;
    }

    // Add all the remaining values from the right  subarray (if any)
    while (r < rightArray.length) {
        array[a] = rightArray[r];
        r++;
        a++;
    }
}

module.exports.sort = sort;