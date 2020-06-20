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
                });
            }
            this.addBlock({
                type: 'border',
                class: 'border--r'
            });
        }
        this._makeBorder('b');
        this.initDraggable();
    }

    addBlock(block) {
        const node = require(`./templates/grid-block.template`);
        this.$grid.insertAdjacentHTML('beforeend', node(block));
    }

    initDraggable() {
        this.$grid.querySelectorAll('.zoo-grid__block.droppable').forEach(block => {
            block.addEventListener('dragover', this.dragOver);
            block.addEventListener('dragenter', this.dragEnter);
            block.addEventListener('dragleave', this.dragLeave);
            block.addEventListener('drop', (e) => {
                if(block.querySelector('monster-component')) {
                    console.error('blok is al bezet door een ander monster')
                }
                else {
                    e.target.classList.remove('zoo-grid__block--drag-hover');
                
                    const newMonster = document.createElement('monster-component');
                    newMonster.setAttribute('draggable', 'true');
                    newMonster.monster = new Monster(JSON.parse(e.dataTransfer.getData('monster')));
    
                    if(this.dragging) {
                        this.dragging.parentNode.classList.add('droppable');
                        this.dragging.parentNode.removeChild(this.dragging);
                        this.dragging = undefined;
                    };
    
                    newMonster.addEventListener('dragstart', e => {
                        e.dataTransfer.clearData('monster');
                        e.dataTransfer.setData('monster', JSON.stringify(newMonster.monster.info));
                        this.dragging = event.target;
                    });
    
                    e.target.append(newMonster);
                    e.target.classList.remove('droppable');
                }
            });
        })
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