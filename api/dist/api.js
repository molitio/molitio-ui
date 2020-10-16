"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Constants
const PORT = process.env.PORT || "3000";
const HOST = "0.0.0.0";
// App
const app = express_1.default();
app.get("/", (req, res) => {
    res.send("Hello World from docker.");
});
app.listen(PORT, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
//# sourceMappingURL=api.js.map