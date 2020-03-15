import React from "react";
import Form from "./Form";
import fire from "../../config/fire";
import { getErrorMessage } from "../../actions/auth__action";
import { connect } from 'react-redux';

function LoginPage ({getErrorMessage})  {
    const loginTo = (email, pass) => {
      console.log(email, pass);
      if(email === 'admin') {
        fire.auth().signInWithEmailAndPassword(`${email}@newsapp.com`, pass)
          .then(u => window.location.replace('/profile'))
          .catch(err =>{
            console.log(err.message);
            getErrorMessage(err.message)
          })
      } else {
        fire.auth().signInWithEmailAndPassword(email, pass)
          .then(u => {
            console.log(u);
            window.location.replace('/profile')
          })
          .catch(err => {
            getErrorMessage(err.message)
          })
      }
    };

    const signUp = (email, pass) => {
      fire.auth().createUserWithEmailAndPassword(email, pass)
        .then(u => {
          fire.auth().signInWithEmailAndPassword(email, pass)
            .then(u => window.location.replace('/profile'))
            .catch(err => console.log(err))
        })
        .catch(err => {
          console.log(err.message);
          getErrorMessage(err.message)
        })
    };

    return (
      <section className="login-page">
        <div className="custom-container">
          <div className="login-page__body">
            <Form  signUp={signUp}
                   loginTo={loginTo}/>
          </div>
        </div>
      </section>
    )
}

const mapDispatchToProps = dispatch => ({
  getErrorMessage: msg => dispatch(getErrorMessage(msg))
});

export default connect(null, mapDispatchToProps)(LoginPage);