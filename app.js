/*
 * @Author: Wyfkkk 2224081986@qq.com
 * @Date: 2024-04-21 09:51:36
 * @LastEditors: Wyfkkk 2224081986@qq.com
 * @LastEditTime: 2024-04-21 21:49:45
 * @FilePath: \mysite-node\mysite-express\app.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// 默认读取项目根目录下的.env环境
require("dotenv").config()
// 引入数据库连接
require('./dao/db')

// 创建服务器实例
var app = express();

// 使用中间件
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// 路由中间件
app.use('/', indexRouter);
app.use('/users', usersRouter);
// 错误处理
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
