import React from "react";
import logo from "../../styles/img/logo.png";
import {connect} from 'react-redux';
import {setLogin, setPassword} from "../../actions/auth__action";

function Form ({loginTo, signUp, errorMessage, setPassword, setLogin, email, password}) {
  return (
    <form action="" className="login-page__form">
      <div className="login-page__logo d-flex justify-content-center">
        <a href="/">
          <img src={logo} alt=""/>
        </a>
      </div>
      <div className="login-page__reminder d-flex flex-column justify-content-end">
        {errorMessage ?
          <span className="login-page__error-message">
            {errorMessage}
          </span>
          :
          "We'll never share your email with anyone else."}
      </div>
      <div className="login-page__login-wrapper d-flex flex-column align-items-center">
        <input type="login"
               name="login"
               className="login-page__login-input"
               placeholder="Email"
               onChange={(e) => setLogin(e.target.value)}/>

        <i className="fas fa-envelope login-page__login-icon"></i>
      </div>
      <div className="login-page__password-wrapper d-flex flex-column align-items-center">
        <input type="password"
               name="password"
               placeholder="Password"
               className="login-page__password-input"
               onChange={(e) => setPassword(e.target.value)}/>
        <i className="fas fa-lock-open login-page__password-icon"></i>
      </div>
      <div className="login-page__btn">
        <button
                className="btn btn-outline-light"
                onClick={(e) => {
                  e.preventDefault();
                  loginTo(email, password)
                }}
                type="submit">
          Sign In
        </button>
        <button
                onClick={e => {
                  e.preventDefault();
                  signUp(email, password)
                }}
                className="btn btn-outline-light">
          Sign Up
        </button>
      </div>
    </form>
  )
}

const mapStateToProps = state => ({
  errorMessage: state.auth.error,
  email: state.auth.login,
  password: state.auth.password
});

const mapDispatchToProps = dispatch => ({
  setLogin: login => dispatch(setLogin(login)),
  setPassword: password => dispatch(setPassword(password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);