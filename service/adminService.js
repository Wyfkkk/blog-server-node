// admin 模块的业务逻辑层
const md5 = require("md5");
const jwt = require("jsonwebtoken")
const { ValidationError } = require("../utils/errors")
const { loginDao, updateAdminDao } = require("../dao/adminDao");
const { formatResponse } = require("../utils/tool");
module.exports.loginService = async function(loginInfo) {
    loginInfo.loginPwd = md5(loginInfo.loginPwd);
    // 接下来进行数据验证
    let data = await loginDao(loginInfo);
    console.log(data);
    if(data && data.dataValues) {
        // 添加token
        data = {
            id: data.dataValues.id,
            loginId: data.dataValues.loginId,
            name: data.dataValues.name,
        }
        var loginPeriod = null;
        // 如果用户选中了七天
        if(loginInfo.remember) {
            loginPeriod = parseInt(loginInfo.remember)
        }else {
            loginPeriod = 1;
        }
        // 生成token
        const token = jwt.sign(data, md5(process.env.JWT_SECRET), {expiresIn: 60 * 60 * 24 * loginPeriod})
        return {
            token, data
        }
       // res.headers
    }
    return { data };

}

// 更新
module.exports.updateAdminService = async function(accountInfo) {
    // 查询用户
    const adminInfo = await loginDao({
        loginId: accountInfo.loginId,
        loginPwd:md5(accountInfo.oldLoginPwd)
    })
    // 有用户信息和没有用户信息
    if(adminInfo && adminInfo.dataValues) {
        const newPassword = md5(accountInfo.loginPwd);
       const result = await updateAdminDao({
            name: accountInfo.name,
            loginId: accountInfo.loginId,
            loginPwd: newPassword,
        })
        return formatResponse(0, "", {
            "loginId": accountInfo.loginId,
            "name": accountInfo.name,
            id: adminInfo.dataValues.id
        })
    } else {
        // 密码不对，自定义错误
        throw new ValidationError("旧密码不对")
    }
}