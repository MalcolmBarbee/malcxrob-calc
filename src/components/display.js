import React from 'react';

// overflow-auto display-4 text-light p-1 col-12   --- display className
const Display = (props) => {
    return (
        <>

                <div className={props.className}><strong>{props.value}</strong></div>

        </>
    )
}

export default Display;