/**
 * https://leetcode.com/problems/contains-duplicate/
 */

var containsDuplicate = function (nums) {
    let dict = {};

    for (let num of nums) {
        if (!dict[num]) {
            dict[num] = 1;
        } else {
            dict[num] += 1;
            if (dict[num] >= 2) {
                return true;
            }
        }
    }
    return false;
};

console.log(containsDuplicate([1,2,3,5,3]));
console.log(containsDuplicate([1,2,3,5]));
