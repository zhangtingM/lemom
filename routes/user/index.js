var sql = require('../../mysql/sql.js'); //sql语句

var query = require('../../mysql');

function addUser(req, res, next) {
    var name = req.body.name;

    var uid = req.body.uid;

    if (!name) {
        res.json({ code: 2, msg: '用户名不存在' });
        return
    } else if (!uid) {
        add()
    }

    //是否存在用户名
    function isHas() {
        query(sql.SELECT_ISHAS, [name], function(err, result) {
            if (!error) {
                if (result.length > 0) {
                    res.json({ code: 3, msg: '用户名已存在' });
                } else {
                    add()
                }
            } else {
                res.json({ code: 0, msg: '服务器错误' });
            }
        })
    }

    //添加用户
    function add() {
        query(sql.ADD_USER, [], function() {

        })
    }
}
module.exports = {
    addUser: addUser
}