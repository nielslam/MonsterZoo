import MonsterConfiguratorController from "./monster-configurator.controller";
import BiomeController from "./biome.controller";
import GridController from "./grid.controller";

import MonsterView from "./../views/monster.view";

export default class MainController {
    constructor() {
        window.customElements.define('monster-component', MonsterView);

        this.monsterConfiguratorController = new MonsterConfiguratorController(this);
        this.biomeController = new BiomeController(this);
        this.gridController = new GridController(this);
    }
}