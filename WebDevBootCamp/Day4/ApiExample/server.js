var http = require('http');
var data = require('./data');
var data_array = require('./dataArray')

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write(JSON.stringify(data));
    res.write(JSON.stringify(data_array));
    return res.end();

}).listen(8080);
