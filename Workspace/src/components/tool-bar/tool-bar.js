import {BaseComponent} from "../../scripts/client/component.js";
import {HTTPMethods, HTTPStatusCodes} from "../../scripts/client/common.js";

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
        let sections = document.getElementsByClassName("dataSection");
        let dateResult = this.sendDateRequest();

        // Initialize dynamically the 'a' elements with unique identifiers.
        let timeLabel = document.createElement("a");
        timeLabel.className = "timeLabel";
        timeLabel.innerText = "Uhrzeit: " + dateResult.timeString;

        sections[0].after(timeLabel);
        
        let dateLabel = document.createElement("a");
        dateLabel.className = "dateLabel";
        dateLabel.innerText = "Datum: " + dateResult.dateString;

        sections[1].after(dateLabel);
        
        // Adds a timer events every second to update the display data segments.
        setInterval(() => {
           this.refreshDateDisplay()
        }, 1000);
    }
    
    // The local time request to receive the current date parameters from the host device.
    sendDateRequest()
    {
        let request = new XMLHttpRequest();
        let result;
        
        request.onreadystatechange = function() {
            if (this.status === HTTPStatusCodes.Success)
                result = JSON.parse(this.responseText);
            else if(this.status === HTTPStatusCodes.NotFound)
                result = null;
        }
        
        request.open(HTTPMethods.Get, "/time", false);
        request.send();
        
        return result;
    }
    
    // Update the text of the selected 'a' elements of the Toolbar component by 
    // a new '/time' request.
    refreshDateDisplay()
    {
        let dateResult = this.sendDateRequest();

        let timeLabel = document.getElementsByClassName("timeLabel")[0];
        let dateLabel= document.getElementsByClassName("dateLabel")[0];
        
        timeLabel.innerHTML = "Uhrzeit: " + dateResult.timeString;
        dateLabel.innerHTML = "Datum: " + dateResult.dateString;
    }
}