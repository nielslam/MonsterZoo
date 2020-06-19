import GridView from "../views/grid.view";
import Grid from "../models/grid.model";

export default class GridController {
    constructor(parentController) {
        this.parentController = parentController;
        this.grid = new Grid();
        this.view = new GridView(this);
        this.init();
    }

    init() {
        this.biome = this.parentController.biomeController.currentBiome;
        this.view.render();
    }

    get grid() {
        return this._grid;
    }
    set grid(grid) {
        this._grid = grid;
    }
}