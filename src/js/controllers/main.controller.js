import MonsterView from "./../views/monster.view";

import MonsterConfiguratorController from "./monster-configurator.controller";
import BiomeController from "./biome.controller";
import GridController from "./grid.controller";
import InfoController from "./info.controller";

export default class MainController {
    constructor() {
        window.customElements.define('monster-component', MonsterView);

        this.infoController = new InfoController(this);
        this.monsterConfiguratorController = new MonsterConfiguratorController(this);
        this.biomeController = new BiomeController(this);
        this.gridController = new GridController(this);
    }
}