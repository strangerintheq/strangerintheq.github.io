import React from "react";
import {ProjectItem} from "../../components/ProjectItem";
import {ProjectsGrid} from "../../components/ProjectsGrid";

export function FxHashSection({isMobile}) {

    return <>
        <div style={{fontSize: '2em', marginTop: '2em'}}>
            <span>fx(hash) 2022-2023</span>
        </div>
        <ProjectsGrid
            isMobile={isMobile}
            ratio={1}
            rows={isMobile ? 8 : 4}
        >
            <ProjectItem
                hash={"ookiXAnGJw28AAv6JVLXiyZceTF9nJSRAxgytsUDV9Gu3na4zeN"}
                name={"Magic Ritual"}
                img={"https://media.fxhash.xyz/w_768/QmbABZquDop8bhVWb49HcU7t4vFgHU1s9ZFomPxeznmr4J"}
                generator={'magic-ritual'}
            />
            <ProjectItem
                hash={"oo2WuxbvWm77MLimMCfrt54zXRHhe8HcFqPVPfGxF53Be85Rnhe"}
                name={"Mayan Carpet"}
                img={"https://gateway.fxhash.xyz/ipfs/QmScLVUE7HzUvSWy1hTVsqA2WCU6icED9BQbgVDHt4xJV2"}
                about={'/mayan-carpet'}
                generator={'mayan-carpet'}
            />
            <ProjectItem
                hash={"oo274c4kMq5xbm7CpvJ6rDHatuuZwhEACfgaQ4BXy9XX4eTu4q7"}
                name={"Other side of the Amulet"}
                img={"https://media.fxhash.xyz/w_768/QmWs8VMiyr5FTSSfjvf1g3bprS8JNxM8wzAbXFRvVnR3aG"}
                about={'/slice'}
                generator={'other-side-of-the-amulet'}
            />
            <ProjectItem
                name={"Hyperspacers"}
                img={"https://media.fxhash.xyz/w_768/QmP67iCt3gayuZGVLafGSYfXUgkJ35hbyiDxgNsGN6LZNQ"}
                generator={'hpsp'}
            />
            <ProjectItem
                name={"Amulet"}
                img={"https://media.fxhash.xyz/w_768/QmNrMUYWUWMWjMyN6focKCBKMMqGcFofhvxMHBGNmUxYG6"}
                generator={'amlt'}
            />
            <ProjectItem
                name={"Let it snow"}
                img={"https://media.fxhash.xyz/w_768/QmeawuQK778D1zkaiha7wDDoav9btPaNA5SkkrXYuhDPyZ"}
                generator={'amlt'}
            />
            <ProjectItem
                name={"Mitosis"}
                img={"https://media.fxhash.xyz/w_768/QmeNYkvW72PY1FA14E3NP2fnHfuNvpQQhowFgJ7cZbGuXf"}
                generator={'amlt'}
            />
            <ProjectItem
                name={"Cellulae"}
                img={"https://media.fxhash.xyz/w_768/QmTP2YDBnWNohuAD5mtvDsEMdPa6Edf4Tf8rCS5MyhKAzX"}
                generator={'amlt'}
            />
            <ProjectItem
                name={"Arachna"}
                img={"https://media.fxhash.xyz/w_768/QmXzaZC1CfSQBm9f7CoBjsBAM153HNYermqY8CPoSdkSYB"}
                generator={'amlt'}
            />
            <ProjectItem
                name={"Gravitzappa"}
                img={"https://media.fxhash.xyz/w_768/Qmd2NxZiw3kxWowXcu3ZBfCT633UVfstYDV3zJSaLAmcJn"}
                generator={'grvc'}
            />
            <ProjectItem
                name={"Plexus"}
                img={"https://media.fxhash.xyz/w_768/QmY81Ege4BLhYetp4JTH1Z7KMZmvKmy5vZmtjsSyr2YsH2"}
                generator={'amlt'}
            />
            <ProjectItem
                name={"Foldoscope"}
                img={"https://media.fxhash.xyz/w_768/QmfEU8T3WvbockzU9rR6hV3uDziqTnu5G8r7t6befJLZM3"}
                generator={'amlt'}
            />
            <ProjectItem
                name={"Squatree"}
                img={"https://media.fxhash.xyz/w_768/QmbBzpLyJAitVDn8hkv6JAF6kZRkk46Eba3UKfNXrTWGc8"}
                generator={'amlt'}
            />
            <ProjectItem
                name={"Subdivisual"}
                img={"https://media.fxhash.xyz/w_768/QmPboz6imodN7YnaUvMnS2XPGCAeGD9CAVHLXtoXu8uZWX"}
                generator={'amlt'}
            />
            <ProjectItem
                name={"Hidden Square"}
                img={"https://media.fxhash.xyz/w_768/QmQ8TYQ8qb29BxTp8kASocMirfuGf5nMXpArEohpG9tzuX"}
                generator={'hdsq'}
            />
            <ProjectItem
                name={"Generotique"}
                img={"https://media.fxhash.xyz/w_768/QmQiLxQxKNcJaH17kzj27KDMkYYardx1q4o7v3pTvNHJGP"}
                generator={'amlt'}
            />
        </ProjectsGrid></>
}