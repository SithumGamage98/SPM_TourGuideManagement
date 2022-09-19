import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

//import css file from style sheets directory
import styles from "../style_sheets/Login.module.css"

const Signup = () => {
    const [user_name, setUserName] = useState("");
    const [full_name, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [reEnteredpassword, setReEnteredPassword] = useState("");

    const history = useHistory();

    const addUser = (e) => {
        e.preventDefault();

        //TODO validate whether username is taken or not
        //Try to use retrieve code and get the username from data.user_name and compare it with the user entered username
        if(reEnteredpassword === password){
            const newUser = {
                user_name,
                full_name,
                email,
                password
            }
    
            axios.post("http://localhost:8070/user/new", newUser)
                .then(() => {
                    alert("Registration Successful!");
                    history.push("/user/login");
                })
                .catch((err) => {
                    console.log(err);
                })
        } else {
            alert("Two passwords don't match")
        }
    }

    return (
        <section className={styles.gradientForm}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card shadow-2-strong" style={{borderRadius: "15px", borderColor: "white", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
                    <div className="card-body p-5 text-center">

                        <h2 className="mb-5">Sign up</h2>

                        <div className="form-outline mb-4">
                            <input type="text" id="user_name" className="form-control" placeholder="Username" name="user_name" maxlength="10"
                                onChange={(e) => {
                                    setUserName(e.target.value);
                                }} />
                        </div>

                        <div className="form-outline mb-4">
                            <input type="text" id="user_name" className="form-control" placeholder="Full Name" name="user_name"
                                onChange={(e) => {
                                    setFullName(e.target.value);
                                }} />
                        </div>

                        <div className="form-outline mb-4">
                            <input type="text" id="user_name" className="form-control" placeholder="Email" name="user_name"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }} />
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="user_name" className="form-control" placeholder="Password" name="user_name"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }} />
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="user_name" className="form-control" placeholder="Re-enter Password" name="user_name"
                                onChange={(e) => {
                                    setReEnteredPassword(e.target.value);
                                }} />
                        </div>

                        <div className="form-check d-flex justify-content-start mb-4" style={{marginTop: "25px"}}>
                            <input className="form-check-input" type="checkbox" value="" id="form1Example3"/>
                            <label className="form-check-label" for="form1Example3" style={{marginLeft: "10px", color: "#585555"}}> Agree to terms & conditions </label>
                        </div>

                        <Link className={styles.btn_login} style={{marginTop: "15px", width: "fit-content"}} type="submit" onClick={addUser}>Sign up</Link>

                        <hr className="my-4" style={{opacity: "0.15"}}/>

                        <div class="d-flex align-items-center justify-content-center pb-4">
                            <p class="mb-0 me-2">Already have an account?</p>
                            <Link to={"/user/login"}>Sign in</Link>
                        </div>

                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}
export default Signup;