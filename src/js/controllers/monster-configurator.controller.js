import MonsterConfiguratorView from "../views/monster-configurator.view";
import Monster from "../models/monster.model";

export default class MonsterConfiguratorController {
    constructor() {
        //create default monster
        this.monster = new Monster({});
        this.view = new MonsterConfiguratorView(this);
    }

    get monster() {
        return this._monster;
    }
    set monster(monster) {
        this._monster = monster;
    }
}