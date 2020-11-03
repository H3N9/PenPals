const db = require('../../models')
const {Chat, Message} = db
const { Op } = require('sequelize')

const getAllMessage = async (userId) => {
    const chats = await Chat.findAll({
        where: {[Op.or]:[{userOne:userId},{userTwo:userId}]},
        attributes: {exclude: ['createdAt', 'updatedAt']},
        include: [{model: Message, as: "message", attributes:{exclude: ['updatedAt']}}]
    })
    chats.map((chat) => {
        const interlocutor = chat.dataValues.userOne === userId? chat.dataValues.userTwo:chat.dataValues.userOne
        chat.dataValues['interlocutor'] = interlocutor
        chat.dataValues['userId'] = userId
        chat.dataValues.message.sort((val1, val2) => val2.id - val1.id)
        const messages = chat.dataValues.message.map(val => val.dataValues)
        chat.dataValues['lastMessage'] = messages[0] || {}
        delete chat.dataValues.userOne
        delete chat.dataValues.userTwo
    })
    return chats
}

const getOneMessage = async (userId, friendId) => {
    const messagesData = await getAllMessage(userId)
    const messages = messagesData.map(message => message.dataValues)
    const message = messages.filter((message) => message.userId === userId && message.interlocutor === friendId)
    return message
}


module.exports = {
    getAllMessage,
    getOneMessage
}