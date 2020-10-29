const socketIo = require('socket.io')


const connected = (app) =>{
    io = socketIo.listen(app)


    io.on('connect', (socket)=>{
        console.log('connect')
        // socket.on('message', (msg)=>{
        //     io.emit('send message', msg)
        // })
    })
    
}

module.exports.listen = connected


// const express = require('express')