import React from 'react'

const Eventcard = (props) => {
    return (
        <div className="event">
            <img src={props.img} alt="" />
            <h2>{props.text}</h2>
            <ul>
                <li><a href="">Creative Multimedia</a></li>
                <li><a href="">{props.title}</a></li>
            </ul>
            <p>{props.pera}</p>
            <button>Read More...</button>
        </div>
    )
}

export default Eventcard