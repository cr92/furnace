function search(arr = [], val) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = parseInt((start + end) / 2);
        let midVal = arr[mid];
        if (val === midVal) {
            return mid;
        }

        if (val < midVal) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
}

let arr = [3, 5, 9, 11, 13, 17, 23, 29, 36, 38, 44];

for (let i = 0; i <= 50; i++) {
    let out = search(arr, i);
    if (out !== -1) {
        console.log(`found ${i} @ index ${out}`);
    } else {
        console.log(`${i} not found`);
    }
}