/*
 * @Author: Wyfkkk 2224081986@qq.com
 * @Date: 2024-04-21 20:28:53
 * @LastEditors: Wyfkkk 2224081986@qq.com
 * @LastEditTime: 2024-04-21 20:44:39
 * @FilePath: \mysite-node\mysite-express\utils\errors.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
// 自定义错误 
// 当发生错误，捕获发生的错误，然后抛出我们自定义的错误

/**
 * 业务错误处理基类
 * @param {*} message 错误消息
 */
class ServiceError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
    }
    // 方法
    toResponseJSON() {

    }

}
// 文件上传错误
exports.UploadError = class extends ServiceError{
    constructor(message) {
        super(message, 413);
    }
}
new this.UploadError("文件尺寸过大")



// 禁止访问错误
exports.ForbiddenError = class extends ServiceError{
    constructor(message) {
        super(message, 401);
    }
}
// 验证错误
exports.ValidationError = class extends ServiceError{
    constructor(message) {
        super(message, 406);
    }
}
// 无资源错误（404）
exports.NotFoundError = class extends ServiceError{
    constructor() {
        super("not found", 406);
    }
}
// 未知错误
exports.UnknownError = class extends ServiceError{
    constructor() {
        super("服务端错误", 500);
    }
}
module.exports.ServiceError = ServiceError;