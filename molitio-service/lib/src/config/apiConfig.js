import dotenv from 'dotenv';
export default class ApiConfig {
    get apiEndpoint() {
        return process.env.MOLITIO_API_ENDPOINT ? process.env.MOLITIO_API_ENDPOINT : '/api';
    }
    get exchangeList() {
        return (process.env.EXCHANGE_LIST ? process.env.EXCHANGE_LIST.split(',') : ['desideratum', 'contribution']);
    }
    get envName() {
        return process.env.MOLITIO_ENVIRONMENT_NAME ? process.env.MOLITIO_ENVIRONMENT_NAME : 'none';
    }
    constructor() {
        dotenv.config();
    }
}
export const apiConfig = new ApiConfig();
//# sourceMappingURL=apiConfig.js.map