import React from "react";
import {PageWrapper} from "../components/PageWrapper";
import {Navigation} from "../Navigation";
import {PageHeader} from "../components/PageHeader";
import {RgbaSection} from "./code/RGBA";
import {HareAndCarrotsSection} from "./code/HareAndCarrotsSection";

export function CodePage() {
    return <>
        <PageWrapper>
            <Navigation dark={false}/>
            <PageHeader>Code</PageHeader>
            <RgbaSection/>
            <HareAndCarrotsSection/>
        </PageWrapper>
    </>
}