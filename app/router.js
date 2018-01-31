

module.exports = function(pathname, method, request) {
    if (method === 'GET') {
        return result = require('.'+ pathname).get(request);
    }
    if (method === 'POST') {
        return result = require('.' + pathname).post(request);
    }
}