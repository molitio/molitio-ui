import dotenv from 'dotenv';
export class EnvInfo {
    get envName() {
        return process.env.MOLITIO_ENVIRONMENT_NAME ? process.env.MOLITIO_ENVIRONMENT_NAME : 'molitio';
    }
    get appVersionInfo() {
        return process.env.MOLITIO_APP_VERSION_INFO ? process.env.MOLITIO_APP_VERSION_INFO : 'latest';
    }
    get appUrl() {
        return process.env.MOLITIO_APP_URL ? process.env.MOLITIO_APP_URL : 'localhost';
    }
    constructor() {
        dotenv.config();
    }
}
export const envInfo = new EnvInfo();
//# sourceMappingURL=envInfo.js.map