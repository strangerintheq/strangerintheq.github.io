import React from "react";
import {PageWrapper} from "../components/PageWrapper";
import {Navigation} from "../components/Navigation";
import {GeneratorAsBackground} from "../components/GeneratorAsBackground";

export function CodePage() {
    return <>
        <PageWrapper>
            <Navigation dark={false}/>
            <div style={{fontSize: '1.5rem', marginTop: "2rem"}}>
                I like to create stuff for myself, so there are several
            </div>
            <div style={{fontSize: '1.2rem', marginTop: "2rem"}}>

            </div>
        </PageWrapper>
    </>
}