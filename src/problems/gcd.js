function gcd(x, y) {
    if (x === y || x === 0 || y === 0) {
        return x || y;
    }

    let max = x > y ? x : y;
    let min = x < y ? x : y;

    return gcd (min, max - min);
}

console.log(gcd(24,40));
console.log(gcd(24,12));
console.log(gcd(3,11));
console.log(gcd(20,20));
console.log(gcd(11,0));