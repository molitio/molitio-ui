import moment from 'moment';
export class TimeInterval {
    constructor(start, stop) {
        this._start = moment(start);
        this._stop = moment(stop);
    }
    get start() {
        return this._start;
    }
    get stop() {
        return this._stop;
    }
    get intervalLenghtMs() {
        return this._stop.diff(this._start);
    }
}
//# sourceMappingURL=timeInterval.js.map