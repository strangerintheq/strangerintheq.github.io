import React from "react";
import {GeneratorAsBackground} from "../components/GeneratorAsBackground";
import {randomHash} from "../tools";
import {Navigation} from "../Navigation";
import {PageWrapper} from "../components/PageWrapper";
import {FooterBody} from "../components/FooterBody";
import {makeLink, NavLink} from "../components/NavLink";

function elseHash(type) {
    let hash = randomHash(type);
    document.location.search += "&hash=" + hash;
    return hash;
}

export function GeneratorPage() {

    const params = new URLSearchParams(document.location.search);
    const type = params.get("type");
    const hash = params.get("hash") || elseHash(type);
    const id = params.get("id");

    const next = makeLink({type, id, page: "generator", hash: randomHash(type)});

    return <>
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

        <GeneratorAsBackground
            id={id}
            type={type}
            hash={hash}
        />
    </>
}



