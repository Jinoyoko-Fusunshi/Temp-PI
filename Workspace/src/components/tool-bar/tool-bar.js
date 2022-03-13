import {BaseComponent} from "../component.js"

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
}