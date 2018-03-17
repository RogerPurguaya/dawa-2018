//Síncrono:

/* var http = require('http')

var fs = require('fs')

var html = fs.readFileSync('./index.html')

http.createServer((req, res)=>{
    res.write(html)
    res.end()
}).listen(8080) */

//Asincrono:

var http = require('http')

var fs = require('fs')


http.createServer((req, res) => {
    
    fs.readFile('./index.html', (err, html) => {
        
        res.write(html)
        res.end()
    })

}).listen(8080)