import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
    const [loading, setLoading] = useState(false);

    const userSubmit = async (event) => {
        setLoading(true);
        event.preventDefault();
        const container = document.getElementById("container");
        const rollNo = document.getElementById("rollNo");
        const userPass = document.getElementById("password");
        const userConfirmPass = document.getElementById("confirmPassword");

        if (userPass.value !== userConfirmPass.value) {
            setLoading(false);
            const errorMessage = document.createElement('h4');
            errorMessage.innerHTML = "Please recheck your password";
            container.appendChild(errorMessage);
            setTimeout(() => {
                container.removeChild(errorMessage);
            }, 3000);
        } else {
            const values = {
                rollNumber: rollNo.value,
                password: userPass.value
            };
            await axios.post('???', values)
                .then(res => {
                    setLoading(false);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    };

    return (
        <>
            {loading ? <div className="loader">Loading ...</div> :
                <div id='container'>
                    <div>
                        Registration Form
                    </div>
                    <form onSubmit={userSubmit}>
                        <div>
                            <input type="text" name='rollNumber' required id='rollNo' pattern='[2-9]{2}[A-Z]{3}[0-9]{3}' title='Roll number should be in format 22ABC132' />
                            <label>Roll No</label>
                        </div>
                        <div>
                            <input type="password" name='Password' required id='password' />
                            <label>Password</label>
                        </div>
                        <div>
                            <input type="password" name='confirmPassword' required id='confirmPassword' />
                            <label>Confirm Password</label>
                        </div>
                        <div>
                            <input type="submit" value="Register" />
                        </div>
                        <div>
                            Already a member? 
                            <Link to='/'>
                            Sign in
                            </Link>
                        </div>
                    </form>
                </div>
            }
        </>
    );
}

export default Register;
