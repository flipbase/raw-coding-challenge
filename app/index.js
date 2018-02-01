const http = require('http')
const port = 3000;
const url = require('url');
const router = require('./router');
const utils = require('./utils');

const requestHandler = (request, response) => {    

  let data = function(request){
    return new Promise(function(resolve, reject) {
        utils.fetchData(request).then(function(result){
        resolve (result);
      }).catch(function(error){
        console.log(error);
      })
    })
  };
  
  let serverResponse = function(request, data) {
    return new Promise(function(resolve, reject){
      try {     
      let pathname = url.parse(request.url).pathname;
      let method = request.method;
      resolve (router(pathname, method, data))
      }catch(error){
        console.log(error);
      }
    })
  }

  data(request).then(function(data){
    return(serverResponse(request, data)).then(function(serverResponse){
    console.log("THis is the server data:  "+ JSON.stringify(serverResponse));
      utils.respond(response, serverResponse.result, serverResponse.statusCode);
    })
  }).catch(function(error){
    console.log(error);
    utils.respond(response, error.message, error.code);
  })

      
    //   utils.fetchData(request, callback, function(result, error) {
    //     var want;
    //      if (result) {
    //          want = result;
    //          return want;
    //      } if (error) {
    //        utils.respond(response, {"Error":"unsupported media type"}, 401);
    //      }
    //    });
    // }
    // var please = data(request, function(result) {
    //   console.log(result);
    //   return result;
    // });
}

//const server = http.createServer(requestHandler);
const server = http.createServer(requestHandler);


server.listen(port, (err) => {
  console.log(`Server started on port: ${port}`);
  if (err)
    return console.log('something bad happened', err)
})

// You need to export your application in order to be able to pass the tests!
module.exports = server;


//Promises server
// let data = function(request){
//   return new Promise(function(resolve, reject) {
//       utils.fetchData(request).then(function(result){
//       resolve (result);
//     }).catch(function(error){
//       console.log(error);
//     })
//   })
// };

// let serverResponse = function(request, data) {
//   console.log(data);
//   let pathname = url.parse(request.url).pathname;
//   let method = request.method;
//   return router(pathname, method, data);
// }

// data(request).then(function(data){
//   return(serverResponse(request, data)).then(function(response){
//     utils.respond(response, response.data, response.statusCode);
//   })
// }).catch(function(error){
//   console.log(error);
//   utils.respond(response, error.message, error.code);
// })
