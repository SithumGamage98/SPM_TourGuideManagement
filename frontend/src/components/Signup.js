import axios from "axios";
import { useState } from "react";

const Signup = () => {
    const [user_name, setUserName] = useState("");
    const [full_name, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [reEnteredpassword, setReEnteredPassword] = useState("");

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
                    console.log("Registration Successful!");
                })
                .catch((err) => {
                    console.log(err);
                })
        } else {
            console.log("Two passwords don't match")
        }
    }

    return (
        <>
            <form onSubmit={addUser}>
                <input type="text" id="inputUserName" placeholder="User Name" maxlength="10"
                    onChange={(e) => {
                        setUserName(e.target.value);
                    }}
                />
                <input type="text" id="inputName" placeholder="Full Name"
                    onChange={(e) => {
                        setFullName(e.target.value);
                    }}
                />
                <input type="email" id="inputEmail" placeholder="Email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <input type="password" id="password1" placeholder="Password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <input type="password" id="password2" placeholder="Re-enter Password"
                    onChange={(e) => {
                        setReEnteredPassword(e.target.value);
                    }}
                />

                <button type="submit" onSubmit={addUser}>Sign Up</button>
            </form>
        </>
    );
}
export default Signup;