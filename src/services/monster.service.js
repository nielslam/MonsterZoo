export default class MonsterService {
    constructor() {
        this.url = "https://robohash.org/"
    }

    getMonster(monster) {
        return `${this.url}${this._stringToHash(JSON.stringify(monster.info))}.png?set=set4`;
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