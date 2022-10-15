export default class Currency {
    constructor(code, name) {
        this._code = code;
        this._name = name;
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