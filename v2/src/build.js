(async function () {
    const { externalGlobalPlugin } = require("esbuild-plugin-external-global");
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
        plugins: [
            externalGlobalPlugin({
                'react': 'window.React',
                 // 'react-router': 'window.ReactRouter',
                'react-dom': 'window.ReactDOM',
                // 'react-router-dom': 'window.ReactRouterDOM',
            })
        ]
        // external: [
        //     "react",
        //     "react-dom",
            // "react-router",
            // "react-router-dom"
        // ]
    });

})();
