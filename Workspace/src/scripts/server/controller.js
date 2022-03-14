const Path = require("path");
const Common = require("./common");

// All registered view names from our single web application page.
const SubpageURLS = [
    "/",
    "/sensors",
];

// Returns if it's a specific request by looking if the url has a file extension (e.g. *.html).
function isWebRoute(url) {
    let extensionName = Path.extname(url);

    return extensionName === "";
}

// Standard HTML result if no matched file, request or subpage(view) exists.
function returnBadRequest(result) {
    result.writeHead(Common.HTTPStatusCodes.NotFound, {'Content-Type':Common.ContentTypes.HTML});
    result.end("<p>BadRequest!</p>");
}

// Handles all routes, which are specific request coming from the front end to display or handle needed data input.
function handleRequests(request, result) {
    if(!isWebRoute(request.url))
        return false;

    if(request.url === "/time"){
        result.writeHead(Common.HTTPStatusCodes.Success, {'Content-Type':Common.ContentTypes.JSON});
        result.end(JSON.stringify(getTime()));

        return true;
    }

    return false;
}

// Gets the current date and time from the server as combined object.
function getTime() {
    let date = new Date();

    let year = date.getFullYear();
    let month = Common.toDoubleDigits(date.getMonth() + 1);
    let day = ("0" + date.getDate()).slice(-2);

    let hours = Common.toDoubleDigits(date.getHours());
    let minutes = Common.toDoubleDigits(date.getMinutes());
    let seconds = Common.toDoubleDigits(date.getSeconds());

    const timeString = hours + ":" + minutes + ":" + seconds;
    const dateString = day + ":" + month + ":" + year;

    return { timeString, dateString };
}

module.exports = {
    SubpageURLS,
    returnBadRequest,
    handleRequests
}