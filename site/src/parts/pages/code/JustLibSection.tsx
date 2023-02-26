import React from "react";
import {PageSubHeader} from "../../components/PageSubHeader";
import {PageText} from "../../components/PageText";
import {Grid} from "../../components/Grid";
import {MAX_WIDTH_980, useMediaQuery} from "../../hooks/useMediaQuery";
import {ExternalLink} from "../../components/ExternalLink";
import {DivWithBackgroundImage} from "../../components/DivWithBackgroundImage";

export function JustLibSection() {
    const {matches: isMobile} = useMediaQuery(MAX_WIDTH_980);
    return <>
        <PageSubHeader>
            <ExternalLink href={"https://github.com/strangerintheq/justlib"}>just-lib</ExternalLink>
        </PageSubHeader>
        <PageText>
            Collection of javascript functions to faster create an generative artworks.
            Created to participate in&nbsp;
            <ExternalLink href={"https://genuary.art/"}>genuary</ExternalLink>
            2023 event.
            Gives ability to use normalized cartesian coordinates both in shaders and 2d canvas.
            Simplifies using of shader uniforms and providing random numbers in compile-time into shaders.
        </PageText>
        <Grid>
            <a href="https://codepen.io/strangerintheq/pen/jOpyYaR">
                <DivWithBackgroundImage img={"site/resources/code/justlib-genuary-8.jpg"}/>
            </a>
            <a href="https://codepen.io/strangerintheq/pen/qByrdxY">
                <DivWithBackgroundImage img={"site/resources/code/justlib-genuary-9.jpg"}/>
            </a>
            <a href="https://codepen.io/strangerintheq/pen/vYaXVwL">
                <DivWithBackgroundImage img={"site/resources/code/justlib-genuary-4.jpg"}/>
            </a>
            <a href="https://codepen.io/strangerintheq/pen/yLqbjeE">
                <DivWithBackgroundImage img={"site/resources/code/justlib-genuary-11.jpg"}/>
            </a>
            <a href="https://codepen.io/strangerintheq/pen/NWBaeVj">
                <DivWithBackgroundImage img={"site/resources/code/justlib-genuary-18.jpg"}/>
            </a>
            {/*<a href="">*/}
            {/*    <DivWithBackgroundImage img={"site/resources/code/justlib-.jpg"}/>*/}
            {/*</a>*/}
            {/*<a href="">*/}
            {/*    <DivWithBackgroundImage img={"site/resources/code/justlib-.jpg"}/>*/}
            {/*</a>*/}
            <a href="https://codepen.io/strangerintheq/pen/MWBmqRd">
                <DivWithBackgroundImage img={"site/resources/code/justlib-truchet.jpg"}/>
            </a>
        </Grid>

    </>
}