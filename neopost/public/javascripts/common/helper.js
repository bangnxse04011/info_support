module.exports = {

    valid_input: (input) => {
        if (input == null || input == "" || input == '') {
            return false;
        }
        return true;
    },
    valid_phone_number: (input) => {
        var phoneno = /^\d{10}$/;
        if (input.match(phoneno)) {
            return true;
        }
        else {
          
            return false;
        }

    }

}