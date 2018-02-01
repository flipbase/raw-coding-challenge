
var headers = {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
    "access-control-allow-headers": "content-type, accept",
    "access-control-max-age": 10, // Seconds.
    'Content-Type': "application/json"
  };
  

module.exports.body = function body(data) {
    this.data = data != typeof error ? data : data.message;
    console.log(this);
}

exports.respond = function(response, data, statusCode){
try {
    console.log(data, statusCode);
    response.writeHead(statusCode, headers);
    response.end(JSON.stringify(data));
    return;
} catch(error){
  console.log(error);
  response.writeHead(500, headers);
  response.end(JSON.stringify({"Error":"Internal server error"}));
  return
}
  };
  
  exports.fetchData = function(request){
    return new Promise(function(resolve, reject){
      try {
        var data = "";
        request.on('data', function(chunk){
          data += chunk;
        });
        request.on('end', function(){
          if (data === ""){
            resolve (data)
          } else {
          resolve (JSON.parse(data));
          }
        });
      }catch(error){
        reject(error);
      }
   })
  };

  