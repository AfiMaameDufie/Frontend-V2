import React from "react";
import { connect } from 'react-redux'

import "./App.scss";
import 'antd/dist/antd.css';

import PublicRoutes from "./routes/publicRoutes"

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <>
        <PublicRoutes />
      </>

    )

  }
} 

const mapStateToProps = state => ({
  uId: state.Login.id,
  uEmail: state.Login.email,
  login_stat: state.Login.login_status
});


export default connect(mapStateToProps)(App);
