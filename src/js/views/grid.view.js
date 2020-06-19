import grids from "./../../data/grid.json";

export default class GridView {
    constructor(controller) {
        this.controller = controller;
        this.$main = document.querySelector('.main');
        this.$grid = this.$main.querySelector('.zoo-grid');
    }

    render() {
        this.$grid.innerHTML = '';
        this.gridSettings = grids.find(obj => {
            return obj.name == this.controller.biome;
        });

        for(const x in this.gridSettings.grid) {
            for(const y in this.gridSettings.grid[x].columns) {
                this.addBlock({
                    obstacle: this.gridSettings.grid[x].columns[y] == 1,
                    item: this.controller.grid.getPos(x,y)
                });
            }
        }
    }

    addBlock(block) {
        const node = require(`./templates/grid-block.template`);
        this.$grid.insertAdjacentHTML('beforeend', node(block));
    }
}