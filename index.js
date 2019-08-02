let express = require('express');
const PORT = 80;
var app = express();
app.listen(PORT, ()=> {
    console.log("My http server listening on port " + PORT + "...");
});
app.get('/foo', (req, res)=> {
    console.log('Hello, I am foo.');
});