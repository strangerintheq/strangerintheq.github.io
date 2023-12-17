
import React from "react";
import {ProjectItem} from "../../components/ProjectItem";
import {Grid} from "../../components/Grid";
import {PageSubHeader} from "../../components/PageSubHeader";
import {MAX_WIDTH_980, useMediaQuery} from "../../hooks/useMediaQuery";
import {ExternalLink} from "../../components/ExternalLink";

export function RayhatcherSection() {
    const {matches: isMobile} = useMediaQuery(MAX_WIDTH_980);
    let link = "https://www.fxhash.xyz/generative/"
    let img = "https://media.fxhash.xyz/w_768/";
    const xeno = {
        type: "fx-hash",
        name: "Universal Rayhatcher",
    }
    return <>
        <PageSubHeader>
            <ExternalLink href={"https://www.fxhash.xyz/generative/slug/universal-rayhatcher"}>
                SDF code for Rayhatcher by Piter Pasma @ FxHash 2023 (collab)
            </ExternalLink>
        </PageSubHeader>

        <Grid rows={isMobile ? 4 : 2} ratio={9/16}>
            <ProjectItem
                {...xeno}
                link={link}
                hash={"0xce1803e548db872de97a24ba765362ade2b78c7c2efcdee769bd68eb233877a0"}
                img={img}
            />
        </Grid></>
}