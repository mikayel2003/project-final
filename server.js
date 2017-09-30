// server.js
const jsonServer = require('json-server')
const router = jsonServer.router('language.json')
const basicAuth = require('express-basic-auth')

const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3000;
 

server.use(middlewares)
server.use(router)
server.listen(port, () => {
  console.log('json-server is running on port ' + port + '!')
})