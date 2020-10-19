'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "username" on table "Users"
 *
 **/

var info = {
    "revision": 15,
    "name": "noname",
    "created": "2020-10-14T15:23:30.861Z",
    "comment": ""
};

var migrationCommands = function(transaction) {
    return [{
        fn: "changeColumn",
        params: [
            "Users",
            "username",
            {
                "type": Sequelize.STRING,
                "field": "username",
                "unique": true,
                "allowNull": false
            },
            {
                transaction: transaction
            }
        ]
    }];
};
var rollbackCommands = function(transaction) {
    return [{
        fn: "changeColumn",
        params: [
            "Users",
            "username",
            {
                "type": Sequelize.STRING,
                "field": "username",
                "unique": false,
                "allowNull": true
            },
            {
                transaction: transaction
            }
        ]
    }];
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
