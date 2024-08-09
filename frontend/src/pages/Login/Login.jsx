import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Login = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault();
        const rollNo = document.getElementById("rollNumber");
        const password = document.getElementById("password");
        const values = {
            rollNumber: rollNo.value,
            password: password.value
        };
        await axios.post("???", values)
            .then((res) => {
                setLoading(false);
                if (res.data === "user_not_found" || res.data === "password_do_not_match") {
                    alert("Enter valid username/password");
                } else {
                    localStorage.setItem("token", res.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            {loading ? <div className='loader'>Loading ...</div> :
                <div>
                    <div>
                        Login Form
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input type="text" required id="rollNumber" pattern='[2-9]{2}[A-Z]{3}[0-9]{3}' title='Roll number should be in format 22ABC132' />
                            <label>Roll No</label>
                        </div>
                        <div>
                            <input type="password" required id="password" />
                            <label>Password</label>
                        </div>
                        <div>
                            <input type="submit" value="Login" />
                        </div>
                        <div>
                            Not a member?
                             <Link to='/Register'>
                             Register
                             </Link>
                        </div>
                    </form>
                </div>
            }
        </>
    );
}

export default Login;
