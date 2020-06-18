export default class Monster {
    constructor(data) {
        this.name = data.name || '';
        this.type = data.type || 'wind';
        this.armsType = data.armsType || 'claws';
        this.amtArms = data.amtArms || 2;
        this.amtLegs = data.amtLegs || 4;
        this.amtEyes = data.amtEyes || 2;
        this.coat = data.coat || 'hair';
        this.canFly = data.canFly === false ? false : true
        this.canSwim = data.canSwim || false;
        this.color = data.color || 'blue';
    }

    get info() {
        return {
            name: this.name,
            type: this.type,
            armsType: this.armsType,
            amtArms: this.amtArms,
            amtLegs: this.amtLegs,
            amtEyes: this.amtEyes,
            coat: this.coat,
            canFly: this.canFly, 
            canSwim: this.canSwim,
            color: this.color,
        }
    }

    get name() {
        return this._name;
    }
    set name(val) {
        this._name = val;
    }

    get type() {
        return this._type;
    }
    set type(val) {
        this._type = val;
    }

    get armsType() {
        return this._armsType;
    }
    set armsType(val) {
        this._armsType = val;
    }

    get amtArms() {
        return this._amtArms;
    }
    set amtArms(val) {
        this._amtArms = val;
    }

    get amtLegs() {
        return this._amtLegs;
    }
    set amtLegs(val) {
        this._amtLegs = val;
    }

    get amtEyes() {
        return this._amtEyes;
    }
    set amtEyes(val) {
        this._amtEyes = val;
    }

    get coat() {
        return this._coat;
    }
    set coat(val) {
        this._coat = val;
    }

    get canFly() {
        return this._canFly;
    }
    set canFly(val) {
        this._canFly = val;
    }

    get canSwim() {
        return this._canSwim;
    }
    set canSwim(val) {
        this._canSwim = val;
    }

    get color() {
        return this._color;
    }
    set color(val) {
        this._color = val;
    }

    setProp(prop, val) {
        this[prop] = val;
    } 

    getProp(prop) {
        return this[prop];
    }
}