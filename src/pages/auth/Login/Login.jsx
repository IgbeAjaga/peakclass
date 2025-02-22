import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login details:", { email, password });
        navigate("/dashboard"); // Redirect to a placeholder dashboard
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-24">
            <div className="bg-white shadow-md p-6 rounded-md w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Log in to your account</h2>
                <form onSubmit={handleLogin} className="flex flex-col space-y-3">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border p-2 rounded"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="border p-2 rounded"
                    />
                    <button type="submit" className="bg-purple-500 text-white p-2 rounded">
                        Login
                    </button>
                </form>
                <p className="text-sm mt-3 text-center">
                    Forgot password? <a href="/forgot-password" className="text-purple-500">Reset it here</a>
                </p>
                <p className="text-sm text-center">
                    Don't have an account? <a href="/signup" className="text-purple-500">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
