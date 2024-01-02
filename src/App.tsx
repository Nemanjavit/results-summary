import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="result-summary">
        <div className="left">
          <span className="result heading">Your Result</span>
          <div className="circle">
            <div className="value-wrapper">
              <span className="value">76</span>
              <span className="subvalue">of 100</span>
            </div>
          </div>
          <p className="result-rank">Great</p>
          <p className="rank-text">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="right">
          <p className="summary heading">Summary</p>
          <div className="summary-attributes">
            <div className="summary-attribute red">
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="#F55"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"
                />
              </svg>
              <span className="name">Reaction</span>
              <span className="value">
                <span>80</span>/ 100
              </span>
            </div>

            <div className="summary-attribute orange">
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="#FFB21E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"
                />
                <path
                  stroke="#FFB21E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"
                />
                <path
                  stroke="#FFB21E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"
                />
              </svg>
              <span className="name">Memory</span>
              <span className="value">
                <span>92</span>/ 100
              </span>
            </div>

            <div className="summary-attribute green">
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="#00BB8F"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"
                />
              </svg>
              <span className="name">Verbal</span>
              <span className="value">
                <span>61</span>/ 100
              </span>
            </div>

            <div className="summary-attribute blue">
              <svg
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="#1125D6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"
                />
                <path
                  stroke="#1125D6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.25"
                  d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"
                />
              </svg>
              <span className="name">Visual</span>
              <span className="value">
                <span>72</span>/ 100
              </span>
            </div>
          </div>

          <button role="button" className="button">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
