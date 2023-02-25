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
                I have been working as a software developer for about 2 decades now.
                I develop various user interfaces and other things related to computer graphics.
                At one point I started creating images using code to teach myself math and algorithms.
                Over time, I learned more about it and became very interested in it.
                That's how I realized it was an art, a&nbsp;
                <span style={{fontWeight: "bold"}}>Generative Art</span>.
            </PageText>
            <PageSubHeader>
                Links
            </PageSubHeader>
            <PageText>
                <div style={{display: 'flex', flexDirection:"column", gap:'1em'}}>
                    <a href={"https://twitter.com/stranger_intheq"}>Twitter</a>
                    <a href={"https://t.me/s/mathimages"}>Telegram</a>
                    <a href={"https://codepen.io/strangerintheq"}>Codepen</a>
                    <a href={"https://github.com/strangerintheq/"}>Github</a>
                </div>

            </PageText>
        </PageWrapper>
    </>
}