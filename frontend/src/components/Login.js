import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
            console.log("mkk hri issue ekk bosa");
        }
    }

    return (
        <>
            <form onSubmit={findUser}>
                <input type="text" id="user_name" placeholder="User Name"
                    value={userEnteredInfo.user_name} onChange={handleInputChange} name="user_name"
                />
                <input type="text" id="password" placeholder="Full Name"
                    value={userEnteredInfo.password} onChange={handleInputChange} name="password"
                />

                <button type="submit" onClick={findUser}>Sign in</button>
                <Link to={"/new+user/signup"}>Sign up</Link>
            </form>
        </>
    );
}
export default Login;