/*
 * By TywinZhang
 */
var SmsOperator = require("./lib/SmsOperator.jsx");
var CodeTool = require("./lib/CodeTool.jsx");

var YunPianSDK = function (apikey,mobile) {
    var codeTool = Object.create(CodeTool);
    this.apikey = apikey;
    this.mobile = mobile;
    this.text = codeTool.getCode();
    this.sendMsg = function () {
        var codeTool = Object.create(CodeTool);
        var data = {};
        data.mobile = this.mobile;
        data.text = this.text;
        data.apikey = this.apikey;
        console.log('------data-----');
        console.log(data);
        var smsOperator = Object.create(SmsOperator);
        console.log(smsOperator.single_send(data));
        smsOperator.single_send(data);
    }
}

module.exports = YunPianSDK;