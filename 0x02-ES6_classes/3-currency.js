export default class Currency {
    constructor(_code, _name) {
        this._code = _code;
        this._name = _name;
    }

    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }

    set code(myCode) {
        this._code = myCode;
    }

    set name(myName) {
        this._name = myName;
    }

    get code() {
        return this._code
    }

    get name() {
        return this._name
    }
}