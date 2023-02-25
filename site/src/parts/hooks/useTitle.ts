import {useEffect} from "react";

export function useTitle(title) {
    useEffect(() => {
        document.title = title ? "Q - " + title : "Stranger in the Q"
    });
}