/*
 * By TywinZhang
 */
var SmsOperator = require("./lib/SmsOperator.jsx");
var UserOperator = require("./lib/UserOperator.jsx");
var Tools = require("./lib/Tools.jsx");

var YunPianSDK = function () {
    var codeTool = Object.create(Tools);
    
    //------单发短信-------//
    this.sendMsg = function () {
        var codeTool = Object.create(Tools);
        var data = {};
        data.mobile = this.mobile;
        data.text = this.text + codeTool.getCode();
        data.apikey = this.apikey;
        console.log('------data-----');
        console.log(data);
        var smsOperator = Object.create(SmsOperator);
        smsOperator.single_send(data);
    }
    
    
    
    //-----账户---------//
    this.getUser = function () {
        var data = {};
        data.apikey = this.apikey;
        var userOperator = Object.create(UserOperator);
        return userOperator.user_get(data);
    }
    
    this.setUser = function (data) {
        data.apikey = this.apikey;
        console.log(data);
        var userOperator = Object.create(UserOperator);
        return userOperator.user_set(data);
    }
}

module.exports = YunPianSDK;