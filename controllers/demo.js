const query = require('../utils/db')

module.exports = {

    /**
     * 简单demo测试
     * @param {*} ctx 
     */
    async demo(ctx) {
        ctx.body = ctx.request.body;
        // ctx.body = await query('select * from user');
        // ctx.body = await query('select * from user where `username` = ? and `password` = ?',['zhang',4343])
    }
}