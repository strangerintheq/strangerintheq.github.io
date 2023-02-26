import React from "react";
import {ProjectItem} from "../../components/ProjectItem";
import {Grid} from "../../components/Grid";
import {PageSubHeader} from "../../components/PageSubHeader";
import {MAX_WIDTH_980, useMediaQuery} from "../../hooks/useMediaQuery";

export function SliceSection() {
    const {matches: isMobile} = useMediaQuery(MAX_WIDTH_980);
    const imgSize = 640;
    const mainNet = "https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_" + imgSize + ",q_auto/" +
        "https://artblocks-mainnet.s3.amazonaws.com/";
    const staging = "https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_" + imgSize + ",q_auto/" +
        "https://art-blocks-artist-staging-goerli.s3.amazonaws.com/"
    const link = "https://www.artblocks.io/collections/presents/projects/0x99a9b7c1116f9ceeb1652de04d5969cce509b069/419/tokens/"
    const slice = {
        type: "artblocks",
        name: "Slice",
    }
    return <>
        <PageSubHeader>
            <a href={"https://www.artblocks.io/collections/presents/projects/0x99a9b7c1116f9ceeb1652de04d5969cce509b069/419"}>SL/CE @ ArtBlocks 2023</a>
            {/*<a style={{float:"right"}} href={sitePath + '/slice'}>ABOUT</a>*/}
        </PageSubHeader>

        <Grid rows={isMobile ? 4 : 2} ratio={1.618}>
            <ProjectItem
                {...slice}
                c={isMobile ? "1/3" : "2/4"}
                r={"1/3"}
                link={link + "419000000"}
                hash={"0x61464f239e4a9706c864eaf3d8ccc966fe3ec89089752d803ee51adbea37e82c"}
                img={mainNet + "419000000.png"}
            />
            <ProjectItem
                {...slice}
                link={link + "419000000"}
                hash={"0x7905f21577209c5fccc82170001218c7281e1991f6c42f7717adb819e2846805"}
                img={staging + "48000189.png"}
            />
            <ProjectItem
                {...slice}
                link={link + "419000000"}
                hash={"0x0c8313ca762c7c8aa3b4c078435fd0a84aa17fb0872cc152103b8ff6f22f71a3"}
                img={staging + "48000161.png"}
            />
            <ProjectItem
                {...slice}
                link={link + "419000000"}
                hash={"0xecfcfa98860f8fb143d54065186118cc2f429316982597494dc8cffd7f4e4283"}
                img={staging + "48000015.png"}
            />
            <ProjectItem
                {...slice}
                link={link + "419000000"}
                hash={"0xfb031983bdfc22fb8e1c8956d6feb654dfef92b5a7f5de4b08e39681b0f68cd3"}
                img={staging + "48000055.png"}
            />
        </Grid></>
}