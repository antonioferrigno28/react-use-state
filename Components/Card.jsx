import React from "react";

function Card({ title, description }) {
  return (
    <div className="card mt-3 p-3">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
