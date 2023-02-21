import React from "react";
import {ProjectItem} from "../../components/ProjectItem";
import {ProjectsGrid} from "../../components/ProjectsGrid";

export function SliceSection({isMobile}) {
    const imgSize = 640;
    const mainNet = "https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_" + imgSize + ",q_auto/" +
        "https://artblocks-mainnet.s3.amazonaws.com/";
    const staging = "https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_" + imgSize + ",q_auto/" +
        "https://art-blocks-artist-staging-goerli.s3.amazonaws.com/"
    const slice = {
        type: "artblocks",
        name: "SL/CE",
        generator: 'slice'
    }
    return <ProjectsGrid
        isMobile={isMobile}
        title={"SL/CE"}
        rows={isMobile ? 4 : 2}
        ratio={1.618}
    >
        <ProjectItem
            {...slice}
            c={isMobile ? "1/3" : "2/4"}
            r={"1/3"}
            hash={"0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930"}
            img={mainNet + "419000000.png"}
        />
        <ProjectItem
            {...slice}
            hash={"0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930"}
            img={staging + "48000189.png"}
        />
        <ProjectItem
            {...slice}
            hash={"0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930"}
            img={staging + "48000161.png"}
        />
        <ProjectItem
            {...slice}
            hash={"0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930"}
            img={staging + "48000015.png"}
        />
        <ProjectItem
            {...slice}
            hash={"0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930"}
            img={staging + "48000055.png"}
        />
    </ProjectsGrid>
}