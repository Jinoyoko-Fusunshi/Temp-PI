import {BaseComponent, CSSExtension, HTMLExtension, } from "../../scripts/client/component.js";
import {BaseURL} from "../../scripts/client/common.js";

const Views = {
    Home: "home",
    Sensors: "sensors",
};

class ContentViewerElement extends HTMLElement {

    connectedCallback(){
        this.style.cssText =
            'width: 100%;' +
            'height: 100%;'
        ;
    }
}

// Viewer component where specified view is getting displayed in the "AppContext" component.
export class ContentViewer extends BaseComponent {
    _childTag = "";
    
    constructor() {
        super("content-viewer");

        this._baseElement = ContentViewerElement;
    }

    init() {
        const ViewerAttribute= "child";

        let routeName = getURLRoute();
        const tag = document.querySelector(this._tagName);

        if(routeName === "/")
            tag.setAttribute(ViewerAttribute, Views.Home);
        else if(routeName === "/sensors")
            tag.setAttribute(ViewerAttribute, Views.Sensors);

        this._childTag = tag.getAttribute(ViewerAttribute);
    }
    
    getChildSourcePath() {
        return this._childTag + "/" + this._childTag + HTMLExtension;
    }

    getChildStylePath() {
        return this._childTag + "/" + this._childTag + CSSExtension
    }
}

function getURLRoute() {
    let url = document.URL;

    return url.split(BaseURL).filter(x => x !== "")[0];
}