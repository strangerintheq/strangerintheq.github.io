import React from "react";
import {PageSubHeader} from "../../components/PageSubHeader";
import {PageText} from "../../components/PageText";
import {ExternalLink} from "../../components/ExternalLink";

export function CollectTheDotsSection() {
    return <>
        <PageSubHeader>
            <ExternalLink href={"https://raw.githack.com/strangerintheq/collect-the-dots/master/index.html"}>Collect the
                Dots</ExternalLink>
        </PageSubHeader>
        <PageText>
            Experiment to create a simple cell based game building framework.
            Gives ability to create game level design as text based cells types descriptions.
            One cell is described by one symbol. There are several type of cells:
            Empty, Wall, Coin, Key, Door, Spike, Exit, Bot. Development is abandoned. Not finished yet but relatively
            playable.
            <div className={"separator"}/>
            <ExternalLink href={"https://github.com/strangerintheq/collect-the-dots"}>Source code</ExternalLink>
        </PageText>
    </>
}