import React from "react";
import {PageWrapper} from "../components/PageWrapper";
import {Navigation} from "../components/Navigation";


export function HomePage() {
    return <>
        <PageWrapper>
            <Navigation/>
            <div>
                Hello there!
            </div>
        </PageWrapper>
    </>
}