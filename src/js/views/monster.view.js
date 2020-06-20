export default class MonsterView extends HTMLElement {
    constructor() {
        super();
    }

    set monster(monster) {
        this._monster = monster;
        this.style.backgroundImage = `url("https://robohash.org/${this._stringToHash(JSON.stringify(monster.info))}.png?set=set4")`;
    }
    get monster() {
        return this._monster;
    }

    _stringToHash(string) {   
        let hash = 0; 
        if (string.length == 0) return hash;
        for (let i = 0; i < string.length; i++) {
            hash = ((hash << 5) - hash) + string.charCodeAt(i);;
            hash = hash & hash;
        } 
        return hash; 
    } 
}