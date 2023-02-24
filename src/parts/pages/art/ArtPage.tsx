import React from "react";
import {useMediaQuery} from "../../useMediaQuery";
import {PageWrapper} from "../../components/PageWrapper";
import {SliceSection} from "./SliceSection";
import {TenturaSection} from "./TenturaSection";
import {FxHashSection} from "./FxHashSection";
import {TeiaSection} from "./TeiaSection";
import {Navigation} from "../../components/Navigation";
import {ProjectSectionHeader} from "../../components/ProjectSectionHeader";
import {PageHeader} from "../../components/PageHeader";

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