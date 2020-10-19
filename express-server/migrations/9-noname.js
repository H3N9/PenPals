'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "PostId" to table "Comments"
 * changeColumn "postId" on table "Comments"
 * changeColumn "postId" on table "Comments"
 *
 **/

var info = {
    "revision": 9,
    "name": "noname",
    "created": "2020-10-12T13:58:12.352Z",
    "comment": ""
};

var migrationCommands = function(transaction) {
    return [
        {
            fn: "changeColumn",
            params: [
                "Comments",
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
                "Comments",
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
        }
    ];
};
var rollbackCommands = function(transaction) {
    return [{
            fn: "removeColumn",
            params: [
                "Comments",
                "PostId",
                {
                    transaction: transaction
                }
            ]
        },
        {
            fn: "changeColumn",
            params: [
                "Comments",
                "postId",
                {
                    "type": Sequelize.INTEGER,
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
                "Comments",
                "postId",
                {
                    "type": Sequelize.INTEGER,
                    "field": "postId"
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
