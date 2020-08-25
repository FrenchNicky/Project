import * as express from 'express'
import * as http from 'http'
import * as path from 'path'
import { Routes } from 'Start/routes'

const port: number = 3000
const app = express()

export default class App {
	constructor() {
		App.server = new http.Server(app)
		this.port = port
		this.routes.routes(app)
		this.config()
	}

	/**
	 * port: number
	 * Numéro du port http
	 * @private
	 */
	private port: number

	/**
	 * config: void
	 * Encodage des pages
	 * @private
	 */
	private config(): void {
		app.use(express.json())
		app.use(express.urlencoded({ extended: false }))
	}

	/**
	 * server: http.Server
	 * Serveur express
	 * @static
	 */
	static server: http.Server

	/**
	 * routes: Routes
	 * Instanciation des routes
	 * @public
	 */
	public routes: Routes = new Routes()

	/**
	 * Démarrage du serveur
	 * @constructor
	 */
	public Start() {
		App.server.listen(this.port, () => {
			console.log(`Server listening on port ${this.port}.`)
		})
	}

	/**
	 * Retourne l'instance en cours du serveur
	 */
	static getServer() {
		return App.server
	}
}