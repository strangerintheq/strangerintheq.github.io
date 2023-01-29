import React from "react";
import {Link} from "react-router-dom";
import {sitePath} from "../Crutch";

export function PageHeader({img, rotate}: { img, rotate? }) {
    return <>

        {rotate && <div dangerouslySetInnerHTML={{
            __html: `<style>
                @keyframes rotate {
                    0% {transform: rotate(-30deg)}
                    50% {transform: rotate(-8deg)}
                    100% {transform: rotate(-30deg)}
                }
                .header-img {
                    animation: rotate 200s infinite;
                }
            </style>`
        }}/>}

        <div
            style={{
                width: '100vw',
                height: '30vw',
                overflow: 'hidden',
                marginBottom: '-10vw',
            }}
        >
            <div
                style={{
                    zIndex:1,
                    width: '100%',
                    display: "grid",
                    gridTemplateColumns: "repeat(10, 100px)"
                }}
            >
                <Link to={"/"}>Home</Link>
                <Link to={"/tentura"}>Tentura</Link>
                <Link to={"/slice"}>Slice</Link>
            </div>
            <div
                className="header-img"
                style={{
                    pointerEvents: 'none',
                    width: '100vw',
                    height: '100vw',
                    marginTop: '-75vw',
                    background: `url(${sitePath + img}) no-repeat bottom center`,
                    backgroundSize: '100% 100%'
                }}
            />
        </div>
    </>
}