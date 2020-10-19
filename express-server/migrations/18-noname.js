'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "UserId" from table "UserTags"
 * createTable "Categories", deps: []
 * createTable "FavTags", deps: [Tags, Categories]
 * addColumn "type" to table "Tags"
 * changeColumn "tagId" on table "UserTags"
 * changeColumn "userId" on table "UserTags"
 *
 **/

var info = {
    "revision": 18,
    "name": "noname",
    "created": "2020-10-17T17:05:45.339Z",
    "comment": ""
};

var migrationCommands = function(transaction) {
    return [
        // {
        //     fn: "removeColumn",
        //     params: [
        //         "UserTags",
        //         "UserId",
        //         {
        //             transaction: transaction
        //         }
        //     ]
        // },
        {
            fn: "createTable",
            params: [
                "Categories",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false
                    },
                    "name": {
                        "type": Sequelize.STRING,
                        "field": "name",
                        "unique": true,
                        "allowNull": false
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
        {
            fn: "createTable",
            params: [
                "FavTags",
                {
                    "id": {
                        "type": Sequelize.INTEGER,
                        "field": "id",
                        "autoIncrement": true,
                        "primaryKey": true,
                        "allowNull": false
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
                    "tagId": {
                        "type": Sequelize.INTEGER,
                        "field": "tagId",
                        "onUpdate": "CASCADE",
                        "onDelete": "SET NULL",
                        "references": {
                            "model": "Tags",
                            "key": "id"
                        },
                        "allowNull": true
                    },
                    "categoryId": {
                        "type": Sequelize.INTEGER,
                        "field": "categoryId",
                        "onUpdate": "CASCADE",
                        "onDelete": "SET NULL",
                        "references": {
                            "model": "Categories",
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
        {
            fn: "addColumn",
            params: [
                "Tags",
                "type",
                {
                    "type": Sequelize.ENUM('hobbies', 'favorites'),
                    "field": "type"
                },
                {
                    transaction: transaction
                }
            ]
        },
        // {
        //     fn: "changeColumn",
        //     params: [
        //         "UserTags",
        //         "tagId",
        //         {
        //             "type": Sequelize.INTEGER,
        //             "allowNull": true,
        //             "unique": "UserTags_tagId_userId_unique",
        //             "onUpdate": "CASCADE",
        //             "onDelete": "CASCADE",
        //             "references": {
        //                 "model": "Tags",
        //                 "key": "id"
        //             },
        //             "primaryKey": true,
        //             "field": "tagId"
        //         },
        //         {
        //             transaction: transaction
        //         }
        //     ]
        // },
        // {
        //     fn: "changeColumn",
        //     params: [
        //         "UserTags",
        //         "userId",
        //         {
        //             "type": Sequelize.INTEGER,
        //             "allowNull": true,
        //             "unique": "UserTags_tagId_userId_unique",
        //             "onUpdate": "CASCADE",
        //             "onDelete": "CASCADE",
        //             "references": {
        //                 "model": "Profiles",
        //                 "key": "id"
        //             },
        //             "primaryKey": true,
        //             "field": "userId"
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
            fn: "removeColumn",
            params: [
                "Tags",
                "type",
                {
                    transaction: transaction
                }
            ]
        },
        {
            fn: "dropTable",
            params: ["Categories", {
                transaction: transaction
            }]
        },
        {
            fn: "dropTable",
            params: ["FavTags", {
                transaction: transaction
            }]
        },
        {
            fn: "addColumn",
            params: [
                "UserTags",
                "UserId",
                {
                    "type": Sequelize.INTEGER,
                    "field": "UserId",
                    "onUpdate": "CASCADE",
                    "onDelete": "CASCADE",
                    "references": {
                        "model": "Users",
                        "key": "id"
                    },
                    "primaryKey": true
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
        },
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
