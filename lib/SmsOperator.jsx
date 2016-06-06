
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
        
        fetch(Config.URI_SEND_SINGLE_SMS, {
            method: 'post',
            headers: {
                    "Accept":"application/json; charset=utf-8",
                    "Content-Type":"application/x-www-form-urlencoded;charset=utf-8"
            },
            body: "mobile="+data.mobile+"&text="+data.text+"&apikey="+data.apikey
        }).then(function(response) {
            return response.json();
        }).then(function(json) {
            if (json.errno) {
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