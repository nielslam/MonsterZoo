import MonsterConfiguratorController from "./monster-configurator.controller";
import BiomeController from "./biome.controller";
import GridController from "./grid.controller";

export default class MainController {
    constructor() {
        this.monsterConfiguratorController = new MonsterConfiguratorController(this);
        this.biomeController = new BiomeController(this);
        this.gridController = new GridController(this);
        
    }
}