import {BaseComponent} from "../component.js";

class AppElement extends HTMLElement {
    
    connectedCallback(){
        this.style.cssText =
            'width: 100%;' +
            'height: 100%;'
        ;
    }
}

// Main component where the general layout of the webpage takes place.
export class AppComponent extends BaseComponent {
    
    constructor() {
       super("app-context");
       
       this._baseElement = AppElement;
    }
}