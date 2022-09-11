import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//import css file from style sheets directory
import styles from "../style_sheets/Profile.module.css";

//import images from img directory
import pp from "../img/pp.png";

const Profile = () => {
  return (
    <div>
        <div className={styles.navbar_holder}>
            <nav id="sidebarMenu" className={`collapse d-lg-block collapse bg-white ${styles.sidebar}`}>
                <hr className={styles.divider} style={{marginTop: '-40px', marginBottom: '25px'}}/>
                <div className={styles.usercard}>
                    <img src={pp} alt="Logo" className={styles.pp}/>
                    <div>
                        <p className={styles.hello}>Hello,</p>
                        <h2 className={styles.username}>Chris Allen</h2>
                    </div>
                </div>
                <hr className={styles.divider}/>
                <div className="position-sticky">
                    <div className="list-group list-group-flush mx-3 mt-4">
                        <Link to="#" className={`${styles.sidelinks}`}>
                            My Details
                        </Link>
                    </div>
                    <div className="list-group list-group-flush mx-3 mt-4">
                        <Link to="/view/payment+details/:id" className={styles.sidelinks}>
                            Payment Details
                        </Link>
                    </div>
                    <div className="list-group list-group-flush mx-3 mt-4">
                        <Link to="#" className={styles.sidelinks}>
                            Payment History
                        </Link>
                    </div>
                    <div className="list-group list-group-flush mx-3 mt-4">
                        <Link to="#" className={styles.sidelinks}>
                            Monthly Report
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  );
};
export default Profile;
