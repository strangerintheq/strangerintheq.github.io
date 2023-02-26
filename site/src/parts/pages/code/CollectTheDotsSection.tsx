import React from "react";
import {PageSubHeader} from "../../components/PageSubHeader";
import {PageText} from "../../components/PageText";
import {PageWrapper} from "../../components/PageWrapper";
import {GenerativeIcon} from "../../components/GenerativeIcon";
import {ExternalLinkIcon} from "../../components/ExternalLinkIcon";

export function CollectTheDotsSection() {
    return <>
        <PageSubHeader>
            <a href={"https://raw.githack.com/strangerintheq/collect-the-dots/master/index.html"}>Collect the Dots</a><ExternalLinkIcon/>
        </PageSubHeader>
        <PageText>
            Experiment to create a simple cell based game building framework.
            Gives ability to create game level design as text based cells types descriptions.
            One cell is described by one symbol. There are several type of cells:
            Empty, Wall, Coin, Key, Door, Spike, Exit, Bot. Development is abandoned. Not finished yet but relatively playable.
            <div className={"separator"}/>
            <a href={"https://github.com/strangerintheq/collect-the-dots"}>Source code</a><ExternalLinkIcon/>
        </PageText>
    </>
}