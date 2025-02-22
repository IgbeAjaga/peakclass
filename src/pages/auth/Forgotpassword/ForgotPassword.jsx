import { useState } from "react";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleReset = (e) => {
        e.preventDefault();
        console.log("Password reset link sent to:", email);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-24">
            {/* pt-24 adds space below the sticky navbar */}
            <div className="bg-white shadow-md p-6 rounded-md w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
                <form onSubmit={handleReset} className="flex flex-col space-y-3">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        className="border p-2 rounded"
                    />
                    <button type="submit" className="bg-purple-500 text-white p-2 rounded">
                        Send Reset Link
                    </button>
                </form>
                <p className="text-sm mt-3 text-center">
                    <a href="/login" className="text-purple-500">Back to Login</a>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
