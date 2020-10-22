'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Relationships", deps: [Profiles, Profiles]
 * changeColumn "tagId" on table "FavTags"
 * changeColumn "categoryId" on table "FavTags"
 *
 **/

var info = {
    "revision": 19,
    "name": "noname",
    "created": "2020-10-22T17:42:32.214Z",
    "comment": ""
};

var migrationCommands = function(transaction) {
    return [{
            fn: "createTable",
            params: [
                "Relationships",
                {
                    "profileId": {
                        "type": Sequelize.INTEGER,
                        "allowNull": true,
                        "onUpdate": "CASCADE",
                        "onDelete": "CASCADE",
                        "references": {
                            "model": "Profiles",
                            "key": "id"
                        },
                        "primaryKey": true,
                        "field": "profileId"
                    },
                    "friendId": {
                        "type": Sequelize.INTEGER,
                        "allowNull": true,
                        "onUpdate": "CASCADE",
                        "onDelete": "CASCADE",
                        "references": {
                            "model": "Profiles",
                            "key": "id"
                        },
                        "primaryKey": true,
                        "field": "friendId"
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
        //         "FavTags",
        //         "tagId",
        //         {
        //             "type": Sequelize.INTEGER,
        //             "onUpdate": "CASCADE",
        //             "onDelete": "NO ACTION",
        //             "references": {
        //                 "model": "Tags",
        //                 "key": "id"
        //             },
        //             "allowNull": true,
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
        //         "FavTags",
        //         "categoryId",
        //         {
        //             "type": Sequelize.INTEGER,
        //             "onUpdate": "CASCADE",
        //             "onDelete": "NO ACTION",
        //             "references": {
        //                 "model": "Categories",
        //                 "key": "id"
        //             },
        //             "allowNull": true,
        //             "field": "categoryId"
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
            params: ["Relationships", {
                transaction: transaction
            }]
        },
        {
            fn: "changeColumn",
            params: [
                "FavTags",
                "tagId",
                {
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
                {
                    transaction: transaction
                }
            ]
        },
        {
            fn: "changeColumn",
            params: [
                "FavTags",
                "categoryId",
                {
                    "type": Sequelize.INTEGER,
                    "field": "categoryId",
                    "onUpdate": "CASCADE",
                    "onDelete": "SET NULL",
                    "references": {
                        "model": "Categories",
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
