import React from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import { Home } from "./Home";
import { Navigation } from "./Navigation";
import { Html } from "./Html";
import { Css } from "./Css";
import { JavaScript } from "./JavaScript";
import { MongoDB } from "./MongoDB";
import { Express } from "./Express";
import { Redux } from "./Redux";
import { Node } from "./Node";
import { Interact } from "./Interact";
import { QA } from "./QA";
import { Doubt } from "./Doubt";
import { More } from "./More";
import { Basics } from "./Basics";
import { Project } from "./Project";

export const Landing=()=>{
    return(
        <BrowserRouter>
         <Navigation />
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/html" element={<Html/>}/>
            <Route path="/css" element={<Css/>}/>
            <Route path="/js" element={<JavaScript/>}/>
            <Route path="/react" element={<Interact/>}/>
            <Route path="/mongo" element={<MongoDB/>}/>
            <Route path="/express" element={<Express/>}/>
            <Route path="/redux" element={<Redux/>}/>
            <Route path="/node" element={<Node/>}/>
            <Route path="/qa" element={<QA/>}/>
            <Route path="/doubt" element={<Doubt/>}/>
            <Route path="/more" element={<More/>}/>
            <Route path="/basics" element={<Basics/>}/>
            <Route path="/project" element={<Project/>}/>
          </Routes>
        </BrowserRouter>
    );
}