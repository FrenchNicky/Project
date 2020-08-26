import { Request, Response } from 'express'
import * as path from 'path'
import ServiceWs from 'App/Services/Ws'

export class Home {
	public index(req: Request, res: Response) {
		res.render('home/index.twig', { title: 'Wallyoo' })
	}
	public route(req: Request, res: Response) {
		res.send('Route')
	}
}