(async function () {
    const { externalGlobalPlugin } = require("esbuild-plugin-external-global");
    await require("esbuild").build({
        entryPoints: [`./index.tsx`],
        bundle: true,
        minify: true,
        treeShaking: true,
        target: 'ESNext',
        outfile: "../bundle.js",
        sourcemap: false,
        plugins: [
            externalGlobalPlugin({
                'react': 'window.React',
                'react-dom': 'window.ReactDOM',
            })
        ]
    });

})();
