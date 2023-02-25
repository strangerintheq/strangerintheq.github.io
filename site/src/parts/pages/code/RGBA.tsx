import React from "react";
import {PageSubHeader} from "../../components/PageSubHeader";
import {PageText} from "../../components/PageText";
import {Grid} from "../../components/Grid";

export function RgbaSection() {
    return <>
        <PageSubHeader>
            <a href={"https://github.com/strangerintheq/rgba"}>RGBA.js</a>
        </PageSubHeader>
        <PageText>
                Yet another tiny (~250 lines of code) webgl/fragment shader tool.<br/>
                It focusing on hiding webgl/javascript code from you, not too performant,
                but giving ability to write fragment shader code only (in simple cases).<br/>
            Firstly created for using in my&nbsp;
            <a href={"https://codepen.io/collection/AWEWzK"}>codepen experiments</a>.
        </PageText>
        <Grid ratio={1} isMobile={false} rows={1}>

        </Grid>
    </>
}