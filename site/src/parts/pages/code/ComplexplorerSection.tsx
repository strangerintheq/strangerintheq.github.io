import React from "react";
import {PageSubHeader} from "../../components/PageSubHeader";
import {PageText} from "../../components/PageText";
import {PageWrapper} from "../../components/PageWrapper";
import {GenerativeIcon} from "../../components/GenerativeIcon";

export function ComplexplorerSection() {
    return <>
        <PageSubHeader>
            <a href={"https://strangerintheq.art/mandelbrot.html"}>compleXplorer 0</a>
        </PageSubHeader>
        <PageText>
            Tool for exploring mandelbrot-like complex fractals.
        </PageText>
    </>
}