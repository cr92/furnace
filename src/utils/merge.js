function merge(arrX, arrY) {
    let merged = [];

    const lenX = arrX.length;
    const lenY = arrY.length;

    let ix = 0;
    let iy = 0;

    while (ix < lenX || iy < lenY) {
        let x = arrX[ix];
        let y = arrY[iy];

        if (x <= y) {
            merged.push(x);
            ix++;
        } else {
            merged.push(y);
            iy++
        }
    }

    return merged;
}

const arrX = [2, 11, 13, 17];
const arrY = [3, 5, 7, 13, 14, 17, 19, 23];

console.log(merge(arrX, arrY));