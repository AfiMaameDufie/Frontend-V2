import Stepper from "./stepper/stepper";
import React, { Component } from "react";
import "./style/stepperApp.scss";
import Header from "./header";
import Footer from "./footer";
import { Helmet } from "react-helmet";
import icon from "../images/favicon.jpeg";

export default class StepperApp extends Component {
  constructor() {
    super();
    this.state = {
      currentStep: 1
    };
  }

  handleClick(clickType) {
    const { currentStep } = this.state;
    let newStep = currentStep;
    clickType === "next" ? newStep++ : newStep--;

    if (newStep > 0 && newStep <= 5) {
      this.setState({
        currentStep: newStep
      });
    }
  }

  render() {
    const { currentStep } = this.state;

    return (
      <>
      <Helmet>
            <title>Progress </title>
        </Helmet>
      <Header />
      <div></div>
        <div className="stepper-container-vertical">
         <center> <p className="h2 center text-dark">TRACK YOUR EMPLOYMENT PROGRESS</p> </center>
          <Stepper
            direction="vertical"
            currentStepNumber={currentStep - 1}
            steps={stepsArray}
            stepColor="#ad5389"
          />
        </div>

        {/* <div className="buttons-container">
          <button onClick={() => this.handleClick()}>Previous</button>
          <button onClick={() => this.handleClick("next")}>Next</button>
        </div> */}
        <Footer />
      </>
    );
  }
}

const stepsArray = [
  // "Create your account",
  "Completed Registration",
  "Interviews",
  "Warm Calls",
  "Onboarding",
  "Start Date"
];
