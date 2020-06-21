export default class Grid {
    constructor() {
        this.size = 10;
        this.fields = {};
    } 

    set fields(fields) {
        this._fields = fields;
    }

    get fields() {
        return this._fields;
    }

    setPos(x, y, block){
        this.fields[parseInt(this.getFlatPos(x, y))] = block;
    }

    getPos(x, y) {
        return this.fields[parseInt(this.getFlatPos(x, y))];
    }

    clearFlatPos(pos) {
        delete this.fields[pos];
    }

    setFlatPos(pos, block) {
        this.fields[parseInt(pos)] = block;
    }

    getFlatPos(x, y) {
        return ((parseInt(x) * this.size) + parseInt(y));
    }
}