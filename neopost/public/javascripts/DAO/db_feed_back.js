var connection_db = require('./db_connect_postgre');
const Sequelize = require('sequelize');

/**
 * Create Table Users
 */
const Feed_back = connection_db.define('feed_back', {
    fullName: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    title: { type: Sequelize.STRING },
    message: { type: Sequelize.STRING }
});

Feed_back.sync();

module.exports = Feed_back;

