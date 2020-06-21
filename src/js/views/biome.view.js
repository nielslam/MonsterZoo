export default class BiomeView {
    constructor(controller) {
        this.controller = controller;
        this.$main = document.querySelector('.biome');
    }

    
    init() {
        this.$main.innerHTML = '';
        const node = require(`./templates/biome.template`);
        this.$main.insertAdjacentHTML('beforeend', node(this.controller));

        this.$main.querySelector('.biome__toggle').addEventListener("change", e => {
            this.controller.currentBiome = e.target.value;
            this.controller.parentController.gridController.init();
            this.controller.fetchWeather();
        });
    }
}