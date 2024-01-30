const http = require('http');

const server = http.createServer((reg, res) => {
    res.end('Bye, cruel world');
});

//server.listen(3000);