import React from "react";
import {RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import {ProjectsPage} from "./pages/ProjectsPage";
import {HomePage} from "./pages/HomePage";
import {GeneratorPage} from "./pages/GeneratorPage";

const routes = [ {
    path: "/generator/:type/:id/:hash",
    element: <GeneratorPage />,
}, {
    path: "/projects",
    element: <ProjectsPage />,
}, {
    path: "*",
    exact: false,
    element: <HomePage />,
}];

const router = createBrowserRouter(routes);

export function Routes() {
    return <RouterProvider router={router}/>
}

export function Site() {
    return <>
        <Routes />
    </>
}