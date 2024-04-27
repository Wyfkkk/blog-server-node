/*
 * @Author: Wyfkkk 2224081986@qq.com
 * @Date: 2024-04-24 21:06:00
 * @LastEditors: Wyfkkk 2224081986@qq.com
 * @LastEditTime: 2024-04-27 11:08:35
 * @FilePath: \blog-server-node\utils\tool.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const jwt = require("jsonwebtoken");
const md5 = require("md5");
const multer = require("multer");
const { path } = require("../app");
// 格式化响应体
module.exports.formatResponse = function (code, msg, data) {
  return {
    code: code,
    msg: msg,
    data: data,
    status: "ok",
  };
};
module.exports.analysisToken = function (token) {
  return jwt.verify(token.split(" ")[1], md5(process.env.JWT_SECRET));
};

// 处理数组类型
module.exports.handleDataPattern = (data) => {
  const arr = [];
  for (const i of data) {
    arr.push(i.dataValues);
  }
  return arr;
};

// 设置上传文件的引擎
const storage = multer.diskStorage({
  // 文件存储的位置
  destination: function (req, file, cb) {
    cb(null, __dirname + "/../public/static/uploads");
  },
  // 上传到服务器的文件，文件名要处理
  filename: function (req, file, cb) {
    const baseName = path.basename(file.originalname, path.extname(file.originalname))
    // 获取后缀名
    const extname = path.extname(file.originalname);
    const newName = baseName + new Date().getTime() + Math.floor(Math.random() * 9000 + 1000) + extname;
    cb(null, newName)
  },
});
module.exports.uploading = multer({ 
    storage: storage,
    limits: {
        fileSize: 2000000,
        files: 1
    }
});
