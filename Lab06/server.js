'use strict'
var express = require('express')
var app     = express()
var http    = require('http').createServer(app)
var io      = require('socket.io')(http)
var port    = process.env.PORT || 3000
var user = require('./models/user')

app.set('view engine','jade')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('main')
})

http.listen(port, () => {
    console.log(`Escuchando alicación en el puerto: ${port}`)
})

io.on('connection', (socket) => {
    socket.on('crear', (data) => {
       user.create(data, (user) => {
          io.emit('nuevo', user)
       })
    })

})