import { Moment } from 'moment';
export interface ITimeInterval {
    start: Moment;
    stop: Moment;
    intervalLenghtMs: number;
}
export declare class TimeInterval implements ITimeInterval {
    private _start;
    private _stop;
    constructor(start: Date, stop: Date);
    get start(): Moment;
    get stop(): Moment;
    get intervalLenghtMs(): number;
}
