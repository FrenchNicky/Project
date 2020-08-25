import * as express from 'express'
import * as socketIO from 'socket.io'
import App from 'Start/app'

class Ws {
	public isReady = false
	public io: socketIO.Server
	public start (callback: (socket: socketIO.Socket) => void) {
		if(!this.isReady) {
			this.io = socketIO(App.getServer())
			this.io.on('connection', callback)
			this.isReady = true
		}
	}
	public close () {
		this.io.close()
	}
}

export default new Ws()