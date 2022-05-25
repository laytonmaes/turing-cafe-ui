import React from "react";

const Card = (props) => {
return (
    <div className="card" id={props.id}>
        <h2>{props.name}</h2>
        <h3>{props.date}</h3>
        <h3>{props.time}</h3>
        <h3>{props.number}</h3>
        <button className="cancel-button">Cancel</button>
    </div>
)
}

export default Card