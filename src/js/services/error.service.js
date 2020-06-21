export default class ErrorService {
    constructor() {
        this.$main = document.body;
    }

    throwError(message) {
        let el = document.createElement('div');
        el.className = 'error';
        el.innerText = message;
        this.$main.append(el);
        setTimeout((function() {
            el.parentNode.removeChild(el);
        }),5000);
    }
}