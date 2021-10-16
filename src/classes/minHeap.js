class MinHeap {
    constructor () {
        this.list = [null];
    }
    insert(x) {
        this.list.push(x);
        let cIndex = this.list.length - 1;

        while (true) {
            let pIndex = Math.floor(cIndex / 2);

            if (cIndex === 0 || this.list[pIndex] <= this.list[cIndex]) {
                return;
            }
            if (this.list[pIndex] > this.list[cIndex]) {
                let tmp = this.list[pIndex];
                this.list[pIndex] = this.list[cIndex];
                this.list[cIndex] = tmp;
                cIndex = pIndex;
            }
        }
    }
    getMin() {
        return this.list[1];
    }
    remove() {
        if (this.list.length === 1) return;
        let val = this.list.pop();
        
        if (this.list.length === 1) return val;

        let pIndex = 1;
        this.list[pIndex] = val;
        
        while (true) {
            let lcIndex = 2 * pIndex;
            let rcIndex = lcIndex + 1;
            
            let lc = this.list[lcIndex];
            let rc = this.list[rcIndex];
            
            if (!lc && !rc) return;
            if ((val <= (lc || Number.POSITIVE_INFINITY)) && (val <= (rc || Number.POSITIVE_INFINITY))) return;
            
            let sIndex = rc < lc ? rcIndex : lcIndex;
            let tmp = this.list[sIndex];
            this.list[sIndex] = this.list[pIndex];
            this.list[pIndex] = tmp;
            pIndex = sIndex;
        }
    }
}

module.exports = {
    MinHeap
}