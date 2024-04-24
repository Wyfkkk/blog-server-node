// admin 模块的业务逻辑层
const md5 = require("md5");
const jwt = require("jsonwebtoken")
const { loginDao } = require("../dao/adminDao");
module.exports.loginService = async function(loginInfo) {
    loginInfo.loginPwd = md5(loginInfo.loginPwd);
    // 接下来进行数据验证
    let data = await loginDao(loginInfo);
    console.log(data,'data');
    if(data && data.dataValues) {
        // 添加token
        data = data.dataValues;
        var loginPeriod = null;
        // 如果用户选中了七天
        if(loginInfo.remember) {
            loginPeriod = parseInt(loginInfo.remember)
        }else {
            loginPeriod = 1;
        }
        // 生成token
        const token = jwt.sign({
            id: data.id,
            loginId: data.loginId,
            name: data.name,
        }, md5(process.env.JWT_SECRET), {expiresIn: 60 * 60 * 24 * loginPeriod})
        return {
            token, data
        }
       // res.headers
    }
    return { data };

}