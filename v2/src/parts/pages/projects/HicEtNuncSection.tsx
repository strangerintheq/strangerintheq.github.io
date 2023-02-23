import React from "react";
import {ProjectItem} from "../../components/ProjectItem";
import {ProjectsGrid} from "../../components/ProjectsGrid";

export function HicEtNuncSection({isMobile}) {

    return <>
        <div style={{fontSize: '2em', marginTop: '2em'}}>
            <span>teia.art (ex Hic Et Nunc) 2021</span>
        </div>
        <ProjectsGrid
            isMobile={isMobile}
            ratio={1}
            rows={isMobile ? 6 : 3}
        >

            <ProjectItem
                name={"Needlework"}
                img={"https://assets.objkt.media/file/assets-003/KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton/520033/thumb288"}
                generator={'amlt'}
            />
            <ProjectItem
                name={"Warp Engine"}
                img={"https://assets.objkt.media/file/assets-003/KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton/490373/thumb288"}
                generator={'amlt'}
            />
            <ProjectItem
                name={"Re-Tiler"}
                img={"https://assets.objkt.media/file/assets-003/KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton/468682/thumb288"}
                generator={'amlt'}
            />
            <ProjectItem
                name={"Neural Interface"}
                img={"https://assets.objkt.media/file/assets-003/KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton/447479/thumb288"}
                generator={'amlt'}
            />
            <ProjectItem
                name={"Artificial eye"}
                img={"https://assets.objkt.media/file/assets-003/KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton/440706/thumb288"}
                generator={'amlt'}
            />
            <ProjectItem
                name={"The Nest"}
                img={"https://assets.objkt.media/file/assets-003/KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton/404417/thumb288"}
                generator={'amlt'}
            />
            <ProjectItem
                name={"Mozaic Perception"}
                img={"https://assets.objkt.media/file/assets-003/KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton/393547/thumb288"}
                generator={'mzpc'}
            />
            <ProjectItem
                name={"Dancing Souls"}
                img={"https://assets.objkt.media/file/assets-003/KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton/384125/thumb288"}
                generator={'dncs'}
            />
            <ProjectItem
                stopGif={true}
                name={"Nucle"}
                img={"https://assets.objkt.media/file/assets-003/KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton/343072/thumb288"}
                generator={'amlt'}
            />
            <ProjectItem
                stopGif={true}
                name={"Inner Sight"}
                img={"https://assets.objkt.media/file/assets-003/KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton/324272/thumb288"}
                generator={'amlt'}
            />
            {/*<ProjectItem*/}
            {/*    name={"Fractions"}*/}
            {/*    img={"https://assets.objkt.media/file/assets-003/KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton/316447/thumb288"}*/}
            {/*    generator={'amlt'}*/}
            {/*/>*/}
            {/*<ProjectItem*/}
            {/*    name={"Neyebula"}*/}
            {/*    img={"https://assets.objkt.media/file/assets-003/KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton/289835/thumb288"}*/}
            {/*    generator={'amlt'}*/}
            {/*/>*/}
            <ProjectItem
                stopGif={true}
                name={"Simplicity"}
                img={"https://assets.objkt.media/file/assets-003/KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton/279928/thumb288"}
                generator={'amlt'}
            />

            <ProjectItem
                stopGif={true}
                name={"Steam Cells"}
                img={"https://assets.objkt.media/file/assets-003/KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton/274293/thumb288"}
                generator={'amlt'}
            />
        </ProjectsGrid>
    </>
}