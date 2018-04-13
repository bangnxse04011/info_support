var connection_db = require('./db_connect_postgre');
const Sequelize = require('sequelize');

/**
 * Create Table Users
 */
const Info_support = connection_db.define('info_support', {
    fullName: { type: Sequelize.STRING },
    title: { type: Sequelize.STRING },
    address: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    path_img: { type: Sequelize.STRING },
    status: { type: Sequelize.INTEGER }
});

// Info_support.sync();

module.exports = Info_support;

