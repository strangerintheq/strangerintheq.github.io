import React from "react";
import {GeneratorFrame} from "../components/GeneratorFrame";
import {randomHash} from "../tools";
import {Navigation} from "../Navigation";
import {PageWrapper} from "../components/PageWrapper";
import {FooterBody} from "../components/FooterBody";
import {NavLink} from "../components/NavLink";
import {ProjectsTypes} from "./art/ProjectsTypes";
import {Stack} from "../components/Stack";
import {LoaderMask} from "../components/LoaderMask";

export function GeneratorPage({route}) {
    // console.log("GeneratorPage",route)
    const [,id,hash] = route.split("/")
    const next = "art/" + id + "/" + randomHash(ProjectsTypes[id]);

    return <Stack>
        <GeneratorFrame id={id} hash={hash}/>
        <LoaderMask/>
        <PageWrapper>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                height: "100vh",
                pointerEvents: "none"
            }}>
                <Navigation dark={true}/>
                <FooterBody>
                    <NavLink to={next}>{id}</NavLink>
                </FooterBody>
            </div>
        </PageWrapper>
    </Stack>
}



