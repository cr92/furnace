/**
 * https://leetcode.com/problems/climbing-stairs/
 */
 var climbStairs = function(n) {
    let count = [0, 1, 2];
    for (let i = 3; i <= n; i++) {
        count[i] = count[i - 1] + count[i - 2];
    }
    return count[n];
};

console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(9));
console.log(climbStairs(45));
