import React from "react";

const Display = props => {
  return (
    <div>
      <h2>At Bat:</h2>
      <div>
        <h3>
          Balls: <span>{props.stats.balls}</span>
        </h3>
        <h3>
          Strikes: <span>{props.stats.strikes}</span>
        </h3>
      </div>
    </div>
  );
};

export default Display;
