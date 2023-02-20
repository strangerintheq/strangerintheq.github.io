import React from "react";
import {ProjectThumbnail} from "../../components/ProjectThumbnail";
import {ProjectItem} from "../../components/ProjectItem";

export function TenturaHomeSection(props) {
    return <div style={{marginTop:80,           backgroundColor: "white",}}>
        <h2>Tentura</h2>
        <div style={{

            marginTop: 40,
            display: "grid",
            gap: "2%",
            gridTemplateColumns: "1fr 1fr 1fr 1fr"
        }}>
            <ProjectItem
                w={0.5}
                h={0.5}
                c={"2/4"}
                r={"1/3"}
                id={"265000000"}
                hash={"0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930"}
                type={"artblocks"}
                name={"Tentura"}
                img={"https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_640,q_auto/https://artblocks-mainnet.s3.amazonaws.com/265000000.png"}
                generator={'tentura'}
            />

            <ProjectItem
                w={0.25}
                h={0.25}
                c={1}
                r={1}
                id={"265000031"}
                hash={"0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930"}
                type={"artblocks"}
                name={"Tentura"}
                img={"https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_648,q_auto/https://artblocks-mainnet.s3.amazonaws.com/265000031.png"}
                generator={'tentura'}
            />
            <ProjectItem
                w={0.25}
                h={0.25}
                c={1}
                r={2}
                id={"265000197"}
                hash={"0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930"}
                type={"artblocks"}
                name={"Tentura"}
                img={"https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_648,q_auto/https://artblocks-mainnet.s3.amazonaws.com/265000197.png"}
                generator={'tentura'}
            />

            <ProjectItem
                w={0.25}
                h={0.25}
                c={4}
                r={1}
                id={"265000212"}
                hash={"0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930"}
                type={"artblocks"}
                name={"Tentura"}
                img={"https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_648,q_auto/https://artblocks-mainnet.s3.amazonaws.com/265000212.png"}
                generator={'tentura'}
            />
            <ProjectItem
                w={0.25}
                h={0.25}
                c={4}
                r={2}
                id={"265000269"}
                hash={"0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930"}
                type={"artblocks"}
                name={"Tentura"}
                img={"https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_128,q_auto/https://artblocks-mainnet.s3.amazonaws.com/265000269.png"}
                generator={'tentura'}
            />
        </div>
    </div>
}