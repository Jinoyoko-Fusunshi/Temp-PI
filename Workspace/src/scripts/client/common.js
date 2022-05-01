// Enum for all current needed HTTP Status codes.
export const HTTPStatusCodes = {
    Success: 200,
    NotFound: 404,
};

// Enum for all current needed HTTP Methods
export const HTTPMethods = {
    Get: "GET"
}

export const BaseURL = ReadURI();

// All HTTP content types which are needed to write into the head of a HTTP request.
export const ContentTypes = {
    HTML: 'text/html',
    CSS: 'text/css',
    JS: 'text/javascript',
    JSON: 'application/json',
    PNG: 'image/png',
    JPG: 'image/jpg',
    ICON: 'image/png',
    NONE: '',
};

function ReadURI(){
    let protocol = window.location.protocol;
    let domain = window.location.hostname;
    let port = window.location.port;
    
    return protocol + '//' + domain + ':' + port;
}