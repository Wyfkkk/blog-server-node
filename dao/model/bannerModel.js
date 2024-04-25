/*
 * @Author: Wyfkkk 2224081986@qq.com
 * @Date: 2024-04-21 21:37:13
 * @LastEditors: Wyfkkk 2224081986@qq.com
 * @LastEditTime: 2024-04-25 11:17:30
 * @FilePath: \mysite-node\mysite-express\dao\model\adminModel.js
 * @Description:  = 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
// 专门存放数据模型
const { DataTypes } = require("sequelize")
const sequelize= require("../dbConnect");
// 定义数据模型
module.exports = sequelize.define("banner", {
    // 这张表的字段
    middleImg: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bigImg: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
    
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
});