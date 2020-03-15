import React from "react";
import {Link} from "react-router-dom";

function Home() {
  const profilePath = localStorage.name && localStorage.user ? '/profile' : '/login';

  return (
    <main className="home d-flex align-items-center" id="home">
      <div className="custom-container">
        <div className="home__body d-flex flex-column align-items-center">
          <h1 className="home__title">
              we are gazeta
          </h1>
          <div className="home__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, asperiores.
          </div>
          <div className="home__button">
            {localStorage.name && localStorage.user ?
            ''
            :
            <Link to={profilePath} className="btn btn-success">
              sign in
            </Link>}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home;