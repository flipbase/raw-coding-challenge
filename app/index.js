const http = require('http')
const port = 3000;
const url = require('url');
const router = require('./router');
const utils = require('./utils');

const requestHandler = (request, response) => {    

  //Fetch data from request body;
  let data = function(request){
    return new Promise(function(resolve, reject) {
        utils.fetchData(request).then(function(result){
        resolve (result);
      }).catch(function(error){
        console.log(error);
      })
    })
  };
  //Processes request and returns response
  let serverResponse = function(request, data) {
    return new Promise(function(resolve, reject){
      try {     
        let pathname = url.parse(request.url).pathname;
        let method = request.method;
        resolve (router(pathname, method, data))
      } catch(error){
        console.log(error);
        }
    });
  };
  //Actual call
  data(request).then(function(data){
      return(serverResponse(request, data))
        .then(function(serverResponse){
          utils.respond(response, serverResponse.result, serverResponse.statusCode);
        })
  }).catch(function(error){
    console.log(error);
    utils.respond(response, error.message, error.code);
  });
};

//const server = http.createServer(requestHandler);
const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  console.log(`Server started on port: ${port}`);
  if (err)
    return console.log('something bad happened', err)
})

// You need to export your application in order to be able to pass the tests!
module.exports = server;
