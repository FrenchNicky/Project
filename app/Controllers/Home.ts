import { Request, Response } from 'express'
import * as path from 'path'
import Ws from 'Start/socket'

export class Home {
	public index(req: Request, res: Response) {
		res.render('home/index.twig', { title: 'Wallyoo' })
	}
	public route(req: Request, res: Response) {
		res.send('Route')
	}
}