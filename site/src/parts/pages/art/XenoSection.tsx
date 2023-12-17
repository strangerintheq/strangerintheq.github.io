import React from "react";
import {ProjectItem} from "../../components/ProjectItem";
import {Grid} from "../../components/Grid";
import {PageSubHeader} from "../../components/PageSubHeader";
import {MAX_WIDTH_980, useMediaQuery} from "../../hooks/useMediaQuery";
import {ExternalLink} from "../../components/ExternalLink";

export function XenoSection() {
    const {matches: isMobile} = useMediaQuery(MAX_WIDTH_980);
    const xeno = {
        type: "alba",
        name: "Xeno",
    }
    return <>
        <PageSubHeader>
            <ExternalLink href={"https://alba.art/projects/xeno"}>Xeno @ Alba 2023</ExternalLink>
        </PageSubHeader>
        <PageSubHeader>
            <ExternalLink
                href={"xeno"}>About project</ExternalLink>
        </PageSubHeader>
        <Grid rows={isMobile ? 4 : 2} ratio={7/5}>
            <ProjectItem
                {...xeno}
                c={isMobile ? "1/3" : "2/4"}
                r={"1/3"}
                link={"419000000"}
                hash={"0xce1803e548db872de97a24ba765362ade2b78c7c2efcdee769bd68eb233877a0"}
                img={"https://i.imgur.com/nyXriJ7.jpg"}
            />
            <ProjectItem
                {...xeno}
                link={"419000000"}
                hash={"0x8e8505064acfe9c414e0d3e62bec29091a3ed51c009a535e7d7a9b1193d84450"}
                img={"https://i.imgur.com/dj9YtNQ.jpg"}
            />
            <ProjectItem
                {...xeno}
                link={"419000000"}
                hash={"0xd8d30d6e6c5b1354db3436b27ded404ae11c47857bd14d8332c563519ce579b0"}
                img={"https://i.imgur.com/m4YwDgK.jpg"}
            />
            <ProjectItem
                {...xeno}
                link={"419000000"}
                hash={"0x9024392034833f9930de1cafd7d4079f8ef71e5e883496f6349a2c6277806a0a"}
                img={"https://i.imgur.com/YFShlC0.jpg"}
            />
            <ProjectItem
                {...xeno}
                link={"419000000"}
                hash={"0xce1803e548db872de97a24ba765362ade2b78c7c2efcdee769bd68eb233877a0"}
                img={"https://i.imgur.com/2k9ATYo.jpg"}
            />
        </Grid></>
}