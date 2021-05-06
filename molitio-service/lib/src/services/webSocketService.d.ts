export interface IWebSocketService {
    wss: any;
}
export declare const createWebSocketService: () => Promise<any>;
export declare const openWebSocketService: () => void;
export declare class WebSocketService implements IWebSocketService {
    wss: any;
}
