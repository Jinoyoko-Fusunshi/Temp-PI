import {BaseComponent} from "../component.js";

class NavigationElement extends HTMLElement {
    
    connectedCallback(){
        this.style.cssText =
            'width: 100%;' +
            'height: 100%;'
        ;
    }
}

// Navigation view to switch through all available sections to look at the displayed data.
export class Navigation extends BaseComponent {
    
    constructor() {
        super("navigation-bar");
        
        this._baseElement = NavigationElement;
    }
}