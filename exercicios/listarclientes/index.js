var http = require('http') //  modulo http 
  , fs = require('fs')  //  modulo file system 
  , qs = require('querystring'); // modulo  querystring parser
var request = require('request');

// create the http server
http.createServer(function (req, res) {

  // handle the routes
  if (req.method == 'POST') {
		var postData = "";
		req.setEncoding("utf8");
		req.addListener("data", function(postDataChunk) {
			postData += postDataChunk;
			console.log("Received POST data chunk '"+
				postDataChunk + "'.");
		});

		req.addListener("end", function() {
     	var $POST = qs.parse(postData);

      request(
        { method: 'PUT'
        , uri: 'http://mikeal.iriscouch.com/testjs/' + rand
        , multipart:
          [ { 'content-type': 'application/json'
            ,  body: JSON.stringify({foo: 'bar', _attachments: {'message.txt': {follows: true, length: 18, 'content_type': 'text/plain' }}})
            }
          , { body: 'I am an attachment' }
          ]
        }
      , function (error, response, body) {
          if(response.statusCode == 201){
            console.log('document saved as: http://mikeal.iriscouch.com/testjs/'+ rand)
          } else {
            console.log('error: '+ response.statusCode)
            console.log(body)
          }
        }
      )

      // pipe the request data to the response to view on the web
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end();
		});

  } else {
    
    var html = fs.readFileSync('./index.html');
    // for GET requests, serve up the contents in 'index.html'
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
  }

}).listen(8000);