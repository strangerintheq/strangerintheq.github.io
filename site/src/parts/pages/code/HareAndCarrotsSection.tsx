import React from "react";
import {PageSubHeader} from "../../components/PageSubHeader";
import {PageText} from "../../components/PageText";
import {PageWrapper} from "../../components/PageWrapper";

export function HareAndCarrotsSection() {
    return <>
        <PageSubHeader>
            <a href={"https://github.com/strangerintheq/hare-and-carrots"}>Hare and Carrots</a>
        </PageSubHeader>
        <PageText>
            Funny experiment to create a game about hare. <br/>
            You can jump around, eat the carrots and...
        </PageText>
    </>
}