"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const Home_1 = require("../app/Controllers/Home");
const twig = require("twig");
const express = require("express");
const path = require("path");
const socket_1 = require("Start/socket");
class Routes {
    constructor() {
        /**
         * Import controllers
         */
        this.HomeController = new Home_1.Home();
    }
    routes(app) {
        /**
         * Templates
         */
        app.set('views', 'views');
        app.engine('twig', twig.__express);
        app.use(express.static(path.join(__dirname, '../public/')));
        /**
         * Middleware
         * Connexion Socket.io
         */
        app.use((req, res, next) => {
            socket_1.default.start(socket => {
                console.log('Connexion Socket.io réussi. ID:', socket.id);
            });
            next();
        });
        /**
         * Routes
         */
        app.route('/').get(this.HomeController.index);
        app.route('/route').get(this.HomeController.route);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map