import React from "react";
import {ProjectThumbnail} from "../../components/ProjectThumbnail";
import {ProjectItem} from "../../components/ProjectItem";

export function SliceHomeSection(props) {
    return <div style={{marginTop:80}}>
        <h2>SL/CE @ artblocks.io</h2>
        <div style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr"
        }}>
            <ProjectItem
                w={0.5}
                h={0.5*1.618}
                c={"2/4"}
                r={"1/3"}
                hash={"0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930"}
                type={"artblocks"}
                name={"Tentura"}
                img={"https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_3840,q_auto/https://artblocks-mainnet.s3.amazonaws.com/419000000.png"}
                generator={'tentura'}
            />
            <ProjectItem
                w={0.25}
                h={0.25*1.618}
                hash={"0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930"}
                type={"artblocks"}
                name={"Tentura"}
                img={"https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_3840,q_auto/https://artblocks-mainnet.s3.amazonaws.com/419000000.png"}
                generator={'tentura'}
            />
            <ProjectItem
                w={0.25}
                h={0.25*1.618}
                hash={"0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930"}
                type={"artblocks"}
                name={"Tentura"}
                img={"https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_3840,q_auto/https://artblocks-mainnet.s3.amazonaws.com/419000000.png"}
                generator={'tentura'}
            />
            <ProjectItem
                w={0.25}
                h={0.25*1.618}
                hash={"0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930"}
                type={"artblocks"}
                name={"Tentura"}
                img={"https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_3840,q_auto/https://artblocks-mainnet.s3.amazonaws.com/419000000.png"}
                generator={'tentura'}
            />
            <ProjectItem
                w={0.25}
                h={0.25*1.618}
                hash={"0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930"}
                type={"artblocks"}
                name={"Tentura"}
                img={"https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_3840,q_auto/https://artblocks-mainnet.s3.amazonaws.com/419000000.png"}
                generator={'tentura'}
            />
        </div>
    </div>
}