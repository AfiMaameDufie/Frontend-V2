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
import axios from "axios";
import { Alert } from 'reactstrap';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      loader: () => <></>,
      message: "",
      visible: false
    };
  }

  load = () => {
    const override = css`
      display: block;
      margin: 0 auto;
    `;
    return (
      <Modal
        visible={this.props.recoverStart}
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
    const { email } = this.state;
    axios.post("https://turntablexebackend.herokuapp.com/api/turntablexe/resetPassword", {email}).
        then(res=>this.setState({message: res.data, visible: true})).catch(e => console.log(e));
//    this.props.dispatch(loginUser(email));
  };

  render() {
    const { email, message, visible } = this.state;
    if (this.props.login_stat || localStorage.getItem("id") != null) {
      return <Redirect to="/apply" />;
    } else {
      return (
        <div className="limiter">
//         <Alert color="success" visible={visible}>{message}
//         </Alert>
          <Helmet>
            <title>Recover Password </title>
            <meta name="image" content={icon}/>
        </Helmet>
          {this.props.recoverStart ? this.load() : this.state.loader()}
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
                  Recover Password 
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

                <div className="container-login100-form-btn">
                  <button onClick={this.submitHandler} className="login100-form-btn">Recover</button>
                </div><br/>
                <div className="text-center p-t-90">
              <Link to="/">
                <a className="txt1 mr-3" href="#">
                  Already have an account?
                </a>
              </Link>
              <a className= "txt1 mr-3" target="_blank" href="https://accounts.google.com/ServiceLogin?service=mail&continue=https://mail.google.com/mail/&hl=en" target="_blank" rel="noopener noreferrer">Click to Open Gmail</a>
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
  
});
export default connect(mapStateToProps)(ForgotPassword);
