import React from "react"
import {createRoot} from "react-dom/client";
import {Site} from "./parts/Site";
const div = document.createElement('div');
document.body.append(div);
createRoot(div).render(<Site />)

