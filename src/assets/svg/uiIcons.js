import React from 'react'

export const arrow = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24">
        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
        <path d="M0-.25h24v24H0z" fill="none"/>
    </svg>
)


export const checkBoxEmpty = (
    <svg className="check-box-emtpy" fill="rgb(200,200,200)" viewBox="0 0 24 24" stroke="1px" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
    </svg>
)

export function CheckBox({open}) {

    const show = open ? "check-box-filled-show" : ""

    return (
       <svg className={`check-box-filled ${show}`} fill="rgb(255,100,100)" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
           <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
       </svg>
    )
} 