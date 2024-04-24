/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-04-24 10:26:42
 * @LastEditors: Wyfkkk 2224081986@qq.com
 * @LastEditTime: 2024-04-24 21:38:43
 * @FilePath: \blog-server-node\dao\adminDao.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 这层负责和数据库打交道
const adminModel = require("./model/adminModel");


// 登陆
module.exports.loginDao = async function(loginInfo) {
    // 连接数据库进行过查询
    const result = await adminModel.findOne({
        where: {
            loginId: loginInfo.loginId,
            loginPwd: loginInfo.loginPwd
        }
    })
    return {result};
}
// 更新管理员
module.exports.updateAdminDao = async function(newAccountInfo) {
   return adminModel.update(newAccountInfo, {
        where: {
            loginId: newAccountInfo.loginId
        }
    })
}