export interface IRating {
    positive: number;
    negative: number;
}
export declare abstract class Rating {
    private _positive;
    private _negative;
    get positive(): number;
    get negative(): number;
    addNegative(): void;
    addPositive(): void;
    constructor();
}
