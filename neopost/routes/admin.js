var express = require('express');
const message = require('../public/javascripts/common/message_common');
const page = require('../public/javascripts/common/page_common');
var formidable = require('formidable');
var fs = require('fs');
const uuidv1 = require('uuid/v1');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render(page.page_login, { mess: '' });
});

/* GET users listing. */
router.post('/add_event', function (req, res, next) {
    var form = new formidable.IncomingForm();
    let path = __dirname;
    path = path.replace('routes', '');
    form.uploadDir = path + '/public/stylesheets/images/';
    form.parse(req, function (err, fields, file) {
        let path_name = file.files.name.split('.');
        if(path_name && path_name.length > 1) {
            let new_name_file = uuidv1() + '.' + path_name[1];
            //path tmp trên server
            var path = file.files.path;
            //thiết lập path mới cho file
            var newpath = form.uploadDir + new_name_file;
            fs.rename(path, newpath, function (err) {
                if (err) throw err;
                res.end('Upload Thanh cong!');
            });
        } else {
            res.end("LOI ROI");
        }
    });
    return;
});

/**
 * Add cd vilucky
 */
router.post('/add_cd_vilucky', function (req, res, next) {
    var form = new formidable.IncomingForm();
    let path = __dirname;
    path = path.replace('routes', '');
    form.uploadDir = path + '/public/stylesheets/images/';
    form.parse(req, function (err, fields, file) {
        let path_name = file.files.name.split('.');
        let new_name_file = uuidv1() + '.' + path_name[1];
        //path tmp trên server
        var path = file.files.path;
        //thiết lập path mới cho file
        var newpath = form.uploadDir + new_name_file;
        fs.rename(path, newpath, function (err) {
            if (err) throw err;
            res.end('Upload Thanh cong!');
        });
    });
    return;
});

module.exports = router;
