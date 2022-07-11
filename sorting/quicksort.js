/**
 * Sort an array using the quicksort algorithm.
 * 
 * Time Complexity  (best):     O(n log(n))
 * Time Complexity  (average):  O(n log(n))
 * Time Complexity  (wors):     O(n^2)
 * 
 * Space Complexity (worst):    O(log(n))
 * 
 * @param {*} array 
 * @returns 
 */
const sort = function (array = []) {
    if (array.length == 0)
        return;

    _sort(array, 0, array.length - 1);
}

const _sort = function (array = [], startIndex, endIndex) {

    if (startIndex >= endIndex)
        return; // Array of 1 element

    const pivotIndex = endIndex;
    const pivot = array[pivotIndex];
    let leftPointer = startIndex;
    let rightPointer = endIndex;

    while (leftPointer != rightPointer) {
        // Move the left pointer to the right until we find a number greater than the pivot
        // Or the pointers meet
        while (array[leftPointer] <= pivot && leftPointer != rightPointer) {
            leftPointer++;
        }

        // Move the right pointer to the left until we find a number less than the pivot
        // Or the pointers meet
        while (array[rightPointer] >= pivot && leftPointer != rightPointer) {
            rightPointer--;
        }

        // Swap the items at the pointers
        _swap(array, leftPointer, rightPointer);
    }

    // Swap the pivot with the item at the left pointer
    _swap(array, leftPointer, pivotIndex);

    // Partition the array into 2 sub-arrays and recursevely repeat the process
    _sort(array, startIndex, leftPointer - 1);
    _sort(array, rightPointer + 1, endIndex);
}

const _swap = function (array, index1, index2) {
    if (index1 == index2)
        return;

    const item1 = array[index1];
    array[index1] = array[index2];
    array[index2] = item1;
}

module.exports.sort = sort;