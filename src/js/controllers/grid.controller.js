import GridView from "../views/grid.view";
import Grid from "../models/grid.model";
import Monster from "../models/monster.model";

export default class GridController {
    constructor(parentController) {
        this.parentController = parentController;
        this.grid = new Grid();
        this.view = new GridView(this);
        this.init();
    }

    init() {
        this.grid = new Grid();
        this.biome = this.parentController.biomeController.currentBiome;
        this.view.render();
    }

    getGrid() {
        if(localStorage.getItem(this.biome)) {
            const result = JSON.parse(localStorage.getItem(this.biome));
            const fields = {};
            for(const x in result) {
                fields[x] = new Monster({
                    amtArms: result[x]._amtArms,
                    amtEyes: result[x]._amtEyes,
                    amtLegs: result[x]._amtLegs,
                    armsType: result[x]._armsType,
                    canFly: result[x]._canFly,
                    canSwim: result[x]._canSwim,
                    coat: result[x]._coat,
                    color: result[x]._color,
                    name: result[x]._name,
                    type: result[x]._type,
                });
            }
            this.grid.fields = fields;
        };
        return this.grid;
    }

    get grid() {
        return this._grid;
    }
    set grid(grid) {
        this._grid = grid;
    }

    saveGrid() {
        localStorage.setItem(this.biome, JSON.stringify(this.grid.fields));
    }
}