import React, {useEffect} from "react";
import fire from "../../config/fire";

function Profile() {
  useEffect(() => {
    if(!localStorage.name && !localStorage.user) {
      window.location.replace('/login')
    }
  }, [])

  return (
    <section className="profile" id="profile">
      <div className="container">
        <div className="profile__body">
          <div className="profile__title">
            <h1>
              Welcome home <br/>
              {localStorage.getItem('name')}
            </h1>
          </div>
          <div className="profile__logout-btn">
            <a href="/"
               onClick={() => {
              fire.auth().signOut()
            }}
                    className="btn btn-dark">
              Sign Out
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Profile;
