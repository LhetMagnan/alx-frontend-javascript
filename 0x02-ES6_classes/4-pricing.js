export default class Pricing {
    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }

    displayFullPrice() {
        return `${this.amount} ${this.currency.name} (${this.currency.code})`;
    }

    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }

    set amount(myAmount) {
        this._amount = myAmount;
    }

    set currency(myCurrency) {
        if (!(newCurrency instanceof Currency)) throw TypeError('currency must be an instance of Currency');
        this._currency = myCurrency;
    }

    get amount() {
        return this._amount;
    }

    get currency() {
        return this._currency;
    }
}