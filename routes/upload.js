/*
 * @Author: Wyfkkk 2224081986@qq.com
 * @Date: 2024-04-27 10:19:52
 * @LastEditors: Wyfkkk 2224081986@qq.com
 * @LastEditTime: 2024-04-27 10:20:06
 * @FilePath: \blog-server-node\routes\upload.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var express = require("express")
const { uploading, formatResponse } = require("../utils/tool")
const multer = require("multer")
const { UploadError } = require("../utils/errors")

var router = express.Router()
// 获取首页标语

router.post("/", async (req, res, next) => {
    // singal方法里手足组件的name值
    uploading.single("file")(req, res, function(err) {
        if(err instanceof multer.MulterError) {
            next(new UploadError("上传文件失败，穷检查文件大小在2mb内"))
        } else {
            const resp = {
                mess: "上传文件成功",
                path: "/static/uploads" + req.file.filename
            }
            res.send(formatResponse(0, "", resp.path))
        }
    })
})
module.exports = router