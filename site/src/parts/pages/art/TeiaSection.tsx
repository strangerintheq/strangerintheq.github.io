import React from "react";
import {ProjectItem} from "../../components/ProjectItem";
import {Grid} from "../../components/Grid";
import {PageSubHeader} from "../../components/PageSubHeader";
import {MAX_WIDTH_980, useMediaQuery} from "../../hooks/useMediaQuery";

export function TeiaSection() {
    const {matches: isMobile} = useMediaQuery(MAX_WIDTH_980);
    const img = "site/resources/art/teia/"
    const link = "https://objkt.com/asset/hicetnunc/"
    return <>

        <PageSubHeader>
            <a href={"https://objkt.com/profile/tz2MHcnM7fEVtExELMPBZb5njDweqMGvbn8A/created?faContracts=KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton"}>
                teia.art (nicetnunc) 2021
            </a>
        </PageSubHeader>

        <Grid isMobile={isMobile} ratio={1} rows={isMobile ? 6 : 3}>
            <ProjectItem
                type={"teia"}
                name={"Needlework"}
                link={link + "520033"}
                img={img + "needlework/preview.jpeg"}
            />
            <ProjectItem
                type={"teia"}
                name={"Warp Engine"}
                link={link + "490373"}
                img={img + "warp-engine/preview.jpeg"}
            />
            <ProjectItem
                type={"teia"}
                name={"Re-Tiler"}
                link={link + "468682"}
                img={img + "re-tiler/preview.jpeg"}
            />
            <ProjectItem
                type={"teia"}
                name={"Neural Interface"}
                link={link + "447479"}
                img={img + "neural-interface/preview.jpeg"}
            />
            <ProjectItem
                type={"teia"}
                name={"Artificial Eye"}
                link={link + "440706"}
                img={img + "artificial-eye/preview.jpeg"}
            />
            <ProjectItem
                type={"teia"}
                name={"The Nest"}
                link={link + "404417"}
                img={img + "the-nest/preview.jpeg"}
            />
            <ProjectItem
                type={"teia"}
                name={"Mozaic Perception"}
                link={link + "393547"}
                img={img + "mozaic-perception/preview.jpeg"}
            />
            <ProjectItem
                type={"teia"}
                name={"Dancing Souls"}
                link={link + "384125"}
                img={img + "dancing-souls/preview.jpeg"}
            />
            <ProjectItem
                type={"teia"}
                name={"Nucle"}
                link={link + "343072"}
                img={img + "nucle/preview.png"}
            />
            <ProjectItem
                type={"teia"}
                name={"Inner Sight"}
                link={link + "324272"}
                img={img + "inner-sight/preview.png"}
            />
            <ProjectItem
                type={"teia"}
                name={"Simplicity"}
                link={link + "279928"}
                img={img + "simplicity/preview.png"}
            />
            <ProjectItem
                type={"teia"}
                name={"Steam Cells"}
                link={link + "274293"}
                img={img + "steam-cells/preview.png"}
            />
        </Grid>
    </>
}