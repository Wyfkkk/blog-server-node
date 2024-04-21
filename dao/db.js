// 该文件负责对数据库进行初始化
const sequelize = require("./dbConnect");// 数据库链接实例
const adminModel = require("./model/adminModel");// 数据模型
(async function() {
     await sequelize.sync({
        alter: true
    })
    // 同步完成后，有些表需要一些初始化数据
    // 我们需要先查询这张表有没有内容，没有内容初始化数据
})()