export default class Grid {
    constructor(biome) {
        this.size = 10;
        this.fields = new Array((this.size*this.size) - 1);
    }

    setPos(x, y, block){
        this.fields[this.getFlatPos(x, y)] = block;
    }

    getPos(x, y) {
        return this.fields[this.getFlatPos(x, y)];
    }

    getFlatPos(x, y) {
        return ((y * this.size) + x);
    }
}