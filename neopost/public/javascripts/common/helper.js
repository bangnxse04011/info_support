module.exports = {

    valid_input: (input) => {
        if (input == null || input == "" || input == '') {
            return false;
        }
        return true;
    },
    /**
     * Valid max length phone number 9 or 10 number or 11
     */
    valid_phone_number: (input) => {
        var phoneno = /^\d{9,11}$/;
        if (input.match(phoneno)) {
            return true;
        }
        else {

            return false;
        }

    }

}