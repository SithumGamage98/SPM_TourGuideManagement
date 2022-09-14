import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

//import css file from style sheets directory
import styles from "../style_sheets/UserProfile.module.css";

//Import components from the component directory
import Profile from "./Profile";

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
            <h1 style={{marginTop: "50px"}}>Log in first!</h1>
            <span style={{marginTop: "10px"}}><Link to={"/user/login"}>Click me</Link></span>
            </>
        )}
        </>
    );
}
export default UserProfile;