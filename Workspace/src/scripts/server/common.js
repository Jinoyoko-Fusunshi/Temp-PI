const Path = require("path");

// Enum for all current needed HTTP Status codes.
const HTTPStatusCodes = {
    Success: 200,
    NotFound: 404,
};

// All HTTP content types which are needed to write into the head of a HTTP request.
const ContentTypes = {
    Text: 'text/plain',
    HTML: 'text/html',
    CSS: 'text/css',
    JS: 'text/javascript',
    JSON: 'application/json',
    PNG: 'image/png',
    JPG: 'image/jpg',
    ICON: 'image/png',
    NONE: '',
};

// Returns the specified content type based on the file extension.
function getFileContentType(fileName) {
    let extensionName = Path.extname(fileName);

    switch (extensionName) {
        case '.html':
            return ContentTypes.HTML;
        case '.css':
            return ContentTypes.CSS;
        case '.js':
            return ContentTypes.JS;
        case '.json':
            return ContentTypes.JSON;
        case '.png':
            return ContentTypes.PNG;
        case '.jpg':
            return ContentTypes.JPG;
        case '.ico':
            return ContentTypes.ICON;
        case '':
            return ContentTypes.NONE;
    }
}

// Represent any number as string with two digits where '0' is a placeholder.
function toDoubleDigits(dateValue) {
    return dateValue.toString().length === 2 ? dateValue : "0" + dateValue;
}

module.exports = {
    HTTPStatusCodes,
    ContentTypes,
    getFileContentType,
    toDoubleDigits
}

