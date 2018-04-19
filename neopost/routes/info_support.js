var express = require('express');
var router = express.Router();
const info_support = require('../public/javascripts/Info_DAO/info_support');
const event_dao = require('../public/javascripts/Info_DAO/event_dao');
const db_tabale_info_support = require('../public/javascripts/DAO/db_table_info_support');
const page = require('../public/javascripts/common/page_common');

/* GET users listing. */
router.get('/', function (req, res, next) {
    info_support.find_all_info_support().then(info => {
        event_dao.find_all_event().then(event => {
            res.render(page.page_index, { list: info, event: event });
        });
    });
});

/**
 * Find object by id
 */
router.get('/details/:id', function (req, res, next) {
    let id_info = req.params['id'];
    console.log(id_info);
    if (id_info == null || isNaN(id_info) || id_info == '' || id_info == "") {
        res.render(page.page_error);
    }
    db_tabale_info_support.findOne({
        where: {
            id: id_info
        }
    }).then(info => {
        let total_view = info.dataValues.total_view;
        if (total_view == null || total_view == '' || total_view == "") {
            total_view = 1;
        } else {
            total_view += 1;
        }
        info.updateAttributes({
            total_view: total_view
        })
        res.render(page.page_detail, { info: info, total_view: total_view });
    }).catch(function (err) {
        console.log(err);
        res.render('error');
    });
});

module.exports = router;
