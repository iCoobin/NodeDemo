var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('./214450929880276.key'),
  cert: fs.readFileSync('./214450929880276.pem')
};
var params = {
  hi : 'Hello World!',
  hello : 'Hello Node!'
}
var html = "<html><body><p>Hello World!</p></body></html>"

var server = https.createServer(options ,function(req, res){
    res.writeHead(200, {'Content-Type': 'application/json'});
    // res.end(JSON.stringify(params));
    res.end(html);
}).listen(80);
