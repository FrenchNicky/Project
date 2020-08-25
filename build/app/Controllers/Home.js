"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
class Home {
    index(req, res) {
        res.render('home/index.twig', { title: 'Wallyoo' });
    }
    route(req, res) {
        res.send('Route');
    }
}
exports.Home = Home;
//# sourceMappingURL=Home.js.map