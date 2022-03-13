import {includeStyleSheet, includeSourceContent} from "./tools/environmentLoader.js"

import {AppComponent} from "../components/app-context/app-context.js"
import {Navigation} from "../components/navigation-bar/navigation-bar.js"
import {Footerbar} from "../components/footer-bar/footer-bar.js"
import {ToolBar} from "../components/tool-bar/tool-bar.js"

const ComponentsPath = "../src/components/";

// Collection of all created custom components.
// Component classes has to be manually added for their full initialization on onload event.
let ComponentCollection = [
    AppComponent,
    ToolBar,
    Navigation,
    Footerbar,
];

// Initialize all custom components for the website.
function init(){
    for(let i = 0; i < ComponentCollection.length; ++i) {
        let component = new ComponentCollection[i]();
        customElements.define(component.getTagName(), component.getElement());
        
        includeStyleSheet(ComponentsPath + component.getStylePath());
        includeSourceContent(component.getTagName(), ComponentsPath + component.getSourcePath());
    }
}

// Main function.
init();