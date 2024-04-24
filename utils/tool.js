// 格式化响应体
module.exports.formatResponse = function(code, msg, data) {
    return {
        "code": code,
        "msg": msg,
        "data": data,
        "status": "ok"
    }
}