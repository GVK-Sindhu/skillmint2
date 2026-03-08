import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { GraduationCap, User, Mail, Lock, ShieldCheck, ArrowRight } from 'lucide-react';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'student'
    });
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Role auto-assignment bonus trick as requested in point 8
        let finalRole = formData.role;
        if (formData.email.includes("faculty")) {
            finalRole = "faculty";
        }

        const userData = {
            ...formData,
            role: finalRole,
            name: formData.name || formData.email.split('@')[0]
        };

        signup(userData);

        // Point 1: Redirect to Login page instead of directly to dashboard
        alert("Signup successful! Please login to continue.");
        navigate('/login');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
            <div className="max-w-md w-full space-y-8 bg-surface p-10 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-center">
                    <div className="flex justify-center flex-col items-center gap-2">
                        <div className="p-3 bg-primary-600 rounded-xl shadow-lg shadow-primary-600/20">
                            <GraduationCap size={40} className="text-white" />
                        </div>
                        <h2 className="mt-4 text-3xl font-extrabold text-text-primary tracking-tight">Create Account</h2>
                        <p className="mt-2 text-sm text-text-secondary">Join the SkillMint community today.</p>
                    </div>
                </div>
                <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div className="relative">
                            <User className="absolute left-3 top-4 text-text-secondary" size={20} />
                            <input
                                type="text"
                                required
                                className="input-field pl-10 h-12"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="relative">
                            <Mail className="absolute left-3 top-4 text-text-secondary" size={20} />
                            <input
                                type="email"
                                required
                                className="input-field pl-10 h-12"
                                placeholder="Email address"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-3 top-4 text-text-secondary" size={20} />
                            <input
                                type="password"
                                required
                                className="input-field pl-10 h-12"
                                placeholder="Password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>

                        {/* Point 1: Role Selection */}
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-text-secondary uppercase tracking-widest pl-1">Join as</label>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, role: 'student' })}
                                    className={`h-12 rounded-xl border-2 flex items-center justify-center gap-2 transition-all font-bold text-sm ${formData.role === 'student' ? 'bg-primary-50 border-primary-600 text-primary-600 shadow-sm' : 'bg-gray-50 border-gray-100 text-text-secondary'}`}
                                >
                                    <User size={18} />
                                    Student
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFormData({ ...formData, role: 'faculty' })}
                                    className={`h-12 rounded-xl border-2 flex items-center justify-center gap-2 transition-all font-bold text-sm ${formData.role === 'faculty' ? 'bg-primary-50 border-primary-600 text-primary-600 shadow-sm' : 'bg-gray-50 border-gray-100 text-text-secondary'}`}
                                >
                                    <ShieldCheck size={18} />
                                    Faculty
                                </button>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn-primary w-full h-12 flex items-center justify-center"
                    >
                        Create Account
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </button>

                    <p className="text-[10px] text-center text-text-secondary italic">
                        Tip: Emails containing "faculty" are automatically assigned the faculty role.
                    </p>
                </form>
                <div className="text-center text-sm">
                    <p className="text-text-secondary">
                        Already have an account?{' '}
                        <Link to="/login" className="font-semibold text-primary-600 hover:text-primary-700 transition-colors">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
