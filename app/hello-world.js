const result = require('./result');

module.exports.get = function(){
    return new result(200, {"Hello":"world"});
}