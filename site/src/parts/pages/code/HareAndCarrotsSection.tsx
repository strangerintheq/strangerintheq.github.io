import React from "react";
import {PageSubHeader} from "../../components/PageSubHeader";
import {PageText} from "../../components/PageText";
import {ExternalLink} from "../../components/ExternalLink";
import {Grid} from "../../components/Grid";
import {DivWithBackgroundImage} from "../../components/DivWithBackgroundImage";

export function HareAndCarrotsSection() {
    return <>
        <PageSubHeader>
            <ExternalLink
                href={"https://rawcdn.githack.com/strangerintheq/hare-and-carrots/c5da3e8e16e666f697ccd176f705464dc7b86eec/build/index.html"}>Hare
                and Carrots</ExternalLink>
        </PageSubHeader>
        <PageText>
            Funny experiment to create a game about small hare written in typescript.
            You can jump around, eat the carrots and...
            There are no game resources at all, everything is generated in run-time.
            Networked version currently is not deployed anywhere, but you can run it yourself locally.<br/><br/>
            Source code:&nbsp;
            <ExternalLink href={"https://github.com/strangerintheq/hare-and-carrots"}>single player</ExternalLink>
            &nbsp;
            <ExternalLink href={"https://github.com/strangerintheq/hare-networked"}>multiplayer</ExternalLink>
            <Grid>
                <DivWithBackgroundImage img={"site/resources/code/hare-0.jpg"}/>
                <DivWithBackgroundImage img={"site/resources/code/hare-1.jpg"}/>
                <DivWithBackgroundImage img={"site/resources/code/hare-2.jpg"}/>
            </Grid>
        </PageText>
    </>
}