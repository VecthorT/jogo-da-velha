import React from "react";
import './style.css'


const Card = ({children})=>{
    return(
    <article className="card">
        {children}
    </article>
    )

}
export default Card