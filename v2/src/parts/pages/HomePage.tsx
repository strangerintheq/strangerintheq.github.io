import React from "react";
import {PageWrapper} from "../components/PageWrapper";
import {GenerativeHeader} from "../generative-header/GenerativeHeader";


export function HomePage() {
    return <>
        <GenerativeHeader/>
        <PageWrapper>
            <div className={"generative-header"}>
                <div><span>1</span></div>
                <div><span>2</span></div>
            </div>
        </PageWrapper>
    </>
}