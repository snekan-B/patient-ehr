import React from "react";
import "../css/Card.css";

const Card = ({ word, meaning }) => {
  return (
    <div className="card explain-card">
      <h5 className="card-header">
        <span className="card-word">{word}</span>
      </h5>
      <div className="card-body">
        <p className="card-text">{meaning}</p>
      </div>
    </div>
  );
};

export default Card;
