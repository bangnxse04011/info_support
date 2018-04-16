const db_tabale_info_support = require('../DAO/db_table_info_support');

module.exports = {
    /**
     * Method find all information support
     */
    find_all_info_support: () => {
        return db_tabale_info_support.findAll();
    },
    /**
     * Method find information support by id
     */
    find_info_by_id: (id) => {
        return db_tabale_info_support.findOne({
            where: {
                id: id
            }
        });
    },
}