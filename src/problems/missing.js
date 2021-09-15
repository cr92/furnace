function findMissing(arr) {
    const max = arr.length + 1;
    const idealSum = (max * (max + 1)) / 2;

    const realSum = arr.reduce((x, y) => x + y, 0);
    return idealSum - realSum;
}

const arr = [2, 3, 1, 5, 4];

console.log(findMissing(arr));