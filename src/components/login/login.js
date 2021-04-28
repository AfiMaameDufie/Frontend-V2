import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/main.css";
import "./css/util.css";
import background from "./images/bg-01.jpg";
import ClockLoader from "react-spinners/ClockLoader";
import { css } from "@emotion/core";
import { loginUser } from "../../service/actions/actions";
import { Redirect } from "react-router-dom";
import { Modal } from "antd";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import icon from "../images/favicon.jpeg";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loader: () => <></>,
    };
  }

  load = () => {
    const override = css`
      display: block;
      margin: 0 auto;
    `;
    return (
      <Modal
        visible={this.props.loginStart}
        closable={false}
        footer={null}
        centered={true}
        width="80"
      >
        <ClockLoader css={override} size={100} color={" #00ffff"} />
      </Modal>
    );
  };

  onChangeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.dispatch(loginUser(email, password));
  };

  render() {
    const { email, password } = this.state;
    if (this.props.login_stat || localStorage.getItem("id") != null) {
      return <Redirect to="/apply" />;
    } else {
      return (
        <div className="limiter">
          <Helmet>
            <title> Login</title>
            <meta name="image" content={icon} />
          </Helmet>
          {this.props.loginStart ? this.load() : this.state.loader()}
          <div
            className="container-login100"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="wrap-login100">
              <form
                className="login100-form validate-form"
                onSubmit={this.onSubmitHandler}
              >
                <span
                  className="login100-form-logo"
                  style={{ overflow: "hidden" }}
                >
                  <img
                    src={icon}
                    width="100"
                  />
                </span>

                <span className="login100-form-title p-b-34 p-t-27">
                  Log in
                </span>

                <div
                  className="wrap-input100 validate-input"
                  data-validate="Enter Email"
                >
                  <input
                    className="input100"
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={this.onChangeHandler}
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
                    onChange={this.onChangeHandler}
                    value={password}
                  />
                  <span className="focus-input100"></span>
                </div>

                <div className="container-login100-form-btn">
                  <button onClick={this.submitHandler} className="login100-form-btn">Login</button>
                </div>

                <div className="text-center p-t-90">
                  <Link to="/register">
                    <a className="txt1 mr-3" href="#">
                      Don't have an account
                    </a>
                  </Link>
                  <Link to="/recover">
                    <a className="txt1">Forgot Password?</a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  loginStart: state.Login.login_init,
  uId: state.Login.id,
  uEmail: state.Login.email,
  login_stat: state.Login.login_status,
});
export default connect(mapStateToProps)(Login);
