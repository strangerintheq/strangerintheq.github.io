import React from "react";
import {ProjectItem} from "../../components/ProjectItem";
import {ProjectsGrid} from "../../components/ProjectsGrid";
import {sitePath} from "../../vars";

export function TeiaSection({isMobile}) {
    const link = "https://objkt.com/asset/hicetnunc/"
    return <>

        <div style={{fontSize: '2em', marginTop: '2em'}}>
            <span>teia.art (ex Hic Et Nunc) 2021</span>
        </div>

        <ProjectsGrid isMobile={isMobile} ratio={1} rows={isMobile ? 6 : 3}>
            <ProjectItem
                type={"teia"}
                name={"Needlework"}
                link={link + "520033"}
                img={"/generator/teia/needlework/preview.jpeg"}
            />
            <ProjectItem
                type={"teia"}
                name={"Warp Engine"}
                link={link + "490373"}
                img={"/generator/teia/warp-engine/preview.jpeg"}
            />
            <ProjectItem
                type={"teia"}
                name={"Re-Tiler"}
                link={link + "468682"}
                img={"/generator/teia/re-tiler/preview.jpeg"}
            />
            <ProjectItem
                type={"teia"}
                name={"Neural Interface"}
                link={link + "447479"}
                img={"/generator/teia/neural-interface/preview.jpeg"}
            />
            <ProjectItem
                type={"teia"}
                name={"Artificial Eye"}
                link={link + "440706"}
                img={"/generator/teia/artificial-eye/preview.jpeg"}
            />
            <ProjectItem
                type={"teia"}
                name={"The Nest"}
                link={link + "404417"}
                img={"/generator/teia/the-nest/preview.jpeg"}
            />
            <ProjectItem
                type={"teia"}
                name={"Mozaic Perception"}
                link={link + "393547"}
                img={"/generator/teia/mozaic-perception/preview.jpeg"}
            />
            <ProjectItem
                type={"teia"}
                name={"Dancing Souls"}
                link={link + "384125"}
                img={"/generator/teia/dancing-souls/preview.jpeg"}
            />
            <ProjectItem
                type={"teia"}
                name={"Nucle"}
                link={link + "343072"}
                img={"/generator/teia/nucle/preview.png"}
            />
            <ProjectItem
                type={"teia"}
                name={"Inner Sight"}
                link={link + "324272"}
                img={"/generator/teia/inner-sight/preview.png"}
            />
            <ProjectItem
                type={"teia"}
                name={"Simplicity"}
                link={link + "279928"}
                img={"/generator/teia/simplicity/preview.png"}
            />
            <ProjectItem
                type={"teia"}
                name={"Steam Cells"}
                link={link + "274293"}
                img={"/generator/teia/steam-cells/preview.png"}
            />
        </ProjectsGrid>
    </>
}