const db_tabale_feed_back = require('../DAO/db_feed_back');

module.exports = {
    /**
     * Method find all information support
     */
    find_all_feed_back: () => {
        return db_tabale_feed_back.findAll();
    },
    /**
     * Method find information support by id
     */
    insert_feed_back: () => {
        
    }
}