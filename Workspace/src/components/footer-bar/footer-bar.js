import {BaseComponent} from "../component.js";

class FooterElement extends HTMLElement {}

// Component to display important data in order to get more information about the website itself.
export class Footerbar extends BaseComponent{
    
    constructor() {
        super("footer-bar");
        
        this._baseElement = FooterElement;
    }
}