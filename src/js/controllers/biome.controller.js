import grids from "./../../data/grid.json";
import BiomeView from "../views/biome.view";

export default class BiomeController {
    constructor(parentController) {
        this.parentController = parentController;
        this.grids = [];

        for(const grid of grids) {
            this.grids.push(grid.name);
        }
        this.currentBiome = this.grids[0];
        this.view = new BiomeView(this);
    }

    get currentBiome() {
        return this._currentBiome;
    }
    
    set currentBiome(val) {
        document.body.className = `biome--${val}`;
        this._currentBiome = val;
    }
}