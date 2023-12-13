import React from "react";

import {Navigation} from "../Navigation";
import {PageHeader} from "../components/PageHeader";
import {SliceSection} from "./art/SliceSection";
import {TenturaSection} from "./art/TenturaSection";
import {FxHashSection} from "./art/FxHashSection";
import {TeiaSection} from "./art/TeiaSection";
import {PageWrapper} from "../components/PageWrapper";
import {PageText} from "../components/PageText";
import {XenoSection} from "./art/XenoSection";


export function ArtPage() {

    return <PageWrapper>
        <Navigation/>
        <PageHeader>Art</PageHeader>
        <PageText>
            All of these projects are real-time pseudo-random image generators.
            The same image can never be generated.
            Clicking the link at the bottom of the page will generate a new image.
            Each generated image has its own hash and link.
            Every time you visit that link, you get the same result.
            <br/><br/>
            Please enjoy!
        </PageText>
        {/*<XenoSection />*/}
        <SliceSection />
        <TenturaSection/>
        <FxHashSection/>
        <TeiaSection />
    </PageWrapper>
}