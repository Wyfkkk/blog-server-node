/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-04-24 10:08:23
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-04-24 15:50:41
 * @FilePath: \blog-server-node\routes\admin.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var express = require('express');
var router = express.Router();
var {formatResponse} = require("../utils/tool")
const { loginService } = require("../service/adminService")
/* GET home page. */
router.post('/login',async function(req, res, next) {
    // 首先应该验证码
    

    // 假设验证码已经通过
    const result = await loginService(req.body);
   
    if(result.token) {
        res.setHeader("authentication", result.token);
    }
    res.send(formatResponse(0, "", result.data));
});

module.exports = router;
