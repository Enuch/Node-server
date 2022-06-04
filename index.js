const http = require('http');

let server = http.createServer((req, res) => {
    console.log('URL: ' + req.url);
    console.log('METHOD: ' + req.method);

    res.end('ok');
});

server.listen(3000, 'localhost', () => {
    console.log('Server on');
});