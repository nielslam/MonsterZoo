import grids from "./../../data/grid.json";
import BiomeView from "../views/biome.view";
import WeatherService from "./../services/weather.service";

export default class BiomeController {
    constructor(parentController) {
        this.weatherService = new WeatherService();
        
        this.parentController = parentController;
        this.grids = [];

        this.weather = {};
        for(const grid of grids) {
            this.grids.push(grid.name);
        }
        this.currentBiome = this.grids[0];
        this.fetchWeather();
        this.view = new BiomeView(this);
    }

    fetchWeather() {
        const settings = grids.find(obj => {
            return obj.name == this.currentBiome;
        });
        this.weatherService.getWeather(settings.referenceCity).then(weather => {
            this.weather = weather;
            this.view.init();
        });
    }

    get currentBiome() {
        return this._currentBiome;
    }
    
    set currentBiome(val) {
        document.body.className = `biome--${val}`;
        this._currentBiome = val;
    }
}