const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    'profile',
    'stefan',
    '',
    {
        dialect: "mysql",
        host: "localhost"
    }
)


const Messages = sequelize.define('messages', {
    subject: Sequelize.STRING,
    name: Sequelize.STRING,
    message: Sequelize.TEXT
})


module.exports = {sequelize, Messages};
