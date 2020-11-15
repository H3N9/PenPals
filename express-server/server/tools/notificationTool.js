const db = require('../../models')
const { Notification } = db
const { Op } = require('sequelize')
const Sequelize = require('sequelize');

const createNotification = async (senderId, receiverId, type) =>{
    const notiHave = await Notification.findAll({ where: { 
        userId: receiverId,
        senderId: senderId,
        type: type,
        isReaded: false
    }})
    if (notiHave.length === 0 && (type === "friend request" || type === "profile visitors")){
        const newNoti = await db.sequelize.transaction((t) =>{
            return Notification.create({ userId: receiverId, senderId: senderId, type}, {transaction: t})
        })
    }
}

module.exports = {
    createNotification
}