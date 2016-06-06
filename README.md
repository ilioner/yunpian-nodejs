# yunpian-nodejs
云片短信发送SDK
----
# 安装

    npm install yunpian-nodejs -save
    
# 目前功能
###单发

    var YunPianSDK = require('yunpian-nodejs');
    var r = new YunPianSDK("apikey","136xxxxxx46","【yunpian】您的验证码是");
    r.sendMsg();

