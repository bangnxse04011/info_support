var express = require('express');
const info_support = require('../public/javascripts/Info_DAO/info_support');
const db_tabale_info_support = require('../public/javascripts/DAO/db_table_info_support');
var router = express.Router();
const page = require('../public/javascripts/common/page_common');

/* GET users listing. */
router.get('/', function (req, res, next) {
    info_support.find_all_info_support().then(result => {
        res.render(page.page_index, { list: result });
    });
});

router.get('/details/:id', (req, res) => {
    let id_info = req.params['id'];
    if (id_info == null || isNaN(id_info) || id_info == '' || id_info == "") {
        res.render(page.page_error);
    }
    db_tabale_info_support.findOne({
        where: {
            id: id_info
        }
    }).then(info => {
        console.log(info.dataValues);
        res.render(page.page_detail, { list: info.dataValues });
    }).catch(function (err) {
        res.render('error');
    });
});

module.exports = router;
