import React, { useEffect, useRef } from "react";

// InnerHTML component
export function InnerHTMLButScript(props) {
    const { html, className } = props;
    const divRef = useRef(0);

    useEffect(() => {
        const parsedHTML = document.createRange().createContextualFragment(html);
        divRef.current.appendChild(parsedHTML);
    }, []);


    return (
        <div ref={divRef} className={className}></div>
    );
}