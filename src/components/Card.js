import React from "react";

const Card = ({ index, backgroundImage, title, date, venue, time, buttonText }) => {
  return (
    <div
      className={`event event-${index + 1}`}
      key={index}
      style={{ backgroundImage: backgroundImage }}
    >
      <h3>{title}</h3>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Venue: {venue}</p>
      <button className="btn1">{buttonText}</button>
    </div>
  );
};

export default Card;
