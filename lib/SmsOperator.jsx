
/*
 * By TywinZhang
 */

var Config = require("./yunpian_config.jsx");
var fetch  = require("node-fetch");
var SmsOperator = {
    
    //单发
    single_send:function (data) {
    
        if (data.mobile == null) {
            return {"MSG":"mobile 为空"};
        }
        
        if (data.text == null) {
            return {"MSG":"text 为空"};
        }
        
        
        console.log("----------data-----------");
        console.log(JSON.stringify(data));
        console.log("----------url-----------");
        console.log(Config.URI_SEND_SINGLE_SMS);
        
        fetch(Config.URI_SEND_SINGLE_SMS, {
            method: 'post',
            headers: {
                    "Accept":"application/json; charset=utf-8",
                    "Content-Type":"application/x-www-form-urlencoded;charset=utf-8"
            },
            body: "mobile="+data.mobile+"&text=【四川爱礼科技有限公司】您的验证码是"+data.text+"&apikey="+Config.APIKEY
        }).then(function(response) {
            return response.json();
        }).then(function(json) {
            if (json.errno) {
                // dispatch(onLoginError(json.errmsg));
                console.log('------error------');
                console.log(json);
            } else {
                console.log('------success------');
                console.log(json);
            }
        });
    }
}

module.exports = SmsOperator;