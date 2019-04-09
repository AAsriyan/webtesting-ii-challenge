import React from "react";

const Dashboard = props => {
  return (
    <div>
      <h2>Dashboard</h2>
      <h3>
        Add Ball{" "}
        <span>
          <button onClick={props.addBall}>+</button>
          <button onClick={props.subBall}>-</button>
        </span>
      </h3>
      <h3>
        Add Strike{" "}
        <span>
          <button onClick={props.addStrike}>+</button>
          <button onClick={props.subStrike}>-</button>
        </span>
      </h3>
      <h3>
        Add Foul{" "}
        <span>
          <button onClick={props.addFoul}>+</button>
          <button onClick={props.subFoul}>-</button>
        </span>
      </h3>
      <h3>
        Add Hit{" "}
        <span>
          <button onClick={props.addHit}>Runner Hits!</button>
        </span>
      </h3>
    </div>
  );
};

export default Dashboard;
