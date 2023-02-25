import React from "react";
import {PageSubHeader} from "../../components/PageSubHeader";
import {PageText} from "../../components/PageText";
import {PageWrapper} from "../../components/PageWrapper";

export function HareAndCarrotsSection() {
    return <>
        <PageSubHeader>
            <a href={"https://rawcdn.githack.com/strangerintheq/hare-and-carrots/c5da3e8e16e666f697ccd176f705464dc7b86eec/build/index.html"}>Hare and Carrots</a>
        </PageSubHeader>
        <PageText>
            Funny experiment to create a game about small hare written in typescript. <br/>
            You can jump around, eat the carrots and...<br/>
            There are no game resources at all, everything is generated in run-time.
            Networked version currently is not deployed anywhere, but you can run it yourself locally.<br/><br/>
            Source code:&nbsp;
            <a href={"https://github.com/strangerintheq/hare-and-carrots"}>single player</a>
            &nbsp;
            <a href={"https://github.com/strangerintheq/hare-networked"}>multiplayer</a>
        </PageText>
    </>
}