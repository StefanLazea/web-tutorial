const sequelize = require("./server.js").sequelize;
const Sequelize = require("sequelize");

const Messages = sequelize.define('messages', {
    subject: Sequelize.STRING,
    name: Sequelize.STRING,
    message: Sequelize.TEXT
})

module.exports = Messages;