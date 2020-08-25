"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socketIO = require("socket.io");
const app_1 = require("Start/app");
class Ws {
    constructor() {
        this.isReady = false;
    }
    start(callback) {
        if (!this.isReady) {
            this.io = socketIO(app_1.default.getServer());
            this.io.on('connection', callback);
            this.isReady = true;
        }
    }
    close() {
        this.io.close();
    }
}
exports.default = new Ws();
//# sourceMappingURL=socket.js.map