/**
 * By TywinZhang
 */

var SmsOperator = require("./lib/SmsOperator.jsx");
var CodeTool = require("./lib/CodeTool.jsx");

//----------------------短信-----------------------//
var codeTool = Object.create(CodeTool);
var data = {};
data.mobile = "18502848620";
data.text = codeTool.getCode();

console.log('------data-----');
console.log(data);
var smsOperator = Object.create(SmsOperator);
console.log(smsOperator.single_send(data));
smsOperator.single_send(data);
//------------------------------------------------//


