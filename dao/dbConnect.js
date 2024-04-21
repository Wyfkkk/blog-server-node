/*
 * @Author: Wyfkkk 2224081986@qq.com
 * @Date: 2024-04-21 11:02:21
 * @LastEditors: Wyfkkk 2224081986@qq.com
 * @LastEditTime: 2024-04-21 11:13:23
 * @FilePath: \mysite-node\mysite-express\dao\dbConnect.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
// 连接数据库
const { Sequelize } = require("sequelize");
// 创建连接
const sequelize = new Sequelize('mysite2', 'root', 'wang010504', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});
(async function() {
    try {
        await sequelize.authenticate();
        console.log('连接成功');
    } catch(err) {
        console.error('连接失败', err);
    };
}())
