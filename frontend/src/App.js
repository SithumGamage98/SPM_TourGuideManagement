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
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserProfile from "./components/UserProfile";
import PaymentHistory from "./components/PaymentHistory";
import PrintPayments from "./components/PrintPayment";
import Checkout from "./components/Checkout";
import AddTourguide from './components/AddTourguide';
import AllTourguides from './components/AllTourguides';
import updateTourguide from './components/UpdateTourguide';

const App = () => {
  const [userId, setUserId] = React.useState(null);

  async function login(userId = null) {
    setUserId(userId);
  }

  async function logout() {
    setUserId(null);
  }

  return (
    <Router>
      <div className="App min-vh-100">
        <nav className={`navbar-fixed-top ${styles.nav}`}>
          <div className={`container ${styles.parentnav}`}>
            <img src={logo} alt="Travelo logo" className={styles.logo}></img>
            <div className={styles.topnav_center}>
              <ul>

                <li>
                  <Link to={`/`}>Home</Link>
                </li>

                <li>
                  <Link to={`/checkout/${userId}`}>Hotels</Link>
                </li>

                <li>
                  <Link to={`/add`}>Tour Guide</Link>
                </li>

                <li>
                  <a href="#contact">Tour Packages</a>
                </li>

                <li>
                  <Link to={`/profile/home/${userId}`}>Profile</Link>
                </li>

              </ul>
            </div>
            {userId ? (
              <>
                <Link to={'/'} onClick={logout} className={styles.btn_login}>Logout</Link>
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

            <Route
              path={`/view/payment+history/${userId}`}
              render={(props) => <PaymentHistory {...props} userId={userId} />}
            />

            <Route
              path={`/print/payment+history`}
              render={(props) => <PrintPayments {...props} userId={userId} />}
            />

            <Route
              path={`/checkout/${userId}`}
              render={(props) => <Checkout {...props} userId={userId} />}
            />

            <Route 
              path= {["/all"]}
              component = {AllTourguides}
            />

            <Route 
              path= {["/add"]}
              component = {AddTourguide} 
            />

            <Route 
              path= {["/update/:id"]}
              component = {updateTourguide} 
            />

          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;