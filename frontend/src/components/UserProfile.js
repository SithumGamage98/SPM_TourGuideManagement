import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//import css file from style sheets directory
import styles from "../style_sheets/UserProfile.module.css";

//Import components from the component directory
import Profile from "./Profile";

//import images from img directory
import illustration from "../img/login-first.png";

const UserProfile = (props) => {
    return (
        <>
        {props.userId ? (
            <div className={styles.maincontainer}>
                <div className={styles.side_bar}>
                    <Profile {...props} userId={props.userId}/>
                </div>
            <div className={styles.container}>
                <h3 className="text-center">User profil!</h3>
            </div>
            </div>
        ) : (
            <>
            {/* <h1 style={{marginTop: "50px"}}>Log in first!</h1>
            <span style={{marginTop: "10px"}}><Link to={"/user/login"}>Click me</Link></span> */}
            <div style={{display: "flex", minHeight: "calc(100vh - 80px)"}}>
                <div className={`text-center ${styles.nocard}`} style={{width: "800px", position: "relative", margin: "auto"}}>
                    <img src={illustration} alt="Logo" className={styles.illustration}/>
                    <h4 className="text-center" style={{marginBottom: "40px"}}><strong>You haven't logged in to your account. </strong></h4>
                    <Link to={"/user/login"} className={styles.btn_update} style={{marginTop: '20px', padding: "6px 40px 6px 40px"}}>Log in</Link>
                </div>
            </div>
            </>
        )}
        </>
    );
}
export default UserProfile;