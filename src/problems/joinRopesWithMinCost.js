const {
    MinHeap
} = require('../classes/minHeap');

function joinRopesWithMinCost(A) {
    let cost = 0;
    let heap = new MinHeap();

    for (let i = 0; i < A.length; i++) {
        heap.insert(A[i]);
    }

    while (true) {
        let min = heap.getMin();
        heap.remove();
        let nexMin = heap.getMin();

        heap.remove();

        if (!min || !nexMin) return cost;

        cost += min + nexMin;
        heap.insert(min + nexMin);
    }
}

console.log(joinRopesWithMinCost([6, 19, 9, 14, 17, 16, 7, 2, 14, 4, 3]));
console.log(joinRopesWithMinCost([1, 18]));