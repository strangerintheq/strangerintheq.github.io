import React from "react";

import {Navigation} from "../Navigation";
import {PageHeader} from "../components/PageHeader";
import {SliceSection} from "./art/SliceSection";
import {TenturaSection} from "./art/TenturaSection";
import {FxHashSection} from "./art/FxHashSection";
import {TeiaSection} from "./art/TeiaSection";
import {PageWrapper} from "../components/PageWrapper";
import {useMediaQuery} from "../hooks/useMediaQuery";


export function ArtPage() {
    const {matches: isMobile} = useMediaQuery("(max-width: 980px)");
    return <PageWrapper>
        <Navigation/>
        <PageHeader>Art</PageHeader>
        <SliceSection isMobile={isMobile}/>
        <TenturaSection isMobile={isMobile}/>
        <FxHashSection isMobile={isMobile}/>
        <TeiaSection isMobile={isMobile}/>
    </PageWrapper>
}