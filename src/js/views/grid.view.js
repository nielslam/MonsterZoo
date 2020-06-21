import grids from "./../../data/grid.json";
import Monster from "./../models/monster.model";

export default class GridView {
    constructor(controller) {
        this.controller = controller;
        this.$main = document.querySelector('.main');
        this.$grid = this.$main.querySelector('.zoo-grid');
    }

    render() {
        this.$grid.innerHTML = '';
        this.gridSettings = grids.find(obj => {
            return obj.name == this.controller.biome;
        });
        this._makeBorder('t');
        for(const x in this.gridSettings.grid) {
            this.addBlock({
                type: 'border',
                class: 'border--l'
            });
            for(const y in this.gridSettings.grid[x].columns) {
                this.addBlock({
                    type: this.gridSettings.grid[x].columns[y] == 1 ? 'obstacle':'droppable',
                    item: this.controller.grid.getPos(x,y),
                    dataPos: this.controller.grid.getFlatPos(x,y),
                    class: 'monster-drop',
                });
            }
            this.addBlock({
                type: 'border',
                class: 'border--r'
            });
        }
        this._makeBorder('b');
        this.renderMonsters();
        this.initDraggable();
    }

    renderMonsters() {
        for(const x in this.controller.getGrid().fields) {
            this.addMonster(document.querySelector(`[data-pos="${x}"]`), this.controller.getGrid().fields[x]);
        }
    }

    addBlock(block) {
        const node = require(`./templates/grid-block.template`);
        this.$grid.insertAdjacentHTML('beforeend', node(block));
    }

    initDraggable() {
        this.$grid.querySelectorAll('.zoo-grid__block.monster-drop').forEach(block => {
            block.addEventListener('dragover', this.dragOver);
            block.addEventListener('dragenter', this.dragEnter);
            block.addEventListener('dragleave', this.dragLeave);
            block.addEventListener('drop', e => {
                if(block.querySelector('monster-component')) {
                    console.error('blok is al bezet door een ander monster')
                }
                else if(block.querySelector('.obstacle')) {
                    console.error('Hier staat een obstakel')
                }
                else {
                    e.target.classList.remove('zoo-grid__block--drag-hover');

                    if(this.dragging) {
                        this.dragging.parentNode.classList.add('droppable');
                        this.controller.grid.clearFlatPos(this.dragging.parentNode.dataset.pos);
                        this.dragging.parentNode.removeChild(this.dragging);
                        this.dragging = undefined;
                    };

                    this.addMonster(e.target, new Monster(JSON.parse(e.dataTransfer.getData('monster'))));
                }
            });
        })
    }

    addMonster(el, monster) {
        const newMonster = document.createElement('monster-component');
        newMonster.setAttribute('draggable', 'true');
        newMonster.monster = monster;

        newMonster.addEventListener('dragstart', e => {
            e.dataTransfer.clearData('monster');
            e.dataTransfer.setData('monster', JSON.stringify(newMonster.monster.info));
            this.dragging = event.target;
        });

        newMonster.addEventListener('click', e => {
            this.controller.parentController.infoController.setMonster(monster);
        });

        el.append(newMonster);
        el.classList.remove('droppable');

        this.controller.grid.setFlatPos(el.dataset.pos, monster);        
        this.controller.saveGrid();
    }

    dragOver(e) {
        e.preventDefault();
    }
      
    dragEnter(e) {
        e.preventDefault();
        this.classList.add('zoo-grid__block--drag-hover');
    }
      
    dragLeave() {
        this.classList.remove('zoo-grid__block--drag-hover');
    }

    _makeBorder(pos) {
        for(let i = 0; i < this.gridSettings.grid[0].columns.length + 2; i++) {
            let className = '';
            switch(i) {
                case 0:
                    className = `border--${pos}l`
                    break;
                case this.gridSettings.grid[0].columns.length + 1:
                    className = `border--${pos}r`
                    break;
                default:
                    className = `border--${pos}`
            }
            this.addBlock({
                type: 'border',
                class: className
            });
        }
    }
}