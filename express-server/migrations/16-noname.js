'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "firstName" from table "Users"
 * removeColumn "lastName" from table "Users"
 * createTable "Profiles", deps: [Users]
 * addColumn "UserId" to table "UserTags"
 * changeColumn "userId" on table "UserTags"
 * changeColumn "tagId" on table "UserTags"
 *
 **/

var info = {
    "revision": 16,
    "name": "noname",
    "created": "2020-10-17T11:54:40.611Z",
    "comment": ""
};

var migrationCommands = function(transaction) {
    return [{
            fn: "removeColumn",
            params: [
                "Users",
                "firstName",
                {
                    transaction: transaction
                }
            ]
        },
        {
            fn: "removeColumn",
            params: [
                "Users",
                "lastName",
                {
                    transaction: transaction
                }
            ]
        },
        {
            fn: "createTable",
            params: [
                "Profiles",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "firstName": {
                        "type": Sequelize.STRING,
                        "field": "firstName"
                    },
                    "lastName": {
                        "type": Sequelize.STRING,
                        "field": "lastName"
                    },
                    "nation": {
                        "type": Sequelize.STRING,
                        "field": "nation"
                    },
                    "city": {
                        "type": Sequelize.STRING,
                        "field": "city"
                    },
                    "intro": {
                        "type": Sequelize.STRING,
                        "field": "intro"
                    },
                    "gender": {
                        "type": Sequelize.ENUM('male', 'female', 'other'),
                        "field": "gender"
                    },
                    "age": {
                        "type": Sequelize.INTEGER,
                        "field": "age"
                    },
                    "image": {
                        "type": Sequelize.STRING,
                        "field": "image"
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
                    },
                    "userId": {
                        "type": Sequelize.INTEGER,
                        "field": "userId",
                        "onUpdate": "CASCADE",
                        "onDelete": "SET NULL",
                        "references": {
                            "model": "Users",
                            "key": "id"
                        },
                        "allowNull": true
                    }
                },
                {
                    "transaction": transaction
                }
            ]
        },
        // {
        //     fn: "addColumn",
        //     params: [
        //         "UserTags",
        //         "UserId",
        //         {
        //             "type": Sequelize.INTEGER,
        //             "field": "UserId",
        //             "onUpdate": "CASCADE",
        //             "onDelete": "CASCADE",
        //             "references": {
        //                 "model": "Users",
        //                 "key": "id"
        //             },
        //             "primaryKey": true
        //         },
        //         {
        //             transaction: transaction
        //         }
        //     ]
        // },
        {
            fn: "changeColumn",
            params: [
                "UserTags",
                "userId",
                {
                    "type": Sequelize.INTEGER,
                    "allowNull": true,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "Profiles",
                        "key": "id"
                    },
                    "primaryKey": true,
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
                "UserTags",
                "tagId",
                {
                    "type": Sequelize.INTEGER,
                    "allowNull": true,
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "Tags",
                        "key": "id"
                    },
                    "primaryKey": true,
                    "field": "tagId"
                },
                {
                    transaction: transaction
                }
            ]
        }
    ];
};
var rollbackCommands = function(transaction) {
    return [{
            fn: "removeColumn",
            params: [
                "UserTags",
                "UserId",
                {
                    transaction: transaction
                }
            ]
        },
        {
            fn: "dropTable",
            params: ["Profiles", {
                transaction: transaction
            }]
        },
        {
            fn: "addColumn",
            params: [
                "Users",
                "firstName",
                {
                    "type": Sequelize.STRING,
                    "field": "firstName"
                },
                {
                    transaction: transaction
                }
            ]
        },
        {
            fn: "addColumn",
            params: [
                "Users",
                "lastName",
                {
                    "type": Sequelize.STRING,
                    "field": "lastName"
                },
                {
                    transaction: transaction
                }
            ]
        },
        {
            fn: "changeColumn",
            params: [
                "UserTags",
                "userId",
                {
                    "type": Sequelize.INTEGER,
                    "allowNull": true,
                    "unique": "UserTags_userId_tagId_unique",
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "Users",
                        "key": "id"
                    },
                    "primaryKey": true,
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
                "UserTags",
                "tagId",
                {
                    "type": Sequelize.INTEGER,
                    "allowNull": true,
                    "unique": "UserTags_userId_tagId_unique",
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "Tags",
                        "key": "id"
                    },
                    "primaryKey": true,
                    "field": "tagId"
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
