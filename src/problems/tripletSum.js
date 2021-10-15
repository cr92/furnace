function tripletSum(arr, sum) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let currSum = sum - arr[i];
        let map = {};

        for (let j = i + 1; j < len; j++) {
            console.log(map);
            if (arr[currSum - arr[j]]) {
                return [arr[i], arr[j], currSum - arr[j]];
            }
            map[arr[j]] = 1;
        }
    }

    return [];
}

console.log(tripletSum([1, 4, 45, 6, 10, 8], 22));