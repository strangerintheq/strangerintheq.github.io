(async function () {
    await require("esbuild").build({
        entryPoints: [`./index.tsx`],
        bundle: true,
        minify: false,
        treeShaking: true,
        target: 'ESNext',
        loader: {
            '.json': 'text'
        },
        outfile: "../index.js",
        sourcemap: false,
        // external: ["react", "react-dom", "react-router", "react-router-dom"]
    });

})();
