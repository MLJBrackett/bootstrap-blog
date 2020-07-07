var express = require("express");
var path = require("path");

var app = express();

var HTTP_PORT = process.env.PORT || 8080

app.use(express.static(__dirname + '/dist/web422-a6'));

// Redirect Users to "index.html" if route not accessed using client side routing
app.use((req, res) => {
    res.sendFile(path.join(__dirname + "/dist/web422-a6/index.html"));
});

app.listen(HTTP_PORT, ()=>{
    console.log("listening on port: " + HTTP_PORT);
});
