const {
    merge
} = require('../utils/merge');

function mergeSort(arr) {
    let tmpArr = [...arr];

    if (tmpArr.length <= 1) {
        return tmpArr;
    }

    let midIndex = parseInt(arr.length / 2);
    let firstSortedHalf = mergeSort(tmpArr.slice(0, midIndex));
    let secondSortedHalf = mergeSort(tmpArr.slice(midIndex, arr.length));
    let merged = merge(firstSortedHalf, secondSortedHalf);
    return merged;
}

console.log(mergeSort([5, 1, 3, 6, 7, 2, 9, 4, 0, 0, 11, 13, 17, 5, 2, 7, 7, 17, 11]));