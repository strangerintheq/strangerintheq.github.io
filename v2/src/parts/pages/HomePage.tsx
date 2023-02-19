import React from "react";
import {ProjectThumbnail} from "../components/ProjectThumbnail";
import {PageWrapper} from "../components/PageWrapper";
import {sitePath} from "../Crutch";
import {Button} from "../parts/Button";

export function HomePage() {
    return <PageWrapper>
        <div
            style={{
                marginTop: '5%',
                display: 'grid',
                gap: '2%',
                gridTemplateColumns: '32% 32% 32%'
            }}
        >
            <img className={"avatar"} src={sitePath + '/resources/avatar.jpg'}/>

            <div style={{gridColumn: '2/4'}}>
                Hello there! <br/>
                I'm Stranger in the Q and i'm making art with code
            </div>

            <div className={"fs02"} style={{gridColumn:'1/4'}}>
                Art Blocks
            </div>

            <ProjectThumbnail
                hash={"0x61464f239e4a9706c864eaf3d8ccc966fe3ec89089752d803ee51adbea37e82c"}
                ratio={0.618}
                type={"artblocks"}
                name={"SL/CE"}
                img={"https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_3840,q_auto/https://artblocks-mainnet.s3.amazonaws.com/419000000.png"}
                generator={'slice'}
            />
            <ProjectThumbnail
                hash={"0xc769de01c92fdf68c8415137f67e0b34869f42e7ae170f3eb81a192a67f8c930"}
                type={"artblocks"}
                name={"Tentura"}
                img={"https://res.cloudinary.com/art-blocks/image/fetch/f_auto,c_limit,w_640,q_auto/https://artblocks-mainnet.s3.amazonaws.com/265000000.png"}
                generator={'tentura'}
            />
            <div className={"fs02"} style={{gridColumn:'1/4'}}>
                Fx(Hash)
            </div>
            <ProjectThumbnail
                ratio={3/4}
                name={"Other side of the Amulet"}
                img={"https://media.fxhash.xyz/w_768/QmWs8VMiyr5FTSSfjvf1g3bprS8JNxM8wzAbXFRvVnR3aG"}
                about={'/slice'}
                generator={'osoa'}
            />
            <ProjectThumbnail
                ratio={3/4}
                name={"Hyperspacers"}
                img={"https://media.fxhash.xyz/w_768/QmP67iCt3gayuZGVLafGSYfXUgkJ35hbyiDxgNsGN6LZNQ"}
                generator={'hpsp'}
            />
            <ProjectThumbnail
                ratio={3/4}
                name={"Amulet"}
                img={"https://media.fxhash.xyz/w_768/QmNrMUYWUWMWjMyN6focKCBKMMqGcFofhvxMHBGNmUxYG6"}
                generator={'amlt'}
            />

            <ProjectThumbnail
                name={"Let it snow"}
                img={"https://media.fxhash.xyz/w_768/QmeawuQK778D1zkaiha7wDDoav9btPaNA5SkkrXYuhDPyZ"}
                generator={'amlt'}
            />
            <ProjectThumbnail
                name={"Mitosis"}
                img={"https://media.fxhash.xyz/w_768/QmeNYkvW72PY1FA14E3NP2fnHfuNvpQQhowFgJ7cZbGuXf"}
                generator={'amlt'}
            />
            <ProjectThumbnail
                name={"Cellulae"}
                img={"https://media.fxhash.xyz/w_768/QmTP2YDBnWNohuAD5mtvDsEMdPa6Edf4Tf8rCS5MyhKAzX"}
                generator={'amlt'}
            />
            <ProjectThumbnail
                name={"Arachna"}
                img={"https://media.fxhash.xyz/w_768/QmXzaZC1CfSQBm9f7CoBjsBAM153HNYermqY8CPoSdkSYB"}
                generator={'amlt'}
            />
            <ProjectThumbnail
                name={"Gravitzappa"}
                img={"https://media.fxhash.xyz/w_768/Qmd2NxZiw3kxWowXcu3ZBfCT633UVfstYDV3zJSaLAmcJn"}
                generator={'grvc'}
            />
            <ProjectThumbnail
                name={"Plexus"}
                img={"https://media.fxhash.xyz/w_768/QmY81Ege4BLhYetp4JTH1Z7KMZmvKmy5vZmtjsSyr2YsH2"}
                generator={'amlt'}
            />
            <ProjectThumbnail
                name={"Squatree"}
                img={"https://media.fxhash.xyz/w_768/QmbBzpLyJAitVDn8hkv6JAF6kZRkk46Eba3UKfNXrTWGc8"}
                generator={'amlt'}
            />
            <ProjectThumbnail
                name={"Subdivisual"}
                img={"https://media.fxhash.xyz/w_768/QmPboz6imodN7YnaUvMnS2XPGCAeGD9CAVHLXtoXu8uZWX"}
                generator={'amlt'}
            />
            <ProjectThumbnail
                name={"Hidden Square"}
                img={"https://media.fxhash.xyz/w_768/QmQ8TYQ8qb29BxTp8kASocMirfuGf5nMXpArEohpG9tzuX"}
                generator={'hdsq'}
            />
            <ProjectThumbnail
                name={"Generotique"}
                img={"https://media.fxhash.xyz/w_768/QmQiLxQxKNcJaH17kzj27KDMkYYardx1q4o7v3pTvNHJGP"}
                generator={'amlt'}
            />

            <div className={"fs02"} style={{gridColumn:'1/4'}}>
               teia.art (ex hicetnunc)
            </div>

            <ProjectThumbnail
                name={"Needlework"}
                img={"https://assets.objkt.media/file/assets-003/KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton/520033/thumb288"}
                generator={'amlt'}
            />
            <ProjectThumbnail
                name={"Warp Engine"}
                img={"https://assets.objkt.media/file/assets-003/KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton/490373/thumb288"}
                generator={'amlt'}
            />
            <ProjectThumbnail
                name={"Re-Tiler"}
                img={"https://assets.objkt.media/file/assets-003/KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton/468682/thumb288"}
                generator={'amlt'}
            />
            <ProjectThumbnail
                name={"Neural Interface"}
                img={"https://assets.objkt.media/file/assets-003/KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton/447479/thumb288"}
                generator={'amlt'}
            />
            <ProjectThumbnail
                name={"Artificial eye"}
                img={"https://assets.objkt.media/file/assets-003/KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton/440706/thumb288"}
                generator={'amlt'}
            />
            <ProjectThumbnail
                name={"The Nest"}
                img={"https://assets.objkt.media/file/assets-003/KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton/404417/thumb288"}
                generator={'amlt'}
            />
            <ProjectThumbnail
                name={"Mozaic Perception"}
                img={"https://assets.objkt.media/file/assets-003/KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton/393547/thumb288"}
                generator={'mzpc'}
            />
            <ProjectThumbnail
                name={"Dancing Souls"}
                img={"https://assets.objkt.media/file/assets-003/KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton/384125/thumb288"}
                generator={'dncs'}
            />
            <ProjectThumbnail
                name={"Nucle"}
                img={"https://assets.objkt.media/file/assets-003/KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton/343072/thumb288"}
                generator={'amlt'}
            />
            <ProjectThumbnail
                name={"Inner Sight"}
                img={"https://assets.objkt.media/file/assets-003/KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton/324272/thumb288"}
                generator={'amlt'}
            />
            <ProjectThumbnail
                name={"Fractions"}
                img={"https://assets.objkt.media/file/assets-003/KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton/316447/thumb288"}
                generator={'amlt'}
            />
            <ProjectThumbnail
                name={"Neyebula"}
                img={"https://assets.objkt.media/file/assets-003/KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton/289835/thumb288"}
                generator={'amlt'}
            />
            <ProjectThumbnail
                name={"Simplicity"}
                img={"https://assets.objkt.media/file/assets-003/KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton/279928/thumb288"}
                generator={'amlt'}
            />

            <ProjectThumbnail
                name={"Steam Cells"}
                img={"https://assets.objkt.media/file/assets-003/KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton/274293/thumb288"}
                generator={'amlt'}
            />

            <div className={"fs02"} style={{gridColumn:'1/4'}}>
                ...
            </div>

        </div>

    </PageWrapper>
}