import React, {useEffect} from 'react';
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import News from "./components/News/News";
import LoginPage from "./components/LoginPage/LoginPage";
import Profile from "./components/Profile/Profile";
import {
  Route,
  Switch
  } from "react-router-dom";
import {authListener} from './agents/auth'

function App() {
  useEffect(() => {
    authListener()
  },[]);

  return (
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Header/>
            <Home/>
            <Footer/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/news">
            <Header/>
            <News/>
            <Footer/>
          </Route>
          <Route path="/profile">
            <Header/>
            <Profile/>
            <Footer/>
          </Route>
        </Switch>
      </div>
  );
}

export default App;
