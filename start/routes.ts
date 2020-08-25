import { Request, Response } from 'express'
import { Home } from '../app/Controllers/Home'
import * as twig from 'twig'
import * as express from 'express'
import * as path from 'path'
import Ws from 'Start/socket'

export class Routes {
	/**
	 * Import controllers
	 */
	public HomeController: Home = new Home()
	public routes(app): void {
		/**
		 * Templates
		 */
		app.set('views', 'views')
		app.engine('twig', twig.__express)
		app.use(express.static(path.join(__dirname, '../public/')))

		/**
		 * Middleware
		 * Connexion Socket.io
		 */
		app.use((req: Request, res: Response, next) => {
			Ws.start(socket => {
				console.log('Connexion Socket.io réussi. ID:',socket.id)
			})
			next()
		})

		/**
		 * Routes
		 */
		app.route('/').get(this.HomeController.index)
		app.route('/route').get(this.HomeController.route)
	}
}