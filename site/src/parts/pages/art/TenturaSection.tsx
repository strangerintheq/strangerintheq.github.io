import React from "react";
import {ProjectItem} from "../../components/ProjectItem";
import {ProjectsGrid} from "../../components/ProjectsGrid";
import {ProjectSectionHeader} from "../../components/ProjectSectionHeader";

export function TenturaSection({isMobile}) {
    const imgSize = 640;
    const img = "https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_" + imgSize + ",q_auto/" +
        "https://artblocks-mainnet.s3.amazonaws.com/";
    const link = "https://www.artblocks.io/collections/presents/projects/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/265/tokens/"
    const tentura = {
        type: "artblocks",
        name: "Tentura",
    }
    return <>
        <ProjectSectionHeader>
            <a href={"https://www.artblocks.io/collections/presents/projects/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/265"}>Tentura @ ArtBlocks 2022</a>
            {/*<a style={{float:"right"}} href={sitePath + '/tentura'}>ABOUT</a>*/}
        </ProjectSectionHeader>

        <ProjectsGrid ratio={1} isMobile={isMobile} rows={isMobile ? 4 : 2}>
            <ProjectItem
                {...tentura}
                c={isMobile ? "1/3" : "2/4"}
                r={"1/3"}
                link={link + "265000000"}
                hash={"0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930"}
                img={img + "265000000.png"}
            />
            <ProjectItem
                {...tentura}
                link={link + "265000031"}
                hash={"0x8cf4266960518b81ae27bd417c0b68e4141a2d531dfc44460708e00b98dfb7f4"}
                img={img + "265000031.png"}
            />
            <ProjectItem
                {...tentura}
                link={link + "265000197"}
                hash={"0xe359ebb5e9a5cc2f24b964fc2f33b4e3635b56c08cc77d4cc0290f28ef1656da"}
                img={img + "265000197.png"}
            />
            <ProjectItem
                {...tentura}
                link={link + "265000212"}
                hash={"0xa23afc7294ee196ec119d6a55820b507c227821d4608899f8f1a7ddc06b7af4e"}
                img={img + "265000212.png"}
            />
            <ProjectItem
                {...tentura}
                link={link + "265000269"}
                hash={"0xa7ececac02b48d8f78121349382d77a6134f5d0a6d6f8e7df7afca27d6369a52"}
                img={img + "265000269.png"}
            />
        </ProjectsGrid>
    </>
}