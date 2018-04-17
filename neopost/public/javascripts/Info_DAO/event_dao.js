const db_tabale_event = require('../DAO/db_table_event');

module.exports = {
    /**
     * Method find all information support
     */
    find_all_event: () => {
        return db_tabale_event.findAll();
    }
}