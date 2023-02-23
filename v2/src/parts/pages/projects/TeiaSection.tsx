import React from "react";
import {ProjectItem} from "../../components/ProjectItem";
import {ProjectsGrid} from "../../components/ProjectsGrid";
import {sitePath} from "../../vars";

export function TeiaSection({isMobile}) {

    return <>

        <div style={{fontSize: '2em', marginTop: '2em'}}>
            <span>teia.art (ex Hic Et Nunc) 2021</span>
        </div>

        <ProjectsGrid isMobile={isMobile} ratio={1} rows={isMobile ? 6 : 3}>
            <ProjectItem
                type={"teia"}
                name={"Needlework"}
                img={"/v2/generators/teia/needlework/preview.jpeg"}
            />
            <ProjectItem
                type={"teia"}
                name={"Warp Engine"}
                img={"/v2/generators/teia/warp-engine/preview.jpeg"}
            />
            <ProjectItem
                type={"teia"}
                name={"Re-Tiler"}
                img={"/v2/generators/teia/re-tiler/preview.jpeg"}
            />
            <ProjectItem
                type={"teia"}
                name={"Neural Interface"}
                img={"/v2/generators/teia/neural-interface/preview.jpeg"}
            />
            <ProjectItem
                type={"teia"}
                name={"Artificial eye"}
                img={"/v2/generators/teia/artificial-eye/preview.jpeg"}
            />
            <ProjectItem
                type={"teia"}
                name={"The Nest"}
                img={"/v2/generators/teia/the-nest/preview.jpeg"}
            />
            <ProjectItem
                type={"teia"}
                name={"Mozaic Perception"}
                img={"/v2/generators/teia/mozaic-perception/preview.jpeg"}
            />
            <ProjectItem
                type={"teia"}
                name={"Dancing Souls"}
                img={"/v2/generators/teia/dancing-souls/preview.jpeg"}
            />
            <ProjectItem
                type={"teia"}
                name={"Nucle"}
                img={"/v2/generators/teia/nucle/preview.png"}
            />
            <ProjectItem
                type={"teia"}
                name={"Inner Sight"}
                img={"/v2/generators/teia/inner-sight/preview.png"}
            />
            <ProjectItem
                type={"teia"}
                name={"Simplicity"}
                img={"/v2/generators/teia/simplicity/preview.png"}
            />
            <ProjectItem
                type={"teia"}
                name={"Steam Cells"}
                img={"/v2/generators/teia/steam-cells/preview.png"}
            />
        </ProjectsGrid>
    </>
}