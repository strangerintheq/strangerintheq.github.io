import React from "react";
import {RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import {GeneratorPage} from "./pages/GeneratorPage";
import {ArtworksPage} from "./pages/projects/ArtworksPage";
import {HomePage} from "./pages/HomePage";
import {sitePath} from "./vars";
import {AboutPage} from "./pages/AboutPage";
import {CodePage} from "./pages/Code";

const routes = [
    {
        path: sitePath + "/generator/:type/:id/:hash",
        element: <GeneratorPage/>,
    },
    {
        path: sitePath + "/artworks",
        element: <ArtworksPage/>,
    },
    {
        path: sitePath + "/about",
        element: <AboutPage/>,
    },
    {
        path: sitePath + "/code",
        element: <CodePage/>,
    },
    {
        path: sitePath + "/*",
        exact: false,
        element: <HomePage/>,
    }
];

const router = createBrowserRouter(routes);

const globalStyle = `<style>
    * {
        margin: 0;
        font-weight: unset;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
        overflow-x: hidden;
        --base-size: min(1100px, 100vw);
    }
</style>`;

export function Site() {
    return <>
        <div dangerouslySetInnerHTML={{__html: globalStyle}}/>
        <RouterProvider router={router}/>
    </>
}