import React from 'react'

export default function Alert(props) {
    const capitalisze =(word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && <div>
           <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong> {capitalisze(props.alert.type)}</strong>: {props.alert.msg}
            </div>
        </div>
    )
}
