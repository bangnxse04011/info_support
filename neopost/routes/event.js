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
        // Get total view in page by id
        let user_login_users = req.session.user_login_users;
        let login = "Đăng Nhập";
        let logout = "";
        let logout_href = "/authen/register";
        if (user_login_users == null || user_login_users == '' || user_login_users == "") {
            logout = "Đăng Ký";
        } else {
            login = "Xin Chào " + user_login_users;
            logout = "Đăng Xuất";
            logout_href = "/logout";
        }
        let total_view = event.dataValues.total_view;
        if (total_view == null || total_view == '' || total_view == "") {
            total_view = 1;
        } else {
            total_view += 1;
        }
        event.updateAttributes({
            total_view: total_view
        })
        res.render(page.page_detail, { info: event, total_view: total_view, login: login, logout: logout, logout_href: logout_href });
    }).catch(function (err) {
        console.log(err);
        res.render('error');
    });
});

module.exports = router;
