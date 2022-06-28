//const http = require('http');



var http = require('http')
, fs = require('fs');
fs.readFile('./public/images/IMG_8016.png', function(err, data) {
if (err) throw err; // Fail if the file can't be read.


//http.createServer(function(req, res) {
//res.writeHead(200, {'Content-Type': 'image/jpeg'});
//res.end(data); // Send the file data to the browser.
//}).listen(8124);
//console.log('Server running at http://localhost:8124/');
//});




const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello Boerge - Updated!");
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    res.end(data); // Send the file data to the browser.
});
}
)
const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
