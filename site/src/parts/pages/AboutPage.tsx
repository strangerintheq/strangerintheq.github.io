import React from "react";
import {PageWrapper} from "../components/PageWrapper";
import {Navigation} from "../Navigation";
import {PageHeader} from "../components/PageHeader";
import {PageText} from "../components/PageText";
import {PageSubHeader} from "../components/PageSubHeader";

export function AboutPage() {
    return <>
        <PageWrapper>
            <Navigation dark={false}/>
            <PageHeader>About</PageHeader>
            <PageSubHeader>
                Hello there! I'm Stranger in the Q and i'm making art with code.
            </PageSubHeader>
            <PageText>
                I have been a software developer for about 2 decades now.
                I develop different user interfaces and other things related to computer graphics.
                At some point I started creating images with code to teach myself math and algorithms.
                As time went on I learned more about it and became more interested in it.
                That's how I realized that it's an art, a&nbsp;
                <span style={{fontWeight: "bold"}}>Generative Art</span>.
            </PageText>
        </PageWrapper>
    </>
}