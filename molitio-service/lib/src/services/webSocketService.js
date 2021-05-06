import * as WebSocket from 'ws';
import { wssConfig } from '../config/wssConfig';
export const createWebSocketService = async () => {
    return new WebSocket.Server({
        port: Number.parseInt(wssConfig.wsPort),
    });
};
export const openWebSocketService = () => {
};
export class WebSocketService {
}
//# sourceMappingURL=webSocketService.js.map