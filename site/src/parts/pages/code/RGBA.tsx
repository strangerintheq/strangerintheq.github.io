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
            <a href="https://codepen.io/strangerintheq/pen/xxRpowV">
                <DivWithBackgroundImage img={"site/resources/code/rgba-cat-spiral.jpg"}/>
            </a>
            <a href="https://codepen.io/strangerintheq/pen/dyOvmvo">
                <DivWithBackgroundImage img={"site/resources/code/rgba-superformula.jpg"}/>
            </a>
            <a href="https://codepen.io/strangerintheq/pen/xxEJygK">
                <DivWithBackgroundImage img={"site/resources/code/rgba-chlandi.jpg"}/>
            </a>
            <a href="https://codepen.io/strangerintheq/pen/QWKbRgV">
                <DivWithBackgroundImage img={"site/resources/code/rgba-core.jpg"}/>
            </a>
            <a href="https://codepen.io/strangerintheq/pen/abNvxrz">
                <DivWithBackgroundImage img={"site/resources/code/rgba-colorburst.jpg"}/>
            </a>
            <a href="https://codepen.io/strangerintheq/pen/MWexRBr">
                <DivWithBackgroundImage img={"site/resources/code/rgba-chlandi-fbm.jpg"}/>
            </a>
            <a href="https://codepen.io/strangerintheq/pen/ExWWxoO">
                <DivWithBackgroundImage img={"site/resources/code/rgba-photo-filter.jpg"}/>
            </a>
            <a href="https://codepen.io/strangerintheq/pen/VwmYLpR">
                <DivWithBackgroundImage img={"site/resources/code/rgba-chlandi-2.jpg"}/>
            </a>
        </Grid>
    </>
}