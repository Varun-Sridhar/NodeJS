const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes.handlerKey);
console.log(routes.textKey);

server.listen(3000);