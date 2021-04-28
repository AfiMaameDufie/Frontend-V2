import { Component } from "react"
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props => (localStorage.getItem("id") != null || localStorage.getItem("id") != "undefined") ? (<Component {...props} />) : (<Redirect to={{ pathname: "/" }} />)}
    />

)

export default PrivateRoute