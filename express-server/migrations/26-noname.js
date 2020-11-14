'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "id" from table "Likes"
 * removeColumn "ChatId" from table "Messages"
 * createTable "Notifications", deps: [Users, Users]
 * changeColumn "userId" on table "Likes"
 * changeColumn "postId" on table "Likes"
 * changeColumn "chatId" on table "Messages"
 *
 **/

var info = {
    "revision": 26,
    "name": "noname",
    "created": "2020-11-14T12:50:20.857Z",
    "comment": ""
};

var migrationCommands = function(transaction) {
    return [
        // {
        //     fn: "removeColumn",
        //     params: [
        //         "Likes",
        //         "id",
        //         {
        //             transaction: transaction
        //         }
        //     ]
        // },
        // {
        //     fn: "removeColumn",
        //     params: [
        //         "Messages",
        //         "ChatId",
        //         {
        //             transaction: transaction
        //         }
        //     ]
        // },
        {
            fn: "createTable",
            params: [
                "Notifications",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "userId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Users",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "userId"
                    },
                    "type": {
                        "type": Sequelize.ENUM('friend request', 'profile visitors'),
                        "field": "type"
                    },
                    "senderId": {
                        "type": Sequelize.INTEGER,
                        "onUpdate": "CASCADE",
                        "onDelete": "NO ACTION",
                        "references": {
                            "model": "Users",
                            "key": "id"
                        },
                        "allowNull": true,
                        "field": "senderId"
                    },
                    "isReaded": {
                        "type": Sequelize.BOOLEAN,
                        "field": "isReaded",
                        "defaultValue": false
                    },
                    "createdAt": {
                        "type": Sequelize.DATE,
                        "field": "createdAt",
                        "allowNull": false
                    },
                    "updatedAt": {
                        "type": Sequelize.DATE,
                        "field": "updatedAt",
                        "allowNull": false
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        // {
        //     fn: "changeColumn",
        //     params: [
        //         "Likes",
        //         "userId",
        //         {
        //             "type": Sequelize.INTEGER,
        //             "unique": "Likes_userId_postId_unique",
        //             "primaryKey": true,
        //             "onUpdate": "CASCADE",
        //             "onDelete": "NO ACTION",
        //             "references": {
        //                 "model": "Users",
        //                 "key": "id"
        //             },
        //             "allowNull": true,
        //             "field": "userId"
        //         },
        //         {
        //             transaction: transaction
        //         }
        //     ]
        // },
        // {
        //     fn: "changeColumn",
        //     params: [
        //         "Likes",
        //         "postId",
        //         {
        //             "type": Sequelize.INTEGER,
        //             "unique": "Likes_userId_postId_unique",
        //             "primaryKey": true,
        //             "onUpdate": "CASCADE",
        //             "onDelete": "NO ACTION",
        //             "references": {
        //                 "model": "Posts",
        //                 "key": "id"
        //             },
        //             "allowNull": true,
        //             "field": "postId"
        //         },
        //         {
        //             transaction: transaction
        //         }
        //     ]
        // },
        // {
        //     fn: "changeColumn",
        //     params: [
        //         "Messages",
        //         "chatId",
        //         {
        //             "type": Sequelize.INTEGER,
        //             "field": "chatId",
        //             "onUpdate": "CASCADE",
        //             "onDelete": "CASCADE",
        //             "references": {
        //                 "model": "Chats",
        //                 "key": "id"
        //             },
        //             "allowNull": true
        //         },
        //         {
        //             transaction: transaction
        //         }
        //     ]
        // }
    ];
};
var rollbackCommands = function(transaction) {
    return [{
            fn: "dropTable",
            params: ["Notifications", {
                transaction: transaction
            }]
        },
        {
            fn: "addColumn",
            params: [
                "Likes",
                "id",
                {
                    "type": Sequelize.INTEGER,
                    "field": "id",
                    "autoIncrement": true,
                    "primaryKey": true,
                    "allowNull": false
                },
                {
                    transaction: transaction
                }
            ]
        },
        {
            fn: "addColumn",
            params: [
                "Messages",
                "ChatId",
                {
                    "type": Sequelize.INTEGER,
                    "field": "ChatId",
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "Chats",
                        "key": "id"
                    },
                    "allowNull": true
                },
                {
                    transaction: transaction
                }
            ]
        },
        {
            fn: "changeColumn",
            params: [
                "Likes",
                "userId",
                {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "NO ACTION",
                    "references": {
                        "model": "Users",
                        "key": "id"
                    },
                    "allowNull": true,
                    "field": "userId"
                },
                {
                    transaction: transaction
                }
            ]
        },
        {
            fn: "changeColumn",
            params: [
                "Likes",
                "postId",
                {
                    "type": Sequelize.INTEGER,
                    "onUpdate": "CASCADE",
                    "onDelete": "NO ACTION",
                    "references": {
                        "model": "Posts",
                        "key": "id"
                    },
                    "allowNull": true,
                    "field": "postId"
                },
                {
                    transaction: transaction
                }
            ]
        },
        {
            fn: "changeColumn",
            params: [
                "Messages",
                "chatId",
                {
                    "type": Sequelize.INTEGER,
                    "field": "chatId",
                    "onUpdate": "CASCADE",
                    "onDelete": "SET NULL",
                    "references": {
                        "model": "Chats",
                        "key": "id"
                    },
                    "allowNull": true
                },
                {
                    transaction: transaction
                }
            ]
        }
    ];
};

module.exports = {
    pos: 0,
    useTransaction: true,
    execute: function(queryInterface, Sequelize, _commands)
    {
        var index = this.pos;
        function run(transaction) {
            const commands = _commands(transaction);
            return new Promise(function(resolve, reject) {
                function next() {
                    if (index < commands.length)
                    {
                        let command = commands[index];
                        console.log("[#"+index+"] execute: " + command.fn);
                        index++;
                        queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                    }
                    else
                        resolve();
                }
                next();
            });
        }
        if (this.useTransaction) {
            return queryInterface.sequelize.transaction(run);
        } else {
            return run(null);
        }
    },
    up: function(queryInterface, Sequelize)
    {
        return this.execute(queryInterface, Sequelize, migrationCommands);
    },
    down: function(queryInterface, Sequelize)
    {
        return this.execute(queryInterface, Sequelize, rollbackCommands);
    },
    info: info
};
