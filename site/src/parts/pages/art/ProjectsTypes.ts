 const artBlocks = [
    "slice",
    "tentura",
];

 const fxHash = [
    "amulet",
    "arachna",
    "cellulae",
    "foldoscope",
    "generotique",
    "gravitzappa",
    "hidden-square",
    "hyperspacers",
    "let-it-snow",
    "magic-ritual",
    "mayan-carpet",
    "mitosis",
    "other-side-of-the-amulet",
    "plexus",
    "squatree",
    "subdivisual",
];

 const teia = [
    "artificial-eye",
    "dancing-souls",
    "inner-sight",
    "mozaic-perception",
    "needlework",
    "neural-interface",
    "nucle",
    "re-tiler",
    "simplicity",
    "steam-cells",
    "the-nest",
    "warp-engine"
]


export const ProjectsTypes = {}
artBlocks.forEach(project => Object.assign(ProjectsTypes, {[project]: "artblocks"}))
fxHash.forEach(project => Object.assign(ProjectsTypes, {[project]: "fx-hash"}))
teia.forEach(project => Object.assign(ProjectsTypes, {[project]: "teia"}))
