import React from 'react';


export const IconChevronLeft = (size?: number) => {
    let newSize = size ? size : 24;
    return <svg xmlns="http://www.w3.org/2000/svg" width={newSize} height={newSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
}

export const IconChevronRight = (size?: number) => {
    let newSize = size ? size : 24;
    return <svg xmlns="http://www.w3.org/2000/svg" width={newSize} height={newSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
}

