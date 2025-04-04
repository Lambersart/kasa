import React from "react";

function Card({ appart }) {
      return (
            <div key={appart.id} className="card">
                  <img
                        src={appart.cover}
                        alt={appart.title}
                        className="card-image"
                  />
                  <div className="card-title">
                        <h4>{appart.title}</h4>
                  </div>
            </div>
      );
}

export default Card;
