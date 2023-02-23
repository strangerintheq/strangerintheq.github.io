import React, {useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import {randomAbHash, randomFxHash} from "../tools";
import {sitePath} from "../vars";

export function ProjectItem(
    {
        name,
        type = "fxhash",
        hash = null,
        about = null,
        img,
        generator,
        c = null,
        r = null,
        id = null,
        stopGif = false
    }) {

    const to = '/generator/' + type +
        "/" + generator +
        "/" + (hash || makeHash(type))

    return <div style={{gridColumn: c, gridRow: r}}>
        <Link to={to}>
            {stopGif ?
                <CanvasWithStoppedGif img={img}/> :
                <DivWithBackgroundImage img={img} />
            }
        </Link>
    </div>
}

function CanvasWithStoppedGif({img}) {
    const ref = useRef<HTMLCanvasElement>()
    useEffect(() => {
        const canvas = ref.current;
        const ctx = canvas.getContext("2d");
        const background = new Image();
        background.src = img;
        background.onload = () => {
            let s = Math.min(background.naturalWidth, background.naturalHeight)
            canvas.width = s
            canvas.height = s
            canvas.style.width = "100%"
            canvas.style.height = "100%"
            ctx.drawImage(background, 0, 0);
        };
    }, []);
    return <canvas ref={ref} />
}

function DivWithBackgroundImage({img}) {
    const backgroundImage = `url(${img.startsWith("http") ? img : sitePath + img})`
    return <div
        style={{
            backgroundImage,
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            boxShadow: '0 0 3px 0 #9c9898'
        }}
    />
}

function makeHash(type) {
    if (type === "artblocks")
        return randomAbHash()
    return randomFxHash()
}