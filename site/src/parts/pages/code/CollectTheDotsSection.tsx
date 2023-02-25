import React from "react";
import {PageSubHeader} from "../../components/PageSubHeader";
import {PageText} from "../../components/PageText";
import {PageWrapper} from "../../components/PageWrapper";

export function CollectTheDotsSection() {
    return <>
        <PageSubHeader>
            <a href={"https://raw.githack.com/strangerintheq/collect-the-dots/master/index.html"}>Collect the Dots</a>
        </PageSubHeader>
        <PageText>
            <a href={"https://github.com/strangerintheq/collect-the-dots"}>Source code</a>
        </PageText>
    </>
}