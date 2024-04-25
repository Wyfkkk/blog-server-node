/*
 * @Author: Wyfkkk 2224081986@qq.com
 * @Date: 2024-04-25 09:52:34
 * @LastEditors: Wyfkkk 2224081986@qq.com
 * @LastEditTime: 2024-04-25 10:09:30
 * @FilePath: \blog-server-node\routes\captcha.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var express = require('express');
var router = express.Router();
var { formatResponse, analysisToken } = require("../utils/tool")

const { getCaptchaService } = require("../service/captchaService");

// 
router.get("/", async function (req, res, next) {
    
    // 生成一个验证码
    const captcha = await getCaptchaService();
    req.session.captcha = captcha.text;
    res.setHeader("Content—Type", "image/svg+xml")
    res.send(captcha.data)
})

module.exports = router;