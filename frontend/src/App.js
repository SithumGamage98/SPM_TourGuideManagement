import React from "react";
import { useHistory, BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//import css file from style sheets directory
import styles from "./style_sheets/App.module.css";

//import images from img directory
import logo from "./img/logo.jpg";

//Import components from the component directory
import AddPayment from "./components/AddPayment";
import DisplayPayment from "./components/DisplayPayment";
import UpdatePayment from "./components/UpdatePayment";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserProfile from "./components/UserProfile";

const App = () => {
  const [userId, setUserId] = React.useState(null);

  const history = useHistory();

  async function login(userId = null) {
    setUserId(userId);
  }

  async function logout() {
    setUserId(null);
    history.push('/');
  }

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
                  <Link to={`/profile/home/${userId}`}>Profile</Link>
                </li>
              </ul>
            </div>
            {userId ? (
              <>
                <button onClick={logout} className={styles.btn_login}>Logout</button>
              </>
            ) : (
              <>
                <Link to={"/user/login"} className={styles.btn_login}>Login</Link>
              </>
            )}
          </div>
        </nav>
        <div>
          <Switch>
            <Route path="/add/payment+details"
              render={(props) => <AddPayment {...props} userId={userId} />}
              />
            <Route
              path={`/view/payment+details/${userId}`}
              render={(props) => <DisplayPayment {...props} userId={userId} />}
            />
            <Route
              path={`/update/payment+details/${userId}`}
              render={(props) => <UpdatePayment {...props} userId={userId} />}
            />
            <Route
              path={`/profile/home/${userId}`}
              render={(props) => <UserProfile {...props} userId={userId} />}
            />
            <Route
              path="/new+user/signup"
              component={Signup} 
            />
            <Route
              path="/user/login"
              render={(props) => <Login {...props} login={login} />}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
