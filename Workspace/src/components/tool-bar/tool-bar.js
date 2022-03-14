import {BaseComponent} from "../../scripts/client/component.js";
import {BaseURL, HTTPMethods, HTTPStatusCodes} from "../../scripts/client/common.js";

class ToolbarElement extends HTMLElement {

    connectedCallback(){
        this.style.cssText =
            'width: 100%;' +
            'height: auto;'
        ;
    }
}

// Component to display a bar with useful data sections from the current attached device.
export class ToolBar extends BaseComponent {

    constructor() {
        super("tool-bar");
        
        this._baseElement = ToolbarElement;
    }
    
    init() {
        /*
        const BarSectionId = "titlebar";
        
        let sections =document.querySelectorAll("body");
        
        console.log(sections.item(0));
        
        let request = new XMLHttpRequest();
        let dateTime;
 
        request.onreadystatechange = function() {
            if (this.status === HTTPStatusCodes.Success)
                dateTime = JSON.parse(this.responseText);
            else if(this.status === HTTPStatusCodes.NotFound)
                dateTime = null;
        }
        
        request.open(HTTPMethods.Get, "/time", false);
        request.send();
        
        let timeLabel = document.createElement("a");
        timeLabel.innerText = dateTime.timeString;
        
        let dateLabel = document.createElement("a");
        dateLabel.innerText = dateTime.dateString;
        */
    }
}