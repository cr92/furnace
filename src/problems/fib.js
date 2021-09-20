let memo = {
    0: 1,
    1: 1,
    2: 1
};

function fib(num) {
    if (!memo[num]) {
        memo[num] = fib(num - 1) + fib(num - 2);
    }
    return memo[num];
}

console.log(fib(90));