var connection_db = require('./db_connect_postgre');
const Sequelize = require('sequelize');

/**
 * Create Table Users
 */
const Event = connection_db.define('event', {
    fullName: { type: Sequelize.STRING(10485760) },
    title: { type: Sequelize.STRING(10485760) },
    address: { type: Sequelize.STRING(10485760) },
    description: { type: Sequelize.STRING(10485760) },
    path_img: { type: Sequelize.STRING },
    status: { type: Sequelize.INTEGER }
});

// Event.sync();

module.exports = Event;

