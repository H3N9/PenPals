module.exports = (sequelize, DataTypes) =>{
    const Chat = sequelize.define("Chat", {
        userOne: DataTypes.INTEGER,
        userTwo: DataTypes.INTEGER
    })

    Chat.associate = (models) =>{
        Chat.belongsTo(models.User, {foreignKey: 'userOne', as: 'user1'})
        Chat.belongsTo(models.User, {foreignKey: 'userTwo', as: 'user2'})
        Chat.hasMany(models.Message, {foreignKey: 'chatId', as: 'message', onDelete: 'CASCADE'})
    }

    return Chat
}