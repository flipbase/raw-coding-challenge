module.exports = function(pathname, method, body) {
    console.log('logging bdddd');
    if (method === 'GET') {
         return require('.'+ pathname).get();
    }
    if (method === 'POST') {
        return result = require('.' + pathname).post(body);
    }
}