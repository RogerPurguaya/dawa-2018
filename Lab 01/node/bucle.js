var http = require('http')

var server = http.createServer((req, res) => {
    var i = 0
    res.end('sdfs')
    while (true) {
        res.write(i + '-->')
        res.end('sdfs')
        i++
    }
});

server.listen(8080)