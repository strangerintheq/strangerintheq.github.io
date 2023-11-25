import React from "react"
import {createRoot} from "react-dom/client";
import {Site} from "./parts/Site";
const div = document.createElement('div');
document.body.append(div);
createRoot(div).render(<Site />);
window['art'] = () => {
    // console.log("XXXXX")
    // console.log("XX XX")
    // console.log("XXXXX")
}
window['art']();
// console.log("Type art() and press enter. Enjoy!")

