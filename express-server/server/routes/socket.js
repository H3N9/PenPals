const socketIo = require('socket.io')
const {currentUser, userJoin, userLeave} = require('../tools/room')
const db = require('../../models')

const {Message} = db

const connected = (app) =>{
    io = socketIo.listen(app)


    io.on('connect', (socket)=>{
        console.log('connect')
        socket.on('roomChat', ({userId, room}) => {
            const current = currentUser(socket.id)
            if(!current){
                const user = userJoin(socket.id, userId, room)
                socket.join(user.room) 
            }
        })

        socket.on('userSend', async (sendingText) => {
            const user = currentUser(socket.id)
            // const text = await db.sequelize.transaction((t) => {
            //     return Message.create(sendingText, {transaction:t})
            // })
            // const {id, reply, userId, chatId, createdAt} = text.dataValues
            // const json = {
            //     id,
            //     reply,
            //     userId,
            //     chatId,
            //     createdAt
            // }
            io.to(user.room).emit('serverSend', "Good")
            
        })

        socket.on('disconnect', () => {
            const user = userLeave(socket.id)
            console.log('disconnect')
            if(user){
                io.to(user[0].room).emit('serverSend', "Your friend left")
            }
        })
    })
    
}

module.exports.listen = connected