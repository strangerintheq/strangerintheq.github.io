(async function () {
    const { externalGlobalPlugin } = require("esbuild-plugin-external-global");
    await require("esbuild").build({
        entryPoints: [`./index.tsx`],
        bundle: true,
        minify: false,
        treeShaking: true,
        target: 'ESNext',
        outfile: "../index.js",
        sourcemap: false,
        plugins: [
            externalGlobalPlugin({
                'react': 'window.React',
                'react-dom': 'window.ReactDOM',
            })
        ]
    });

})();
