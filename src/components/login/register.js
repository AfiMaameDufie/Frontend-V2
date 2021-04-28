import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/main.css";
import "./css/util.css";
import background from "./images/bg-01.jpg";
import ClockLoader from "react-spinners/ClockLoader";
import { css } from "@emotion/core";
import { Modal, message } from "antd";
import { register } from "../../service/actions/actions";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import icon from "../images/favicon.jpeg";

class Register extends Component {
  email_re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(props) {
    super(props);
  }

  state = {
    email: "",
    password: "",
    confirmPassword: "",
    loader: () => <></>,
  };
  onchangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitHandler = (event) => {
    const { email, password, confirmPassword } = this.state;
    if (
      password.length >= 6 &&
      password === confirmPassword &&
      (email !== null || email !== "") &&
      email.match(this.email_re)
    ) {
      this.props.dispatch(register(email, password, confirmPassword));
      this.setState({ email: "" });
      this.setState({ password: "" });
      this.setState({ confirmPassword: "" });
    } else {
      message.warn("Fields must be entered or password mismatch");
    }
  };
  load = () => {
    const override = css`
      display: block;
      margin: 0 auto;
    `;
    return (
      <Modal
        visible={this.props.registerStart}
        closable={false}
        footer={null}
        centered={true}
        width="80"
      >
        <ClockLoader css={override} size={100} color={" #00ffff"} />
      </Modal>
    );
  };

  render() {
    const { email, password, confirmPassword } = this.state;
    return (
      <div className="limiter">
        <Helmet>
            <title>Register</title>
            <meta name="image" content={icon}/>
        </Helmet>
        {this.props.registerStart ? this.load() : this.state.loader()}
        <div
          className="container-login100"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="wrap-login100">
            <span className="login100-form-logo" style={{ overflow: "hidden" }}>
              <img
                src={icon}
                width="100"
              />
            </span>

            <span className="login100-form-title p-b-34 p-t-27">Register</span>

            <div
              className="wrap-input100 validate-input"
              data-validate="Enter username"
            >
              <input
                className="input100"
                type="text"
                name="email"
                placeholder="Email"
                onChange={this.onchangeHandler}
                value={email}
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Enter password"
            >
              <input
                className="input100"
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.onchangeHandler}
                value={password}
              />
              <span className="focus-input100"></span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Enter confirm password"
            >
              <input
                className="input100"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={this.onchangeHandler}
                value={confirmPassword}
              />
              <span className="focus-input100"></span> 
            </div>

            <div className="container-login100-form-btn">
              <button
                className="login100-form-btn"
                onClick={this.submitHandler}
              >
                Register
              </button>
            </div>

            <div className="text-center p-t-90">
              <Link to="/">
                <a className="txt1 mr-3" href="#">
                  Allready have an account?
                </a>
              </Link>
              <Link to="/recover" >
              <a className="txt1">
                Forgot Password?
              </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  status: state.Register.status,
  message: state.Register.message,
  registerStart: state.Register.register_init,
});
export default connect(mapStateToProps)(Register);
