import InfoView from "../views/info.view";

export default class InfoController {
    constructor(parentController) {
        this.parentController = parentController;

        this.view = new InfoView(this);
    }

    setMonster(monster) {
        console.log(monster);
        this.view.monster = monster;
    }
}