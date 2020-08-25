"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http = require("http");
const routes_1 = require("Start/routes");
const port = 3000;
const app = express();
class App {
    constructor() {
        /**
         * routes: Routes
         * Instanciation des routes
         * @public
         */
        this.routes = new routes_1.Routes();
        App.server = new http.Server(app);
        this.port = port;
        this.routes.routes(app);
        this.config();
    }
    /**
     * config: void
     * Encodage des pages
     * @private
     */
    config() {
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
    }
    /**
     * Démarrage du serveur
     * @constructor
     */
    Start() {
        App.server.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}.`);
        });
    }
    /**
     * Retourne l'instance en cours du serveur
     */
    static getServer() {
        return App.server;
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map