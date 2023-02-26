import React from "react";
import {PageWrapper} from "../components/PageWrapper";
import {Navigation} from "../Navigation";
import {PageHeader} from "../components/PageHeader";
import {RgbaSection} from "./code/RGBA";
import {HareAndCarrotsSection} from "./code/HareAndCarrotsSection";
import {JustLibSection} from "./code/JustLibSection";
import {CollectTheDotsSection} from "./code/CollectTheDotsSection";
import {ComplexplorerSection} from "./code/ComplexplorerSection";
import {PageText} from "../components/PageText";

export function CodePage() {
    return <>
        <PageWrapper>
            <Navigation dark={false}/>
            <PageHeader>Code</PageHeader>
            <PageText>
                Here a collection of stuff made just for fun!
            </PageText>
            <JustLibSection/>
            <HareAndCarrotsSection/>
            <CollectTheDotsSection/>
            <ComplexplorerSection/>
            <RgbaSection/>
        </PageWrapper>
    </>
}