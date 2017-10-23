import express from 'express'

const server = express()

server.use('/static', express.static('static'))

server.listen(3000)
console.log('Listening on 3000')