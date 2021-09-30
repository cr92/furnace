/**
 * https://leetcode.com/problems/search-insert-position/
 */

function searchInsert(nums, target) {
    let {
        length
    } = nums;
    let minId = 0;
    let maxId = length - 1;
    let midId = 0;

    while (maxId >= minId) {
        midId = parseInt((maxId + minId) / 2);
        let midVal = nums[midId];

        if (midVal === target) return midId;
        if (midVal < target) minId = midId + 1;
        if (midVal > target) maxId = midId - 1;
    }

    return target > nums[midId] ? midId + 1 : midId;
};

console.log(searchInsert([1, 3], 0));
console.log(searchInsert([1, 3, 5], 7));
console.log(searchInsert([1, 3, 5, 9], 3));
console.log(searchInsert([], 2));
console.log(searchInsert([3], 9));