const http = require('http')

const server = http.createServer((req, res, next) => {
	const path = req.url
        switch(path) {
		case '/api':
			return res.writeHead(200).end('API path')
		case '/':
			return res.writeHead(200).end('Hello World')
		default:
			return res.writeHead(400).end('Page not found!')
	}
})

server.listen(3000, () => console.log('Server listening at 3000'))
