function merge(arrX, arrY) {
    let merged = [];

    const lenX = arrX.length;
    const lenY = arrY.length;

    let ix = 0;
    let iy = 0;

    while (ix < lenX || iy < lenY) {

        let x, y;

        if (isNaN(arrX[ix])) {
            x = Number.POSITIVE_INFINITY;
        } else {
            x = arrX[ix];
        }

        if (isNaN(arrY[iy])) {
            y = Number.POSITIVE_INFINITY;
        } else {
            y = arrY[iy];
        }

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

module.exports = {
    merge
}