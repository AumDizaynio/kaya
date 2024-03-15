import React from "react";
import "./SignIn.scss";

const SignIn = () => {
    return (
        <div className="SignIn-main">
            <div className="left">
                <h2>INSPIRED BY THE FUTURE:</h2>
                <h1>THE VISION UI DASHBOARD</h1>
            </div>
            <div className="right">
                <div className="r-top">
                    <h2>Nice to see you!</h2>
                    <h3>Enter your email and password to sign in</h3>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="Your email address" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="text" placeholder="Your password" />
                    </div>

                    <div className="RememberMe">
                        <div className="radio">
                            <div className="back">
                                <div className="in">

                                </div>
                            </div>
                        </div>
                        <p>Remeber Me</p>
                    </div>
                    <button>
                        SIGN IN
                    </button>
                    <p>Don't have an account? <span>Sign up</span></p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
