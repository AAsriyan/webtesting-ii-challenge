import React from "react";

const Dashboard = props => {
  return (
    <div>
      <h2>Dashboard</h2>
      <h3>
        Balls:{" "}
        <span>
          <button onClick={props.addBall}>Add Ball</button>
          <button onClick={props.subBall}>Subtract Ball</button>
        </span>
      </h3>
      <h3>
        Strikes:{" "}
        <span>
          <button onClick={props.addStrike}>Add Strike</button>
          <button onClick={props.subStrike}>Subtract Strike</button>
        </span>
      </h3>
      <h3>
        Fouls:{" "}
        <span>
          <button onClick={props.addFoul}>Add Foul</button>
          <button onClick={props.subFoul}>Subtract Foul</button>
        </span>
      </h3>
      <h3>
        Hit:{" "}
        <span>
          <button onClick={props.addHit}>Runner Hits</button>
        </span>
      </h3>
    </div>
  );
};

export default Dashboard;
