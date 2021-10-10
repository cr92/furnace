class MaxHeap {
    constructor () {
        this.list = [0];
        this.size = this.list.length - 1;
    }
    create (arr) {
        for (let i = 0; i < arr.length; i++) {
            this.insert(arr[i]);
        }
    }
    insert(x) {
        this.list.push(x);
        this.size = this.list.length - 1;
        let xIndex = this.size ;

        while (true) {
            let pIndex = Math.floor(xIndex / 2);
            if (this.list[xIndex] <= this.list[pIndex] || pIndex === 0) {
                break;
            }
            let tmp = this.list[xIndex];
            this.list[xIndex] = this.list[pIndex];
            this.list[pIndex] = tmp;
            xIndex = pIndex;
        }

    }
    getMax() {
        return this.list[1];
    }
    delMax() {
        let max = this.getMax();
        this.list[1] = this.list.pop();
        let index = 1;
        let val = this.list[1];
        while (true) {
            let lcIndex = index * 2;
            let rcIndex = lcIndex + 1;
            let lc = this.list[lcIndex];
            let rc = this.list[rcIndex];

            if (!lc && !rc) break;
            if ((val > lc) && (val > rc)) break;
            
            let indexToSwap = (rc || 0) > (lc || 0) ? rcIndex : lcIndex;

            let tmp = this.list[index];
            this.list[index] = this.list[indexToSwap];
            this.list[indexToSwap] = tmp;
            index = indexToSwap;

        }
        return max;
    }
}

let m = new MaxHeap();
m.create([1,2,3,4,6,9]);
console.log(m);

m.insert(60);
console.log(m.getMax())
console.log(m);
console.log('------------------------')

m.insert(100);
console.log(m.getMax())
console.log(m);
console.log('------------------------')

m.insert(40);
console.log(m.getMax())
console.log(m);
console.log('------------------------')

m.insert(200);
console.log(m.getMax())
console.log(m);
console.log('------------------------')

m.insert(10);
console.log(m.getMax())
console.log(m);
console.log('------------------------')

m.insert(20);
console.log(m.getMax())
console.log(m);
console.log('------------------------')

m.delMax();
console.log(m.getMax())
console.log(m);
console.log('************************')

m.delMax();
console.log(m.getMax())
console.log(m);
console.log('************************')

m.delMax();
console.log(m.getMax())
console.log(m);
console.log('************************')

m.delMax();
console.log(m.getMax())
console.log(m);
console.log('************************')

m.insert(200);
console.log(m.getMax())
console.log(m);
console.log('------------------------')


