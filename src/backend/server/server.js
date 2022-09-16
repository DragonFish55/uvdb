var express = require('express');
var app = express();
var fs = require("fs");
const https = require('https');

const downloadFile = (req, res) => {
    
    console.log("hi")
    /*
    const file = fs.createWriteStream("file.jpg");
    const reqs = https.get("", function(resp: any) {
        resp.pipe(file);

        file.on("finish", () => {
            file.close();
            console.log("Download Completed");
        });
    });

    */
}


function createServer(){
    app.get('/downloadFile', downloadFile);
    var server = app.listen(8081);
}

module.exports = createServer;