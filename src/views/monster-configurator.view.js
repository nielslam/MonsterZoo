import monsterConfiguratorSettings from '../data/monster-configurator.json';

export default class MonsterConfiguratorView {
    constructor(){
        this.$element = document.getElementById("monster-configurator");
        this.$fields = this.$element.querySelector('.monster-configurator__form');
        this.renderFields();
    }

    renderFields() {
        for(const x of monsterConfiguratorSettings.fields) {
            this.renderField(x);
        }
    }

    renderField(field) {
        const node = this.getTypeTemplate(field.type);
        this.$fields.insertAdjacentHTML('beforeend', node(field));
    }

    getTypeTemplate(type) {
        return require(`./templates/inputs/${type}-input.template`);
    }
}