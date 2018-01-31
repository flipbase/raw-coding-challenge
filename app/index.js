const http = require('http')
const port = 3000;
const url = require('url');
const router = require('./router');
const utils = require('./utils');

const requestHandler = (request, response) => {
  // We end our request here; please customise this to your own liking!
  let pathname = url.parse(request.url).pathname;
  let method = request.method;
  let result = router(pathname, method, request);

  result != typeof error ? response.end(result) : response.end({result});

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



// const requestHandler = ((request, response) => {
//   // We end our request here; please customise this to your own liking!
//   console.log(request.method);
//   switch (request.method) {
//     case  'GET' :
//       if (request.url === '/hello-world') {
//         let body = {
//           'Hello':"world"
//         }
//         response.writeHead(200, {'Conent-Type':'apllication/json'});
//         response.write(body.toString());
//       }
//       break
//     case 'POST' :
//       if (request.url === '/hello-world') {
//         response.end('POST on hello-world')
//       }
//       break
//     default :
//       response.end(404, {"Error":"resource not found"})
//   }

//   response.end('Hello Node.js Server!')
// })