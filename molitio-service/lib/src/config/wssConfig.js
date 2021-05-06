import dotenv from 'dotenv';
import { apiConfig } from './apiConfig';
export class WssConfig {
    get wsPort() {
        return process.env.MOLITIO_WS_PORT ? process.env.MOLITIO_WS_PORT : '5000';
    }
    get exchangeList() {
        return (process.env.EXCHANGE_LIST ? process.env.EXCHANGE_LIST.split(',') : ['desideratum', 'contribution']);
    }
    get envName() {
        return process.env.MOLITIO_ENVIRONMENT_NAME ? process.env.MOLITIO_ENVIRONMENT_NAME : 'none';
    }
    get wsDesideratumUrl() {
        return `ws://${apiConfig.apiEndpoint}:${this.wsPort}/desideratum`;
    }
    constructor() {
        dotenv.config();
    }
}
export const wssConfig = new WssConfig();
//# sourceMappingURL=wssConfig.js.map