/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require("express");
var app = express();

app.use(express.static("public"));
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
});
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
});

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
});
app.listen(process.env.PORT||3000, function(){
    console.log('Your node js server is running');
});
//var port_number = server.listen(process.env.PORT || 3000);
//app.listen(port_number);
//console.log('Your node js server is running');
//var server = app.listen(8081, function () {
//   var host = server.address().address
//   var port = server.address().port
//   console.log("Example app listening at http://%s:%s", host, port)
//
//})