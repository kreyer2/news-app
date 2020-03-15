import fire from "../config/fire";

export function authListener() {
  fire.auth().onAuthStateChanged(user => {
    if(user) {
      console.log(user);
      console.log('Successfully authorized!');
      localStorage.setItem('user', user.uid);
      localStorage.setItem('name', user.email)
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('name');
    }
  })
}