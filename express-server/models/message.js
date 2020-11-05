module.exports = (sequelize, DataTypes) =>{
    const Message = sequelize.define("Message", {
        reply: DataTypes.TEXT,
        type:{
            type: DataTypes.ENUM,
            values: ['text', 'image']
        },
    })

    Message.associate = (models) =>{
        Message.belongsTo(models.User, {foreignKey: 'userId', as: 'user'})
        Message.belongsTo(models.Chat, {foreignKey: 'chatId', as: 'chat'})
    }

    return Message
}