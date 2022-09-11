import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//import css file from style sheets directory
import styles from "./style_sheets/App.module.css";

//import images from img directory
import logo from "./img/logo.jpg";

//Import components from the component directory
import AddPayment from "./components/AddPayment";
import DisplayPayment from "./components/DisplayPayment";
import UpdatePayment from "./components/UpdatePayment";
import Profile from "./components/Profile";

const App = () => {
  const user = "james";

  return (
    <Router>
      <div className="App min-vh-100">
        <nav className={styles.nav}>
          <div className={styles.parentnav}>
            <img src={logo} alt="Travelo logo" className={styles.logo}></img>
            <div className={styles.topnav_center}>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#news">Hotels</a>
                </li>
                <li>
                  <a href="#contact">Tour Packages</a>
                </li>
                <li>
                  <a href="#contact">Tour guides</a>
                </li>
                <li>
                  <Link to={"/profile/home/:id"}>Profile</Link>
                </li>
              </ul>
            </div>
            {user ? (
              <a href="#" className={styles.btn_login}>
                Logout
              </a>
            ) : (
              <a href="#" className="btn btn-primary">
                Login
              </a>
            )}
          </div>
        </nav>
        <div>
          <Switch>
            <Route path="/add/payment+details" component={AddPayment} />
            <Route
              path="/view/payment+details/:id"
              component={DisplayPayment}
            />
            <Route
              path="/update/payment+details/:id"
              component={UpdatePayment}
            />
            <Route path="/profile/home/:id" component={Profile} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
