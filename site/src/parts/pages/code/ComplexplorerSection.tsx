import React from "react";
import {PageSubHeader} from "../../components/PageSubHeader";
import {PageText} from "../../components/PageText";
import {PageWrapper} from "../../components/PageWrapper";
import {GenerativeIcon} from "../../components/GenerativeIcon";
import {Grid} from "../../components/Grid";
import {DivWithBackgroundImage} from "../../components/DivWithBackgroundImage";
import {NavLink} from "../../components/NavLink";

export function ComplexplorerSection() {

    return <>
        <PageSubHeader>
            <a href={"https://strangerintheq.art/mandelbrot.html"}>compleXplorer 0</a>
        </PageSubHeader>
        <PageText>
            Tool for exploring mandelbrot-like complex fractals. Yo can write a formula using
            glsl syntax and use several functions such as complex addition,
            subtraction, multiplication, division etc. While you exploring - you can copy a
            permanent link for the current view.
            Coloring taken from&nbsp;
            <a href={"https://iquilezles.org/articles/msetsmooth/"}>Inigo Quilez article</a>.
        </PageText>
        <Grid>
            <a href={"https://bit.ly/3cINX73"}>
                <DivWithBackgroundImage img={"site/resources/code/complexplorer0.jpg"}/>
            </a>
            <a href={"https://bit.ly/3cnKEBG"}>
                <DivWithBackgroundImage img={"site/resources/code/complexplorer1.jpg"}/>
            </a>
            <a href={"https://bit.ly/3tK59OT"}>
                <DivWithBackgroundImage img={"site/resources/code/complexplorer2.jpg"}/>
            </a>
            <a href={"https://bit.ly/3vP4xt7"}>
                <DivWithBackgroundImage img={"site/resources/code/complexplorer3.jpg"}/>
            </a>
            <a href={"https://bit.ly/3KEpyk8"}>
                <DivWithBackgroundImage img={"site/resources/code/complexplorer4.jpg"}/>
            </a>
        </Grid>
    </>
}