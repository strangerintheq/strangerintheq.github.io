import React from "react";
import {PageSubHeader} from "../../components/PageSubHeader";
import {PageText} from "../../components/PageText";
import {Grid} from "../../components/Grid";
import {DivWithBackgroundImage} from "../../components/DivWithBackgroundImage";
import {ExternalLink} from "../../components/ExternalLink";

export function RgbaSection() {
    return <>
        <PageSubHeader>
            <ExternalLink href={"https://github.com/strangerintheq/rgba"}>RGBA.js</ExternalLink>
        </PageSubHeader>
        <PageText>
            Yet another tiny (~250 lines of code) webgl/fragment shader tool.<br/>
            It focusing on hiding webgl/javascript code from you, not too performant,
            but giving ability to write fragment shader code only (in simple cases).<br/>
            Firstly created for using in my&nbsp;
            <ExternalLink href={"https://codepen.io/collection/AWEWzK"}>codepen experiments</ExternalLink>
        </PageText>
        <Grid>
            <DivWithBackgroundImage/>
            <DivWithBackgroundImage/>
            <DivWithBackgroundImage/>
            <DivWithBackgroundImage/>
        </Grid>
    </>
}