const HTMLExtension = ".html";
const CSSExtension = ".css";
 
// Base derived HTML object handle.
// When creating derived custom components you must create other objects which implements 
// the 'HTMLElement' interface object.
class BaseElement extends HTMLElement {

    connectedCallback(){
        this.style.cssText =
            'width: 100%;' +
            'height: 100%;'
        ;
    }
}

// Base component for all other custom components.
// Must be implemented as base class!
export class BaseComponent {

    _baseElement = BaseElement;
    _tagName = "";

    constructor(name) {
        this._tagName = name;
    }
    
    getElement(){
        return this._baseElement;
    }
    
    getTagName() {
        return this._tagName;
    }

    getSourcePath(){
        return this._tagName + "/" + this._tagName + HTMLExtension;
    }
    
    getStylePath(){
        return this._tagName + "/" + this._tagName + CSSExtension;
    }
}