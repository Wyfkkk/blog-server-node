/*
 * @Author: Wyfkkk 2224081986@qq.com
 * @Date: 2024-04-21 11:02:21
 * @LastEditors: Wyfkkk 2224081986@qq.com
 * @LastEditTime: 2024-04-21 21:32:39
 * @FilePath: \mysite-node\mysite-express\dao\dbConnect.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
// 连接数据库
const { Sequelize } = require("sequelize");
// 创建连接
// const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER, process.env.DB_PASS, {
//     host: process.env.DB_HOST,
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
});
// 向外暴露链接实例
module.exports = sequelize;