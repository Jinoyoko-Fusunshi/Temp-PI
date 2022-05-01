import {includeStyleSheet, includeSourceContent} from "./environmentLoader.js"

import {AppComponent} from "../../components/app-context/app-context.js"
import {Navigation} from "../../components/navigation-bar/navigation-bar.js"
import {Footerbar} from "../../components/footer-bar/footer-bar.js"
import {ToolBar} from "../../components/tool-bar/tool-bar.js"
import {ContentViewer} from "../../components/content-viewer/content-viewer.js";

const ComponentsPath = "../src/components/";
const ViewsPath = "../src/components/content-viewer/views/";

// Collection of all created custom components.
// Component classes has to be manually added for their full initialization on onload event.
let ComponentCollection = [
    AppComponent,
    ToolBar,
    Navigation,
    Footerbar,
    ContentViewer
];

// Initialize all custom components for the website.
function init(){
    for(let i = 0; i < ComponentCollection.length; ++i) {
        
        // TODO: implement checkup and logic for components, which need async and/or later initialization due to 
        //  dependencies to other elements and/or components for this DOM.
        if(ComponentCollection[i] === ToolBar)
            continue;
        
        let component = new ComponentCollection[i]();
        
        // Register custom HTML elements to the DOM.
        customElements.define(component.getTagName(), component.getElement());
        
        component.init();
        
        if(component instanceof ContentViewer){
            includeStyleSheet(ViewsPath + component.getChildStylePath());
            includeSourceContent(component.getTagName(), ViewsPath + component.getChildSourcePath());
        }else{
            includeStyleSheet(ComponentsPath + component.getStylePath());
            includeSourceContent(component.getTagName(), ComponentsPath + component.getSourcePath());
        }
    }
    
    // Create toolbar at the end to avoid dependency struggles. See upper task.
    let index = ComponentCollection.indexOf(ToolBar);
    let toolBar = new ComponentCollection[index]();
    
    customElements.define(toolBar.getTagName(), toolBar.getElement());

    includeStyleSheet(ComponentsPath + toolBar.getStylePath());
    includeSourceContent(toolBar.getTagName(), ComponentsPath + toolBar.getSourcePath());
    
    toolBar.init();
}

// Main function.
init();