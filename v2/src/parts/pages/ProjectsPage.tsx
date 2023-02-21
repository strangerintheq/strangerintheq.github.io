import React from "react";
import {TenturaHomeSection} from "./home/TenturaHomeSection";
import {SliceHomeSection} from "./home/SliceHomeSection";
import {FxHashHomeSection} from "./home/FxHashHomeSection";

export function ProjectsPage() {
    return <div>
        <h1>Projects</h1>
        <TenturaHomeSection/>
        <SliceHomeSection/>
        <FxHashHomeSection/>
    </div>
}