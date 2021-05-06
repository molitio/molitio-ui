import { apiConfig } from "./config/apiConfig";
import { wssConfig } from "./config/wssConfig";
import { createWebSocketService, openWebSocketService } from "./services/webSocketService";
createWebSocketService();
openWebSocketService();
console.log(`Running on port: ${wssConfig.wsPort} endpoint: ${apiConfig.apiEndpoint}`);
//# sourceMappingURL=api.js.map