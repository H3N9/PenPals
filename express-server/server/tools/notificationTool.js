const db = require('../../models')
const { Notification } = db
const { Op } = require('sequelize')
const Sequelize = require('sequelize');

const createNotification = async (sender, receiver, type) =>{
    const notiHave = await Notification.findAll({ where: { 
        userId: receiver,
        senderId: sender,
        type: type,
        isReaded: false
    }})
    if (notiHave.length === 0 && (type === "friend request")){
        const newNoti = await db.sequelize.transaction((t) =>{
            return Notification.create({ userId: receiver, senderId: sender, type}, {transaction: t})
        })
    }
}

module.exports = {
    createNotification
}