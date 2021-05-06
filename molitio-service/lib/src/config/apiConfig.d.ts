export default class ApiConfig {
    get apiEndpoint(): string;
    get exchangeList(): string[];
    get envName(): string;
    constructor();
}
export declare const apiConfig: ApiConfig;
