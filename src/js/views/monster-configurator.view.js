import monsterConfiguratorSettings from './../../data/monster-configurator.json';
import Monster from '../models/monster.model';

export default class MonsterConfiguratorView {
    constructor(controller) {
        this.controller = controller;
        this.fields = JSON.parse(JSON.stringify(monsterConfiguratorSettings.fields));
        this.$main = document.getElementById("monster-configurator");
        this.$form = this.$main.querySelector('.monster-configurator__form');
        this.$fields = this.$form.querySelectorAll('.monster-configurator__input');
        this.$thumbnail = this.$main.querySelector('.monster-configurator__thumbnail');
        this.init();
    }

    init() {
        this.fields = JSON.parse(JSON.stringify(monsterConfiguratorSettings.fields));
        this.prepareFields();
        this.renderFields();
        this.renderThumbnail();
        this.$main.addEventListener('dragover', e => {e.preventDefault()});
        this.$main.addEventListener('dragenter', e => {e.preventDefault()});
        this.$main.addEventListener('drop', e => {
            this.controller.monster = new Monster(JSON.parse(e.dataTransfer.getData('monster')));
            this.init();
        });
    }

    prepareFields() {
        for(const field of this.fields) {
            if(field.type == 'checkbox' && field.rules !== undefined) {
                field.disabled = true;
                for(const rule of field.rules) {
                    if(this.checkRule(rule, this.controller.monster)) { 
                        field.disabled = false;
                        break; 
                    }
                }
                if(field.disabled) {
                    this.controller.monster.setProp(field.name, false);
                }
            }

            if(field.type == 'select') {
                for(const option of field.options) {
                    if(option.rules) {
                        option.hidden = true;
                        for(const rule of option.rules) {
                            if(this.checkRule(rule, this.controller.monster)) { 
                                option.hidden = false;
                                break; 
                            }
                        }
                        
                    }
                }
                field.options = field.options.filter(option => !option.hidden);

                if(!field.options.find(opt => opt.value == this.controller.monster.getProp(field.name))){
                    this.controller.monster.setProp(field.name, field.options[0].value);
                }
            }
            field.value = this.controller.monster.getProp(field.name);
        }
    }

    checkRule(rule, monster) {
        let applies = [];
        for(var prop in rule) {
            applies.push(rule[prop].includes(monster.getProp(prop)));
        }
        return !applies.includes(false);
    }

    renderFields() {
        this.$form.innerHTML = '';
        for(const field of this.fields) {
            this.renderField(field);
        }
        for(const field of this.$form.querySelectorAll('.monster-configurator__input')) {
            field.addEventListener("change", () => {
                this.onFieldChange();
            });
        }
    }

    renderField(field) {
        const node = this.getTypeTemplate(field.type);
        this.$form.insertAdjacentHTML('beforeend', node(field));
    }

    getTypeTemplate(type) {
        return require(`./templates/monster-configurator-inputs/${type}-input.template`);
    }

    onFieldChange() {
        this.controller.monster = this.formMonster;
        this.init();
    }

    renderThumbnail() {
        this.$thumbnail.innerHTML = '';
        let monsterEl = document.createElement('monster-component');
        monsterEl.monster = this.formMonster;
        monsterEl.setAttribute('draggable','true');

        monsterEl.addEventListener('dragstart', e => {
            e.dataTransfer.clearData('monster');
            e.dataTransfer.setData('monster', JSON.stringify(this.formMonster.info));
        });

        this.$thumbnail.appendChild(monsterEl);
    }

    get formMonster() {
        let obj = {};
        this.$form.querySelectorAll('.monster-configurator__input').forEach((item) => {
           obj[item.id] = item.value;
        });
        this.$form.querySelectorAll('.monster-configurator__input--checkbox').forEach((item) => {
            obj[item.id] = item.checked 
         });
        return new Monster(obj);
    }
}