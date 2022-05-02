const Common = require("./common.js");
const Server = require("./controller.js");
const sensor = require("node-dht-sensor");

const Http = require("http");
const Path = require("path");
const FileSystem = require("fs");

const BasePort = 3001;

// Checks if the route has the name of one of the registered view components.
function isSubpage(url) {
    return Server.SubpageURLS.indexOf(url) > -1;
}

// Returns if the passed filename is a needed local file for the website.
function isWebResource(filename) {
    return Common.getFileContentType(filename) !== Common.ContentTypes.NONE;
}

// Server creation method. Iterates through all requested local files from the 'index.html' file.
Http.createServer(function(request, result) {
    const IndexPath = "./src/index.html";
    
    let filePath = "";

    // Check URL on it's possible processable types.
    if(isSubpage(request.url)) {
        filePath = IndexPath;
    } else if(Server.handleRequests(request, result)) {
        return;
    } else if(isWebResource(request.url)) {
        filePath = Path.join("./", request.url);
    } else {
        Server.returnBadRequest(result);
        return;
    }
    
    let contentType = Common.getFileContentType(filePath);
    
    // Bind depending resources written in the 'index.html' to webpage (*.css, *.js, .. files).
    // Only do this when the current URL describes a file request!
    FileSystem.readFile(IndexPath, 'utf8',  function(err, data) {
        const readStream = FileSystem.createReadStream(filePath);
        
        result.writeHead(Common.HTTPStatusCodes.Success, {'Content-Type':contentType});
        readStream.pipe(result);
    });
}).listen(BasePort);
