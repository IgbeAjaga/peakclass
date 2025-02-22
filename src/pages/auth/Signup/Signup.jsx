import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "student",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignup = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        console.log("Signup details:", formData);
        navigate("/login"); // Redirect to login page
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-24"> 
            {/* pt-24 pushes the form down to avoid overlap with the sticky navbar */}
            <div className="bg-white shadow-md p-6 rounded-md w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Create an account to continue</h2>
                <form onSubmit={handleSignup} className="flex flex-col space-y-3">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border p-2 rounded"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border p-2 rounded"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="border p-2 rounded"
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        className="border p-2 rounded"
                    />
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="border p-2 rounded"
                    >
                        <option value="student">Student</option>
                        <option value="tutor">Tutor</option>
                        <option value="partner">Partner</option>
                        <option value="admin">Admin</option>
                    </select>
                    <button type="submit" className="bg-purple-500 text-white p-2 rounded">
                        Sign Up
                    </button>
                </form>
                <p className="text-sm mt-3 text-center">
                    Already have an account? <a href="/login" className="text-purple-500">Login here</a>
                </p>
            </div>
        </div>
    );
};

export default Signup;
