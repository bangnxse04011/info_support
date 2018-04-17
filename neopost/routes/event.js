var express = require('express');
var router = express.Router();
const info_support = require('../public/javascripts/Info_DAO/info_support');
const event_dao = require('../public/javascripts/DAO/db_table_event');
const db_tabale_events = require('../public/javascripts/DAO/db_table_event');
const page = require('../public/javascripts/common/page_common');

/* GET users listing. */
router.get('/:id', function (req, res, next) {
    let id_event = req.params['id'];
    if (id_event == null || isNaN(id_event) || id_event == '' || id_event == "") {
        res.render(page.page_error);
    }
    event_dao.findOne({
        where: {
            id: id_event
        }
    }).then(event => {
        res.render(page.page_detail, { info: event });
    }).catch(function (err) {
        res.render('error');
    });
});

module.exports = router;
