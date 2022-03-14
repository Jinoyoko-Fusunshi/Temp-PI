const Header = "head";
const GetMethod = "GET";

function generateLinkMarkup(path) {
    return "<link rel='stylesheet' type='text/css' href='" + path + "' />";
}

// Adds a new linker to our stylesheet for the current custom component.
// The new link entry goes to the 'index.html' in order to have all it's resource an act as single webpage application.
export function includeStyleSheet(path) {
    let headTag = document.getElementsByTagName(Header)[0];
    let link = generateLinkMarkup(path);
    
    headTag.innerHTML += link;
}

// Sends a local HTTP Request for the frontend to acquire the HTML structure of the component and fills
// the registered markup with the structure content of the current component.
export function includeSourceContent(name, path) {
    let tags = document.getElementsByTagName(name);
    
    for (let i = 0; i < tags.length; i++) {
        let request = new XMLHttpRequest();
        
        request.onreadystatechange = function() {
            if(this.readyState === 4) {
                if (this.status === 200){
                    tags[i].innerHTML = this.responseText;
                }
                else if(this.status === 404){
                    tags[i].innerHTML = "Source not found!";
                }
            }
        }

        request.open(GetMethod, path, false);
        request.send();
    }
}