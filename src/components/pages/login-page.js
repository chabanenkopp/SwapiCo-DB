import React from "react"
import { Redirect } from "react-router-dom"

const LoginPage = ({ isLogged, onLogin }) => {
  if (isLogged) return <Redirect to="/" />
  return (
    <div className="jumbotron">
      <p>Log in to see the Secret Page!</p>
      <button className="btn btn-primary" onClick={onLogin}>
        Log in
      </button>
    </div>
  )
}
export default LoginPage
