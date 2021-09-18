function findCon(arr) {
    let result = [];
    if (arr.length === 0) {
        return result;
    }

    let tmp = [arr[0], arr[0]];

    for (let i = 1; i <= arr.length; i++) {
        let curr = arr[i];
        let prev = arr[i - 1];

        if (curr - prev === 1) {
            tmp[1] = curr;
        } else {
            result.push(tmp);
            tmp = [curr, curr];
        }
    }

    return result;
}

let arr = [1,2,3,4,7,8,9,11,13,19]
console.log(JSON.stringify(findCon(arr), null, 2));