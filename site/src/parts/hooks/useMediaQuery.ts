import {useEffect, useRef, useState} from "react";

export const MAX_WIDTH_980 = "(max-width: 980px)"

export function useMediaQuery(query) {
    const queryRef = useRef(window.matchMedia(query))
    const [matches, setMatches] = useState(queryRef.current.matches)
    useEffect(() => {
        const listener = e => setMatches( e.matches );
        queryRef.current.addEventListener('change', listener);
        return () => {
            queryRef.current.removeEventListener('change', listener)
        }
    }, []);
    return {matches}
}