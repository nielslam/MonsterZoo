import MonsterConfiguratorView from "../views/monster-configurator.view";
import Monster from "../models/monster.model";

export default class MonsterConfiguratorController {
    constructor() {
        new MonsterConfiguratorView(this);
        
        //create default monster
        this.monster = new Monster({
            name: "",
            type: "wind",
            armsType: "claws",
            amtArms: "2",
            amtLegs: "4",
            amtEyes: "2",
            coat: "hair",
            canFly: false, 
            canSwim: false,
            color: "orange",
        })

        console.log(this.monster);
    }
}