/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-04-22 22:42:58
 * @LastEditors: Wyfkkk 2224081986@qq.com
 * @LastEditTime: 2024-04-24 23:25:26
 * @FilePath: \blog-server-node\dao\db.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 该文件负责对数据库进行初始化
const sequelize = require("./dbConnect");// 数据库链接实例
const adminModel = require("./model/adminModel");// 数据模型
const md5 = require('md5');
(async function() {
     await sequelize.sync({
        alter: true
    })
    // 同步完成后，有些表需要一些初始化数据
    // 我们需要先查询这张表有没有内容，没有内容初始化数据
    const adm inCount = await adminModel.count();
    if(!adminCount) {
        // 进入此if 说明表没数据，初始化数据
        await adminModel.create({
            loginId: 'admin33',
            name: "超级管理员",
            loginPwd: md5('123456'),
        })
    }
    console.log('数据库准备完毕');
})()