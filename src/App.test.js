import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-testing-library";
import App from "./App";

describe("<App />", () => {
  it("renders successfully", () => {
    render(<App />);
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders App Running", () => {
    const { getByText } = render(<App />);

    getByText(/app running/i);
  });
});
