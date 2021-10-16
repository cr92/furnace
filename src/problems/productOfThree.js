const {
    MinHeap
} = require('../classes/minHeap');

function productOfThree(A) {
    let products = [];
    let product = 1;

    let minHeap = new MinHeap();

    for (let i = 0; i < 3; i++) {
        minHeap.insert(A[i]);
        product *= A[i];
        if (minHeap.size() < 3) {
            products[i] = -1;
        } else {
            products[i] = product;
        }
    }

    for (let i = 3; i < A.length; i++) {
        let min = minHeap.getMin();
        if (A[i] > min) {
            minHeap.remove();
            minHeap.insert(A[i]);
            product = (product / min) * A[i];
        }
        products[i] = product;
    }

    return products;
}

console.log(productOfThree([11, 5, 6, 2, 8, 10]));
console.log(productOfThree([1, 2, 3, 4, 5]));
console.log(productOfThree([10, 2, 13, 4]));