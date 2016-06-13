/*
 * By TywinZhang
 */
var SmsOperator = require("./lib/SmsOperator.jsx");
var UserOperator = require("./lib/UserOperator.jsx");
var Tools = require("./lib/Tools.jsx");

var YunPianSDK = function () {

    //------单发短信-------//
    this.sendMsg = function () {
        var mobile = this.mobile;
        var text = this.text;
        var apikey = this.apikey;
        return new Promise(function(resolve, reject) {
            var codeTool = Object.create(Tools);
            var data = {};
            var code = codeTool.getCode();
            data.mobile = mobile;
            data.text = text + code;
            data.apikey = apikey;
            console.log('------data-----');
            console.log(data);
            var smsOperator = Object.create(SmsOperator);
            smsOperator.single_send(data, code, function(result) {
                resolve({
                    result: result
                });
                reject({
                    result: result
                });
            });
        });
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