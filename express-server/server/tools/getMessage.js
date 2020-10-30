const db = require('../../models')
const {Chat, Message} = db
const { Op } = require('sequelize')
const getProfile = require('./getProfile')

module.exports = async (userId) => {
    const chats = await Chat.findAll({
        where: {[Op.or]:[{userOne:userId},{userTwo:userId}]},
        attributes: {exclude: ['createdAt', 'updatedAt']},
        include: [{model: Message, as: "message", attributes:["id", "reply", 'chatId', 'userId']}]
    })
    chats.map(async (chat) => {
        const interlocutor = chat.dataValues.userOne === userId? chat.dataValues.userTwo:chat.dataValues.userOne
        chat.dataValues['interlocutor'] = interlocutor
        chat.dataValues['userId'] = userId
        const messages = chat.dataValues.message.map(val => val.dataValues)
        chat.dataValues['lastMessage'] = messages[messages.length-1] || {}
        delete chat.dataValues.userOne
        delete chat.dataValues.userTwo
    })
    return chats
}