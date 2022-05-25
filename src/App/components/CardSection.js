import React from "react";
import Card from "./Card";

const CardSection = (props) => {
    const allCards = props.reservations.map((reservation) => {
        return (
        <Card 
          key={reservation.id}
          id={reservation.id}
          name={reservation.name}
          date={reservation.date}
          time={reservation.time}
          number={reservation.number}
        />
        )
      })

    return (
    <div className="card-section">
        {allCards}
    </div>
)
}

export default CardSection