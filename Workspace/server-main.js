const Http = require("http");
const Path = require("path");
const FileSystem = require("fs");

/*
* TODO (TP-002): adjust routing to new environment 
*  
// Get current date and time from the server
app.get('/time', (req, res) =>
{
  res.setHeader('Content-Type', 'application/json');

  let date = new Date();

  let year = date.getFullYear();
  let month = toDoubleDigits(date.getMonth() + 1);
  let day = ("0" + date.getDate()).slice(-2);

  let hours = toDoubleDigits(date.getHours());
  let minutes = toDoubleDigits(date.getMinutes());
  let seconds = toDoubleDigits(date.getSeconds());

  const timeString = hours + ":" + minutes + ":" + seconds;
  const dateString = day + ":" + month + ":" + year;

  res.end(JSON.stringify({
    time: timeString,
    date: dateString
  }));
});
*/

function handleRequest(request)
{

}

// Represent any number as string with two digits where '0' is a placeholder
function toDoubleDigits(dateValue)
{
    return dateValue.toString().length === 2 ? dateValue : "0" + dateValue;
}

// Default Webpage
Http.createServer(function(req,res){
    let filePath = Path.join(
        "./",
        req.url === "/" ? "src/index.html" : req.url
    );
    
    let extName = Path.extname(filePath);
    let contentType = 'text/html';

    switch (extName) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    FileSystem.readFile( "src/index.html", 'utf8',  function(err, data) {
        res.writeHead(200, {'Content-Type':contentType});
        
        const readStream = FileSystem.createReadStream(filePath);
        readStream.pipe(res);
    });
}).listen(3001);