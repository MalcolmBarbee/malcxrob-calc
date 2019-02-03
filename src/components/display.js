import React from 'react';


const Display = (props) => {
    return (
        <>
            <div className='text-right p-1 bg-dark row'>
                <span className='overflow-auto display-4 text-light p-1 col-12'>{props.value}</span>
            </div>
        </>
    )
}

export default Display;