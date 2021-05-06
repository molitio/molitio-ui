export class Rating {
    constructor() {
        this._positive = 0;
        this._negative = 0;
    }
    get positive() {
        return this._positive;
    }
    get negative() {
        return this._negative;
    }
    addNegative() {
        this._negative++;
    }
    addPositive() {
        this._positive++;
    }
}
//# sourceMappingURL=rating.js.map