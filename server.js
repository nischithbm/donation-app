const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('public'));

app.get("/hello", function (req, res) {
	res.send("Hello World!!");
});

app.listen(port, function(err) {
	console.log("server is running");
});