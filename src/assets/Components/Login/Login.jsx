import React, { useState } from 'react';
import "../Login/login.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { LuUser } from "react-icons/lu";
import { MdLockOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const checkApi = async () => {
            const res = await axios.get("https://67007c964da5bd2375542275.mockapi.io/users");
            const users = res.data;
 
            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                navigate(`/welcome/${user.id}`);
            } else {
                setError('Invalid username or password');
            }
    };
   

    const handleSubmit = (e) => {
        e.preventDefault(); 
        checkApi(); 
    };

    return (
        <>
            <main>
                <section className="login-section">
                    <div className="login-container">
                        <form className="login-form" onSubmit={handleSubmit}>
                            <span className="login-title">Login</span>

                            <span>Username</span>
                            <div className="login-input">
                                <LuUser className='username' />
                                <input
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className='inp-user'
                                    type="text"
                                    placeholder="Type your username"
                                />
                            </div>

                            <span>Password</span>
                            <div className="login-input">
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="Type your password"
                                />
                                <MdLockOutline className='lock' />
                            </div>

                            {error && <p className="input-error">{error}</p>}

                            <div className="text-right">
                                <a href="">Forgot password?</a>
                            </div>

                            <button type="submit">LOGIN</button>

                            <div className="text-center" onClick={() => navigate("/signUp")}>
                                <a href="">Or Sign Up Using</a>
                            </div>

                            <div className="icons">
                                <a href=""><FaFacebookF className='facebook' /></a>
                                <a href=""><FaTwitter className='twitter' /></a>
                                <a href=""><FaGoogle className='google' /></a>
                            </div>

                            <div className="text-bottom">
                                <span className="txt1">Or Sign Up Using</span> <br />
                                <a href="#" className="txt2">Sign Up</a>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Login;
