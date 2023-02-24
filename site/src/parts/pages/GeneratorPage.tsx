import React, {useCallback} from "react";
import {useNavigate, useParams} from "react-router";
import {GeneratorAsBackground} from "../components/GeneratorAsBackground";
import {randomAbHash, randomFxHash} from "../tools";
import {Navigation} from "../components/Navigation";
import {PageWrapper} from "../components/PageWrapper";

export function GeneratorPage() {

    const navigate = useNavigate();

    const { id, hash, type } = useParams();

    return <>
        <PageWrapper>
            <Navigation dark={true}/>
        </PageWrapper>

        <button
            style={{
                position: 'fixed',
                left: 0,
                top: 0,
                lineHeight: 0,
                padding: 0,
                margin: 5
            }}

            onClick={() => {
                let newHash = type === "artblocks" ? randomAbHash() : randomFxHash();
                navigate("/site/art/" + type + "/" + id + "/" + newHash);
            }}>

            <Wand />

        </button>

        <GeneratorAsBackground
            id={id}
            type={type}
            hash={hash}
        />
    </>
}

function Wand() {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-wand"
        width="48" height="48"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#000"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <polyline points="6 21 21 6 18 3 3 18 6 21"/>
        <line x1="15" y1="6" x2="18" y2="9"/>
        <path d="M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"/>
        <path d="M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"/>
    </svg>
}

