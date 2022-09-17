var express = require('express');
var app = express();
var fs = require("fs");
const https = require('https');



const downloadFile = (req, res) => {
    
    console.log("hi")
    let type = req.params.type
    let ver = req.params.ver
    let ver_new = ver.sub_str(1)

    let filename = "postgresql-" + ver_new  + ".tar.gz"
    let psqlPath = "https://ftp.postgresql.org/pub/source/" + ver + "/" + "postgresql-" + ver_new  + ".tar.gz";
    console.log(psqlPath);
    
    const file = fs.createWriteStream(filename);
    const reqs = https.get(psqlPath, function(resp: any) {
        resp.pipe(file);

        file.on("finish", () => {
            file.close();
            console.log("Download Completed");
        });
    });
}


function createServer(){
    app.get('/downloadFile/:type/:ver', downloadFile);
    var server = app.listen(8081);
}

module.exports = createServer;