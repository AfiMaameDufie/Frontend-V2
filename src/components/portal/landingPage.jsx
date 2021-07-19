import React, { Component } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style/dash.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Footer } from "./footer";
import { Redirect, Link } from "react-router-dom";
import Header from "./header";
import { Helmet } from "react-helmet";
import icon from "../images/favicon.jpeg";
import { toggleStatus } from "../../service/actions/actions";


class LandingPage extends Component {


  componentDidMount() {
    Aos.init({ duration: 2000 });
  }
  onSubmitHandler = () => {
    localStorage.clear();
    return <Redirect to="/togle" />;
  };
  state = {};



  render() {

    toggleStatus()

    if (localStorage.getItem("id") === null) {
      return <Redirect to="/" />;
    } else {
      return (
        <>
        <Helmet>
            <title>Apply </title>
        </Helmet>
          <Header />
          <div className="hero-full-screen">
            <div className="hero-text">
              <h1 data-aos="fade-left">Welcome to turntabl Ghana</h1>
              <p data-aos="fade-right">
                You can click on the apply button to apply for a job
              </p>
              {true ? <Link to="/form">

                {localStorage.getItem("status") === "true" ? <button className="hero-button">Apply now</button> : <> </>}
              </Link> : <></>}
              
            </div>

            <div
              className="bottom-content-section hero-arrow"
              data-magellan
              data-threshold="0"
            >
              <a href="#main-content-section">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z" />
                </svg>
              </a>
            </div>
          </div>

          <div
            id="main-content-section"
            data-magellan-target="main-content-section"
          ></div>
          <div className="who">
            <p className="header-banner">Who are we ?</p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div data-aos="fade-up" className="card">
                  <div className="card">
                    <div className="card-image">
                      <img
                        src="/images/expert.png"
                        width="100%"
                        height="50% "
                      />
                    </div>
                    <div className="who">
                      <h5>Expertise</h5>
                      <p>
                        The turntabl learning program is legendary. All our
                        developers pass through two months of tuition, group
                        work and practical exercises.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div data-aos="fade-up" className="card">
                  <div data-aos="fade-up" className="card">
                    <div className="card">
                      <div className="card-image">
                        <img src="/images/excell.png" alt="" width="100%" />
                      </div>
                      <div className="who">
                        <h5>Excellence</h5>
                        <p>
                          Communication is key. Everyone in our team is an
                          excellent communicator: a native English speaker with
                          fantastic technical literacy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div data-aos="fade-left" className="card">
                  <div data-aos="fade-up" className="card">
                    <div className="card">
                      <div className="card-image">
                        <img src="/images/expi.png" width="100%" />
                      </div>
                      <div className="who">
                        <h5>Experience</h5>
                        <p>
                          We've been in the trenches. turntabl teams are led by
                          experts. Agile development, program management,
                          incident response: you can trust us.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      );
    }
  }
}

export default LandingPage;
