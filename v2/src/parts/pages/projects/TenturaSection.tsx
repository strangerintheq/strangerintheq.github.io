import React from "react";
import {ProjectItem} from "../../components/ProjectItem";
import {ProjectsGrid} from "../../components/ProjectsGrid";
import {sitePath} from "../../vars";

export function TenturaSection({isMobile}) {
    const imgSize = 640;
    const img = "https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_" + imgSize + ",q_auto/" +
        "https://artblocks-mainnet.s3.amazonaws.com/";
    const tentura = {
        type: "artblocks",
        name: "Tentura",
    }
    return <>

        <div style={{fontSize: '2em', marginTop: '2em'}}>
            <span>Tentura @ ArtBlocks 2022</span>
            <a style={{float:"right"}} href={sitePath + '/tentura'}>ABOUT</a>
        </div>

        <ProjectsGrid ratio={1} isMobile={isMobile} rows={isMobile ? 4 : 2}>
            <ProjectItem
                {...tentura}
                c={isMobile ? "1/3" : "2/4"}
                r={"1/3"}
                id={"265000000"}
                hash={"0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930"}
                img={img + "265000000.png"}
            />
            <ProjectItem
                {...tentura}
                id={"265000031"}
                hash={"0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930"}
                img={img + "265000031.png"}
            />
            <ProjectItem
                {...tentura}
                id={"265000197"}
                hash={"0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930"}
                img={img + "265000197.png"}
            />
            <ProjectItem
                {...tentura}
                id={"265000212"}
                hash={"0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930"}
                img={img + "265000212.png"}
            />
            <ProjectItem
                {...tentura}
                id={"265000269"}
                hash={"0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930"}
                img={img + "265000269.png"}
            />
        </ProjectsGrid>
    </>
}