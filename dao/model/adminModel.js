/*
 * @Author: Wyfkkk 2224081986@qq.com
 * @Date: 2024-04-21 21:37:13
 * @LastEditors: Wyfkkk 2224081986@qq.com
 * @LastEditTime: 2024-04-21 22:01:37
 * @FilePath: \mysite-node\mysite-express\dao\model\adminModel.js
 * @Description:  = 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
// 专门存放数据模型
const { DataTypes } = require("sequelize")
const sequelize= require("../dbConnect");
// 定义数据模型
module.exports = sequelize.define("admin", {
    // 这张表的字段
    loginId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    loginPwd: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
});