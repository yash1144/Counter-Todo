import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signupSuccess, signupFailure } from "../authSlice/auth";

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { error } = useSelector((state) => state.auth);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
            dispatch(signupFailure("All fields are required"));
            return;
        }

        if (password !== confirmPassword) {
            dispatch(signupFailure("Passwords do not match"));
            return;
        }

        const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = savedUsers.find((u) => u.email === email);
        if (userExists) {
            dispatch(signupFailure("User already exists"));
            return;
        }

        const newUser = { id: Date.now(), email, password };
        const updatedUsers = [...savedUsers, newUser];
        localStorage.setItem("users", JSON.stringify(updatedUsers));

        const userWithoutPassword = { id: newUser.id, email: newUser.email };
        dispatch(signupSuccess(userWithoutPassword));
        localStorage.setItem("user", JSON.stringify(userWithoutPassword));
        navigate("/counter");
    };

    return (
        <>
            <div>
                <h2>Sign Up</h2>
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
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Sign Up</button>
                    <div>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </form>
            </div>
        </>
    );
}

export default SignUp;
