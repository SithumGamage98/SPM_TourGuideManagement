import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//import css file from style sheets directory
import styles from "../style_sheets/Login.module.css"

const Login = (props) => {

    const initialUserEnteredInfo = {
        user_name: "",
        password: ""
    }

    const [data, setData] = useState();
    const [userEnteredInfo, setUserEnteredInfo] = useState(initialUserEnteredInfo);
    
    const handleInputChange = event => {
        const { name, value } = event.target;
        setUserEnteredInfo({ ...userEnteredInfo, [name]: value });
    };
    
    const findUser = (e) => {
        e.preventDefault();
    
        axios.get(`http://localhost:8070/user/get/${userEnteredInfo.user_name}`)
            .then((response) => {
                setData(response.data.user);
            })
            .catch((err) => {
                console.log(err);
            });

        if(userEnteredInfo.password === data.password){
            props.login(data._id);
            props.history.push(`/profile/home/${data._id}`);
        }else {
            alert("Username or password is wrong. Try Again!")
        }
    }

    return (
        <section className={styles.gradientForm}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card shadow-2-strong" style={{borderRadius: "15px", borderColor: "white", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
                    <div className="card-body p-5 text-center">

                        <h2 className="mb-5">Sign in</h2>

                        <div className="form-outline mb-4">
                            <input type="text" id="user_name" className="form-control" placeholder="Username"
                                value={userEnteredInfo.user_name} onChange={handleInputChange} name="user_name" />
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="password" className="form-control" placeholder="Password" 
                                value={userEnteredInfo.password} onChange={handleInputChange} name="password"/>
                        </div>

                        <div className="form-check d-flex justify-content-start mb-4" style={{marginTop: "25px"}}>
                            <input className="form-check-input" type="checkbox" value="" id="form1Example3"/>
                            <label className="form-check-label" for="form1Example3" style={{marginLeft: "10px", color: "#585555"}}> Remember password </label>
                        </div>

                        <Link className={styles.btn_login} style={{marginTop: "15px", width: "fit-content"}} type="submit" onClick={findUser}>Login</Link>

                        <hr className="my-4" style={{opacity: "0.15"}}/>

                        <div class="d-flex align-items-center justify-content-center pb-4">
                            <p class="mb-0 me-2">Don't have an account?</p>
                            <Link to={"/new+user/signup"}>Sign up</Link>
                        </div>

                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}
export default Login;