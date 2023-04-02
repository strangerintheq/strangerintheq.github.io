import React from "react";
import {PageWrapper} from "../components/PageWrapper";
import {Navigation} from "../Navigation";
import {PageHeader} from "../components/PageHeader";
import {PageText} from "../components/PageText";
import {PageSubHeader} from "../components/PageSubHeader";
import {ExternalLink} from "../components/ExternalLink";

export function AboutPage() {
    return <>
        <PageWrapper>
            <Navigation dark={false}/>
            <PageHeader>About</PageHeader>
            <PageSubHeader>
                I'm Stranger in the Q and i'm making art with code
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
                <div style={{display: 'flex', flexDirection: "column", gap: '1em'}}>
                    <ExternalLink href={"https://www.artblocks.io/user/0xe0324d6981ccb5b62bdd235366dee6172e0ef116"}>Art Blocks</ExternalLink>
                    <ExternalLink href={"https://www.fxhash.xyz/u/StrangerintheQ"}>Fx(hash)</ExternalLink>
                    <ExternalLink href={"https://twitter.com/stranger_intheq"}>Twitter</ExternalLink>
                    <ExternalLink href={"https://www.instagram.com/stranger_in_the_q/"}>Instagram</ExternalLink>
                    <ExternalLink href={"https://t.me/s/mathimages"}>Telegram</ExternalLink>
                    <ExternalLink href={"https://codepen.io/strangerintheq"}>Codepen</ExternalLink>
                    <ExternalLink href={"https://github.com/strangerintheq/"}>Github</ExternalLink>
                </div>

            </PageText>
            <div className={"separator"}/>
            <div className={"separator"}/>
            <div className={"separator"}/>
            <div className={"separator"}/>
        </PageWrapper>
    </>
}