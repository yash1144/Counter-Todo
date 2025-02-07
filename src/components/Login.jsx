import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSucess, loginFailure } from "../authSlice/auth";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { error } = useSelector((state) => state.auth);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            dispatch(loginFailure("All fields are required"));
            return;
        }

        const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
        const user = savedUsers.find(
            (u) => u.email === email && u.password === password
        );

        if (!user) {
            dispatch(loginFailure("Invalid Credentials"));
            return;
        }

        const userWithoutPassword = {
            id: user.id,
            email: user.email,
        };

        dispatch(loginSucess(userWithoutPassword));
        localStorage.setItem("user", JSON.stringify(userWithoutPassword));
        navigate("/counter");
    };

    return (
        <>
            <div>
                <h2>Login</h2>
                {error && <p>{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Login</button>
                    <div>
                        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;