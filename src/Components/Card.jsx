import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.img} alt="" />
            <h2>{props.text}</h2>
        </div>
    )
}

export default Card