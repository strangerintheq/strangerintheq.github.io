import React from "react";
import {ProjectItem} from "../../components/ProjectItem";
import {Grid} from "../../components/Grid";
import {PageSubHeader} from "../../components/PageSubHeader";
import {MAX_WIDTH_980, useMediaQuery} from "../../hooks/useMediaQuery";

export function FxHashSection() {
    const {matches: isMobile} = useMediaQuery(MAX_WIDTH_980);
    let link = "https://www.fxhash.xyz/generative/"
    let img = "https://media.fxhash.xyz/w_768/";
    return <>

        <PageSubHeader>
            <a href={"https://www.fxhash.xyz/u/StrangerintheQ"}>
                fx(hash) 2022-2023
            </a>
        </PageSubHeader>

        <Grid isMobile={isMobile} ratio={1} rows={isMobile ? 6 : 3}>
            <ProjectItem
                type={"fx-hash"}
                name={"Magic Ritual"}
                link={link + "24704"}
                hash={"ookiXAnGJw28AAv6JVLXiyZceTF9nJSRAxgytsUDV9Gu3na4zeN"}
                img={img + "QmbABZquDop8bhVWb49HcU7t4vFgHU1s9ZFomPxeznmr4J"}
            />
            <ProjectItem
                type={"fx-hash"}
                name={"Mayan Carpet"}
                link={link + "24611"}
                hash={"oo2WuxbvWm77MLimMCfrt54zXRHhe8HcFqPVPfGxF53Be85Rnhe"}
                img={img + "QmScLVUE7HzUvSWy1hTVsqA2WCU6icED9BQbgVDHt4xJV2"}
            />
            <ProjectItem
                type={"fx-hash"}
                name={"Other side of the Amulet"}
                link={link + "15301"}
                hash={"oo274c4kMq5xbm7CpvJ6rDHatuuZwhEACfgaQ4BXy9XX4eTu4q7"}
                img={img + "QmWs8VMiyr5FTSSfjvf1g3bprS8JNxM8wzAbXFRvVnR3aG"}
            />
            <ProjectItem
                type={"fx-hash"}
                name={"Hyperspacers"}
                link={link + "14107"}
                hash={"ooXtaB52GRHraEgQEnT7k9oJzWYPbYbiycXFGmUqNa34bwV53ZX"}
                img={img + "QmP67iCt3gayuZGVLafGSYfXUgkJ35hbyiDxgNsGN6LZNQ"}
            />
            <ProjectItem
                type={"fx-hash"}
                name={"Amulet"}
                link={link + "13115"}
                hash={"ooognYT3x6SRXbUCKcu34Z7ffDJDrR1KmZE4G4NMo15fZ3pMyuf"}
                img={img + "QmNrMUYWUWMWjMyN6focKCBKMMqGcFofhvxMHBGNmUxYG6"}
            />
            {/*<ProjectItem*/}
            {/*    type={"fx-hash"}*/}
            {/*    name={"Let it snow"}*/}
            {/*    link={link + "5484"}*/}
            {/*    hash={"ooe9gGh3qVwc1SD69uhN9YUfo2uGf2Rh91qrx1pVwQpPoPpMgvi"}*/}
            {/*    img={img + "QmeawuQK778D1zkaiha7wDDoav9btPaNA5SkkrXYuhDPyZ"}*/}
            {/*/>*/}
            <ProjectItem
                type={"fx-hash"}
                name={"Mitosis"}
                link={link + "4058"}
                hash={"ooFeDgPwQRjiVXkupQn7wUBdbUjBQaAvFBPDpMN6iGqc5Wgv9N3"}
                img={img + "QmeNYkvW72PY1FA14E3NP2fnHfuNvpQQhowFgJ7cZbGuXf"}
            />
            <ProjectItem
                type={"fx-hash"}
                name={"Cellulae"}
                link={link + "1393"}
                hash={"oohTtY7QKgRpUDnvbrPdAgUgxgd7p1BpyKZK3BKZqfNmWGv5qrL"}
                img={img + "QmTP2YDBnWNohuAD5mtvDsEMdPa6Edf4Tf8rCS5MyhKAzX"}
            />
            <ProjectItem
                type={"fx-hash"}
                name={"Arachna"}
                link={link + "959"}
                hash={"ooZxg5naW6KQxijqjDQfFLtGDSBgG2HsMGPtymKfq7PxgRvRdB6"}
                img={img + "QmXzaZC1CfSQBm9f7CoBjsBAM153HNYermqY8CPoSdkSYB"}
            />
            <ProjectItem
                type={"fx-hash"}
                name={"Gravitzappa"}
                link={link + "430"}
                hash={"oo1WHxm95PJeziDbtPvqtZsEHyufnKZSiY8nJMMDCMxoTVEcLRk"}
                img={img + "Qmd2NxZiw3kxWowXcu3ZBfCT633UVfstYDV3zJSaLAmcJn"}
            />
            <ProjectItem
                type={"fx-hash"}
                name={"Plexus"}
                link={link + "206"}
                hash={"oopWDMeU2jwUksfUee8yjfU8EqN3Sh4osBbdymLya5xTmiGhoVg"}
                img={img + "QmY81Ege4BLhYetp4JTH1Z7KMZmvKmy5vZmtjsSyr2YsH2"}
            />
            {/*<ProjectItem*/}
            {/*    type={"fx-hash"}*/}
            {/*    name={"Foldoscope"}*/}
            {/*    link={link + "120"}*/}
            {/*    hash={"oos6MYkmvWjTSXNtKoGSeBqnC3fyzEcnknUwAnaYFre6zFoTKuE"}*/}
            {/*    img={img + "QmfEU8T3WvbockzU9rR6hV3uDziqTnu5G8r7t6befJLZM3"}*/}
            {/*/>*/}
            <ProjectItem
                type={"fx-hash"}
                name={"Squatree"}
                link={link + "45"}
                hash={"oo1M8TxFJQ7T1vSHoUgMCA3zAxLHeNcjHQ45RoomKyCdc57ModH"}
                img={img + "QmbBzpLyJAitVDn8hkv6JAF6kZRkk46Eba3UKfNXrTWGc8"}
            />
            {/*<ProjectItem*/}
            {/*    type={"fx-hash"}*/}
            {/*    name={"Subdivisual"}*/}
            {/*    link={link + "23"}*/}
            {/*    hash={"ooqpqHpF9zEh7YDUFPeWYN3YWNsEb7cq1X756s8TJQq7T1iq7Mw"}*/}
            {/*    img={img + "QmPboz6imodN7YnaUvMnS2XPGCAeGD9CAVHLXtoXu8uZWX"}*/}
            {/*/>*/}
            <ProjectItem
                type={"fx-hash"}
                name={"Hidden Square"}
                link={link + "19"}
                hash={"ooJgyLKPdBbW1YbNk8cXbHpDdWV9886cJyx934pKwoNUru3RNKD"}
                img={img + "QmQ8TYQ8qb29BxTp8kASocMirfuGf5nMXpArEohpG9tzuX"}
            />
            {/*<ProjectItem*/}
            {/*    type={"fx-hash"}*/}
            {/*    name={"Generotique"}*/}
            {/*    link={link + "11"}*/}
            {/*    hash={"ooTFacUMz6JeZMwdGWzf7XkuSYmdcv7QhbZXZhm5JGDt6JJbyh9"}*/}
            {/*    img={img + "QmQiLxQxKNcJaH17kzj27KDMkYYardx1q4o7v3pTvNHJGP"}*/}
            {/*/>*/}
        </Grid>
    </>
}