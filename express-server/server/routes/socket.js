const socketIo = require('socket.io')
const {currentUser, userJoin, userLeave} = require('../tools/room')

const connected = (app) =>{
    io = socketIo.listen(app)


    io.on('connect', (socket)=>{

        socket.on('roomChat', ({userId, room}) => {

            const user = userJoin(socket.id, userId, room)

            socket.join(user.room) 
        })

        socket.on('userSend', msg => {
            const user = currentUser(socket.id)
            io.to(user.room).emit('serverSend', msg)
        })

        socket.on('disconnect', () => {
            const user = userLeave(socket.id)
            console.log('disconnect')
            if(user){
                io.to(user[0].room).emit('serverSend', "Your friend left")
            }
        })

        
        //socket

        console.log('connect')
        // socket.on('message', (msg)=>{
        //     io.emit('send message', msg)
        // })
    })
    
}

module.exports.listen = connected


// const express = require('express')