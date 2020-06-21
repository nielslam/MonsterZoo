export default class InfoView {
    constructor() {
        this.$target = document.querySelector('.zoo__info');
    }

    set monster(monster) {
        this._monster = monster;
        this.init();
    }

    get monster() {
        return this._monster;
    }

    init() {
        this.$target.innerHTML = '';
        const el = document.createElement('div');
        el.className = 'info';
        el.innerHTML = `
            <div class="close">Sluiten</div>
            <monster-component></monster-component>
            <span>Naam: ${this.monster.name ? this.monster.name : 'Naamloos'}</span>
            <span>Type: ${this.monster.type}</span>
            <span>Kleur: ${this.monster.color}</span>
            <span>Type Armen: ${this.monster.armsType}</span>
            <span>Aantal Armen: ${this.monster.amtArms}</span>
            <span>Aantal Benen: ${this.monster.amtLegs}</span>
            <span>Aantal Ogen: ${this.monster.amtEyes}</span>
            <span>Vacht: ${this.monster.coat}</span>
            <span>Kan vliegen: ${this.monster.canFly ? 'Ja': 'Nee'}</span>
            <span>Kan zwemmen: ${this.monster.canSwim ? 'Ja': 'Nee'}</span>
        `;
        el.querySelector('monster-component').monster = this.monster;
        el.querySelector('.close').addEventListener('click', e =>{
            this.close();
        })
        this.$target.append(el);
    }

    close() {
        this.$target.innerHTML = '';
    }
}