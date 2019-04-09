import React from "react";
import Dashboard from "./Dashboard.js";
import { render, fireEvent } from "react-testing-library";

describe("<Dashboard />", () => {
  it("renders successfully", () => {
    render(<Dashboard />);
  });

  // describe("Balls", () => {
  //   it("renders the added ball successfully", props => {
  //     const { getByText } = render(<Dashboard />);
  //     const button = getByText("+");

  //     //const prevBallValue = getByText();

  //     //fireEvent.click(button);
  //   });
  // });
});
