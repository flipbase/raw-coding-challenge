const result = require('./result');
const mockDB = require('./mockDB');


module.exports.post = function(body) {
    try {
        let username = body.username;
        let password = body.password;
        let userDB = mockDB.users;
        
        if (password.length > 0 && username.length > 0){
            let user;
            for (let i = 0; i < userDB.length; i++) {
                console.log(userDB[i].username);
                if (username == userDB[i].username) {
                    console.log(userDB[i]);
                    user = userDB[i];
                    break;
                }
            }
            if (user != undefined) {
                if(user.password == password) {
                    if (user.isAdmin) {
                        console.log(1)
                        return new result(200, {"Message":`Hello ${username}`});
                    } else {
                        console.log(2)
                        return new result(403, {"Forbidden":"not andmin"});
                    }
                } else {
                    console.log(3)
                    return new result(403, {"Error":"Invalid username or password"});
                }
            } else {
                console.log(4)
                return new result(404, {"Error":"resource not found"});
            }
        } else {
            console.log(5)
            return new result(400, {"Bad request":"no data"});
        }
    } catch(error){
        console.log(6)
        console.log(error);
        return new result(500, {"Error":"Internal server error"});
    }
}