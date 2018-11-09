var mysql = require('mysql');

var config = {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'lemon',
        connectionLimit: 100,
        port: 3306
    }
    /**
     * 
     * @param {*} sql  sql语句
     * @param {*} query  参数
     * @param {*} fn 成功的回调函数
     */
module.exports = function(sql, query, fn) {
    fn = fn ? fn : query;
    query = query || [];

    function connectionCallback(error, con) {
        if (error) {
            fn(error)
        } else {
            con.query(sql, query, function(err, result) {
                con.release();
                queryCallback(err, result)
            })
        }
    }

    function queryCallback(err, result) {
        if (err) {
            fn(err)
        } else {
            fn(null, result)
        }
    }

    pool.getConnection(connectionCallback)
}