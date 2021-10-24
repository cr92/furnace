function aggresiveCows(A, B) {

    const sortedA = A.sort((x, y) => x - y);
    const len = sortedA.length;

    function isPossible(gap) {
        let placedCows = 1;
        let position = sortedA[0];
        for (let i = 1; i < len; i += 1) {
            if (sortedA[i] >= position + gap) {
                position = sortedA[i];
                placedCows++;
                if (placedCows >= B) {
                    return true;
                }
            }
        }
        return false;
    }

    let firstPosition = sortedA[0];
    let lastPosition = sortedA[A.length - 1];

    let minGap = 0;
    let maxGap = Math.floor((lastPosition - firstPosition) / (B - 1));

    while (maxGap >= minGap) {
        let midGap = Math.floor((maxGap + minGap) / 2);
        if (isPossible(midGap) && !isPossible(midGap + 1)) {
            return midGap;
        }

        if (!isPossible(midGap)) {
            maxGap = midGap - 1;
        } else {
            minGap = midGap + 1;
        }
    }
}

console.log(aggresiveCows([1, 2, 3, 4, 5], 3));
console.log(aggresiveCows([1, 2], 2));