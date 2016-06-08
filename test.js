/**
 * By TywinZhang
 */

var YunPianSDK = require("./index.js");

//----------------------短信-----------------------//
// var codeTool = Object.create(CodeTool);
// var data = {};
// data.mobile = "";
// data.text = codeTool.getCode();

// console.log('------data-----');
// console.log(data);
// var smsOperator = Object.create(SmsOperator);
// console.log(smsOperator.single_send(data));
// smsOperator.single_send(data);
//------------------------------------------------//

// var indexObj = new Index();
// indexObj.apikey = "7854ed1068casdasdasd8ac94b07";
// // console.log(indexObj.getUser());

// var data = {};

// data.emergency_contact = "TywinWU";
// data.emergency_mobile = "185xxxxx0229";
// data.alarm_balance = "100";
// console.log(data);
// console.log(indexObj.setUser(data));

// var YunPianSDK = require('yunpian-nodejs');
var r = new YunPianSDK();
r.apikey = "742eff2asdasd57eec84cad1f4d9d";
r.mobile = "185asdasd8620";
r.text = "【yunpian】您的验证码是";
var res = r.sendMsg();


