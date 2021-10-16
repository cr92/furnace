const {
    MinHeap
} = require('../classes/minHeap');

function eatCandy(A, B) {
    let totalEaten = 0;

    let minHeap = new MinHeap();
    for (let i = 0; i < A.length; i++) {
        minHeap.insert(A[i]);
    }

    while (true) {
        if (minHeap.size() === 0) return totalEaten;

        let min = minHeap.getMin();
        minHeap.remove();

        let nextMin = minHeap.getMin();
        minHeap.remove();

        if (min > B) return totalEaten;

        let eaten = Math.floor(min / 2);
        totalEaten += eaten;
        if (nextMin === undefined) {
            return totalEaten;
        }
        minHeap.insert(nextMin + min - eaten);
    }

}


console.log(eatCandy([259, 33, 986, 194, 377, 353, 52, 675, 65, 616, 168, 800, 762, 563, 722, 388, 941, 81, 479, 348, 995, 218, 75, 673, 582, 679, 737, 281, 894, 353, 488, 291, 196, 204, 179, 958, 512, 286, 385, 154, 326, 150, 768, 785, 16, 365, 24, 988, 139, 805, 487, 681, 904, 140, 735, 636, 223, 713, 529, 151, 586, 0, 692, 606, 26, 136, 548, 723, 325, 734, 230, 470, 811, 128, 785, 531, 571, 391, 786, 289, 0, 244, 535, 197, 950, 612, 176, 473, 534], 451))