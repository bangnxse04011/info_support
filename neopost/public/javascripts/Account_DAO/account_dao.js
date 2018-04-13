const db_tabale_account = require('../DAO/db_table_account');

module.exports = {

    /**
     * Method check authen login when user login user and password
     */
    authen_login: (user_name, pass_word, callback) => {
        return db_tabale_account.findOne();
    },
    /**
     * Method create new account
     */
    insert_account: (fullName, email, id_user, user_name, pass_word, phone_number, role) => {
        return db_tabale_account.create({
            fullName: fullName,
            email: email,
            id_user: id_user,
            user_name: user_name,
            pass_word: pass_word,
            phone_number: phone_number,
            role: role
        });
    },
    /**
     * Method delete account by user id
     */
    delete_account: (id_user) => {
        return db_tabale_account.destroy({
            where: {
                id_user: id_user
            }
        });
    },
    /**
     * Method find all account
     */
    find_all_account: () => {
        return db_tabale_account.findAll();
    }
}

