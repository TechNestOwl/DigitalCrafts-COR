import React from "react";

export default function SignIn() {
    return(
        <div className="signInContainer">
            <h2>Sign In</h2>
            <form>
                <input placeholder="Enter email">
                </input>
                <input placeholder="Password...">
                </input>
                <button>Sign In</button>
            </form>
            <p>New user: create log in <a href='#'>here</a></p>
        </div>
    );
};