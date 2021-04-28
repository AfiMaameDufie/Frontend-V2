import React from "react";

import { Redirect } from "react-router-dom";

import Applicant from "../applicant/applicantFormv2";
import Footer from "./footer";

import { connect } from "react-redux";
import "./style/dash.css";
import Header from "./header";

import { Helmet } from "react-helmet";
import icon from "../images/favicon.jpeg";

export class Dashboard extends React.Component {
  state = {};

  render() {
    if (localStorage.getItem("id") === null) {
      return <Redirect to="/" />;
    }
    return (
      <>
      <Helmet>
            <title>Dashboard </title>
            <meta name="image" content={icon}/>
        </Helmet>
        <Header />
        <div className="container-fluid">
          <Applicant />
        </div>
        <Footer />
      </>
    );
  }
}
export default connect()(Dashboard);
