import React from "react";
import {RouterProvider} from "react-router";
import {createBrowserRouter} from "react-router-dom";
import {TenturaPage} from "./pages/TenturaPage";
import {SlicePage} from "./pages/SlicePage";
import {HomePage} from "./pages/HomePage";
import {GeneratorPage} from "./pages/GeneratorPage";

const routes = [{
    path: "/tentura",
    element: <TenturaPage/>,
}, {
    path: "/generator/:id",
    element: <GeneratorPage />,
}, {
    path: "/slice",
    element: <SlicePage/>,
}, {
    path: "*",
    exact: false,
    element: <HomePage/>,
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