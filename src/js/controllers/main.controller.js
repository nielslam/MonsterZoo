import MonsterConfiguratorController from "./monster-configurator.controller";
import Grid from "../models/grid.model";
export default class MainController {
    constructor(){
       new MonsterConfiguratorController();

       this.grid = new Grid();
    }
}