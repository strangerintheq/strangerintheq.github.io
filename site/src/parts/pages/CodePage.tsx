import React from "react";
import {PageWrapper} from "../components/PageWrapper";
import {Navigation} from "../Navigation";
import {PageHeader} from "../components/PageHeader";
import {RgbaSection} from "./code/RGBA";
import {HareAndCarrotsSection} from "./code/HareAndCarrotsSection";
import {JustLibSection} from "./code/JustLibSection";

export function CodePage() {
    return <>
        <PageWrapper>
            <Navigation dark={false}/>
            <PageHeader>Code</PageHeader>
            <JustLibSection/>
            <HareAndCarrotsSection/>
            <RgbaSection/>
        </PageWrapper>
    </>
}