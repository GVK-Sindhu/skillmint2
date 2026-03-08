import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { GraduationCap, Mail, Lock, LogIn } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const success = login({ email, password });

        if (success) {
            // Point 3: Redirect based on role
            const role = localStorage.getItem('role');

            if (role === 'student') navigate('/student');
            else if (role === 'faculty') navigate('/faculty');
            else navigate('/admin');
        } else {
            alert("Invalid credentials. Please signup if you haven't already.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <div className="max-w-md w-full space-y-8 bg-surface p-10 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center">
                    <div className="flex justify-center flex-col items-center gap-2">
                        <div className="p-3 bg-primary-600 rounded-xl shadow-lg shadow-primary-600/20">
                            <GraduationCap size={40} className="text-white" />
                        </div>
                        <h2 className="mt-4 text-3xl font-extrabold text-text-primary tracking-tight font-heading">SkillMint Login</h2>
                        <p className="mt-2 text-sm text-text-secondary">Welcome back! Please enter your details.</p>
                    </div>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="relative">
                            <Mail className="absolute left-3 top-4 text-text-secondary" size={20} />
                            <input
                                type="email"
                                required
                                className="input-field pl-10 h-12"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-3 top-4 text-text-secondary" size={20} />
                            <input
                                type="password"
                                required
                                className="input-field pl-10 h-12"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn-primary w-full h-12 flex items-center justify-center gap-2"
                    >
                        <LogIn size={20} />
                        Sign in
                    </button>

                    <div className="flex justify-center">
                        <Link to="/signup" className="text-xs font-semibold text-primary-600 hover:text-primary-700 transition-colors bg-primary-50 px-4 py-2 rounded-full border border-primary-100">
                            Don't have an account? Create one
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
