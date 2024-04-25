const jwt = require("jsonwebtoken")
const md5 = require("md5")
// 格式化响应体
module.exports.formatResponse = function(code, msg, data) {
    return {
        "code": code,
        "msg": msg,
        "data": data,
        "status": "ok"
    }
}
module.exports.analysisToken = function(token) {
   return jwt.verify(token.split(" ")[1], md5(process.env.JWT_SECRET))
}

// 处理数组类型
module.exports.handleDataPattern = (data) => {
    const arr = [];
    for (const i of data) {
        arr.push(i.dataValues)
    }
    return arr;
}