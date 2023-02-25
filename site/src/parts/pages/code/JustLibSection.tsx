import React from "react";
import {PageSubHeader} from "../../components/PageSubHeader";
import {PageText} from "../../components/PageText";
import {Grid} from "../../components/Grid";
import {MAX_WIDTH_980, useMediaQuery} from "../../hooks/useMediaQuery";
import {GenerativeIcon} from "../../components/GenerativeIcon";

export function JustLibSection() {
    const {matches: isMobile} = useMediaQuery(MAX_WIDTH_980);
    return <>
        <PageSubHeader>
            <a href={"https://github.com/strangerintheq/justlib"}>just-lib</a>
        </PageSubHeader>
        <PageText>
            Collection of javascript functions to faster create an generative artworks.
            Created to participate in&nbsp;
            <a href={"https://genuary.art/"}>genuary</a>
            &nbsp;2023 event.
            Gives ability to use normalized cartesian coordinates both in shaders and 2d canvas.
            Simplifies using of shader uniforms and providing random numbers in compile-time into shaders.
        </PageText>
        <Grid ratio={0.75} isMobile={isMobile} rows={isMobile ? 4 : 2}>
            <iframe className={"codepen"}
                    style={{gridColumn: '1/3', gridRow: '1/3'}}
                    scrolling="no" title="Genuary 4 - Intersections"
                    src="https://codepen.io/strangerintheq/embed/vYaXVwL?default-tab=result&editable=true"
                    frameBorder="no" loading="lazy" allowTransparency="true" allowFullScreen="true">
                See the Pen <a href="https://codepen.io/strangerintheq/pen/vYaXVwL">
                Genuary 4 - Intersections</a> by Stranger in the Q (<a
                href="https://codepen.io/strangerintheq">@strangerintheq</a>)
                on <a href="https://codepen.io">CodePen</a>.
            </iframe>
            <iframe className={"codepen"}
                    style={{
                        gridColumn: !isMobile ? '3/5' : '1/3',
                        gridRow: isMobile ? '3/5' : '1/3'
                    }}
                    scrolling="no" title="Genuary 18 - Definitely not a grid"
                    src="https://codepen.io/strangerintheq/embed/NWBaeVj?default-tab=result&editable=true"
                    frameBorder="no" loading="lazy" allowTransparency="true" allowFullScreen="true">
                See the Pen <a href="https://codepen.io/strangerintheq/pen/NWBaeVj">
                Genuary 18 - Definitely not a grid</a> by Stranger in the Q (<a
                href="https://codepen.io/strangerintheq">@strangerintheq</a>)
                on <a href="https://codepen.io">CodePen</a>.
            </iframe>

        </Grid>

    </>
}