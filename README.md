# yunpian-nodejs
云片短信发送SDK
----
# 安装

    npm install yunpian-nodejs -save
    
# 目前功能
###单发

    var YunPianSDK = require('yunpian-nodejs');
    var r = new YunPianSDK();
    r.apikey = "742eff2exxxxxxc84cad1f4d9d";
    r.mobile = "185xxxx8620";
    r.text = "【yunpian】您的验证码是";
    r.sendMsg(function(result){
    console.log('--------result------');
    console.log(result);
    });

