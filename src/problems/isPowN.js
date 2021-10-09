function isPow(x, n) {
    if (n === 0) return;

    if (x === 0) return false;
    if (x === 1) return true;
    return (x % n === 0) && isPow(parseInt(x / n), n);
}

console.log(isPow(20,2));
console.log(isPow(21,3));
console.log(isPow(16,2));
console.log(isPow(81,3));
console.log(isPow(9,81));
console.log(isPow(0,3));
console.log(isPow(3,0));
console.log(isPow(64,4));
