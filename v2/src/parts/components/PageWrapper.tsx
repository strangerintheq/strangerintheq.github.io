import React, {CSSProperties} from "react";

export function PageWrapper(props) {
    return <div
        className={'content-wrapper'}
        // style={{
        //     '--base-size' : 'min(1200px, 100vw)',
        //     maxWidth: 'var(--base-size)',
        //     marginLeft: 'calc(50vw - calc(var(--base-size) * 0.5)',
        //     overflow: 'visible',
        //     padding: '0 calc(var(--base-size) * 0.1)',
        //     boxSizing: 'border-box',
        //     backgroundColor: '#eee'
        // }}
    >
        {props.children}
    </div>
}