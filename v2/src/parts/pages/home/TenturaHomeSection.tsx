import React from "react";
import {ProjectThumbnail} from "../../components/ProjectThumbnail";
import {ProjectItem} from "../../components/ProjectItem";
import {useMediaQuery} from "../../parts/useMediaQuery";
import {ProjectsGrid} from "./ProjectsGrid";

export function TenturaHomeSection(props) {

    const {matches: isMobile} = useMediaQuery("(max-width: 980px)");

    const imgSize = 640;

    const img = "https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_" + imgSize + ",q_auto/" +
        "https://artblocks-mainnet.s3.amazonaws.com/";

    const tentura = {
        type: "artblocks",
        name: "Tentura",
        generator: 'tentura'
    }

    return <ProjectsGrid title={"Tentura"} ratio={1} isMobile={isMobile} rows={isMobile ? 4 : 2}>
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
            c={1}
            r={isMobile ? 3 : 1}
            id={"265000031"}
            hash={"0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930"}
            img={img + "265000031.png"}
        />

        <ProjectItem
            {...tentura}
            c={1}
            r={isMobile ? 4 : 2}
            id={"265000197"}
            hash={"0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930"}
            img={img + "265000197.png"}
        />

        <ProjectItem
            {...tentura}
            c={isMobile ? 2 : 4}
            r={isMobile ? 3 : 1}
            id={"265000212"}
            hash={"0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930"}
            img={img + "265000212.png"}
        />

        <ProjectItem
            {...tentura}
            c={isMobile ? 2 : 4}
            r={isMobile ? 4 : 2}
            id={"265000269"}
            hash={"0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930"}
            img={img + "265000269.png"}
        />
    </ProjectsGrid>
}