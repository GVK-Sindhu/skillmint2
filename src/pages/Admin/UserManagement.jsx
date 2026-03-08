import React from 'react';
import { useAuth } from '../../context/AuthContext';
import {
    User,
    Shield,
    MoreVertical,
    Search,
    Download,
    Mail,
    Calendar,
    ArrowUpDown
} from 'lucide-react';

const UserManagement = () => {
    const { user } = useAuth();

    const users = [
        { id: 1, name: 'Root Admin', email: 'admin@skillmint.com', role: 'super_admin', status: 'active', joined: 'Oct 12, 2025' },
        { id: 2, name: 'Abhishek Puranik', email: 'abhishek@faculty.com', role: 'faculty', status: 'active', joined: 'Nov 02, 2025' },
        { id: 3, name: 'Jane Doe', email: 'jane@student.com', role: 'student', status: 'active', joined: 'Dec 15, 2025' },
        { id: 4, name: 'John Smith', email: 'john@student.com', role: 'student', status: 'pending', joined: 'Jan 05, 2026' },
        { id: 5, name: 'Recruiter X', email: 'x@recruiter.com', role: 'faculty', status: 'inactive', joined: 'Feb 10, 2026' },
    ];

    const getRoleBadge = (role) => {
        const styles = {
            super_admin: 'bg-primary-600 text-white shadow-md shadow-primary-600/20',
            admin: 'bg-primary-100 text-primary-700',
            faculty: 'bg-secondary-50 text-secondary-600 border border-secondary-200',
            student: 'bg-gray-100 text-text-secondary border border-gray-200'
        };
        return (
            <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${styles[role]}`}>
                {role.replace('_', ' ')}
            </span>
        );
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">User Management</h1>
                    <p className="text-text-secondary mt-1">Manage global user accounts, roles, and access credentials.</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-text-primary hover:bg-gray-50 flex items-center gap-2 shadow-xs">
                        <Download size={18} />
                        Export CSV
                    </button>
                    <button className="btn-primary flex items-center gap-2">
                        Add New User
                    </button>
                </div>
            </header>

            {/* Filters bar */}
            <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 group">
                    <Search className="absolute left-3 top-3 text-text-secondary group-focus-within:text-primary-600 transition-colors" size={20} />
                    <input
                        type="text"
                        placeholder="Search by name, email or role..."
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-2xl text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-600/10 focus:bg-white transition-all shadow-inner"
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <select className="px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-semibold text-text-primary outline-none focus:ring-2 focus:ring-primary-600/10 transition-all">
                        <option>All Roles</option>
                        <option>Student</option>
                        <option>Faculty</option>
                        <option>Admin</option>
                    </select>
                    <button className="p-2.5 bg-gray-50 border border-gray-100 rounded-2xl text-text-secondary hover:text-primary-600 hover:bg-white transition-all shadow-xs">
                        <ArrowUpDown size={20} />
                    </button>
                </div>
            </div>

            <section className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50/50 text-text-secondary text-[11px] font-bold uppercase tracking-widest border-b border-gray-50">
                            <tr>
                                <th className="px-8 py-5">User Profile</th>
                                <th className="px-8 py-5 text-center">Current Role</th>
                                <th className="px-8 py-5">Membership Date</th>
                                <th className="px-8 py-5 text-center">Account Status</th>
                                <th className="px-8 py-5 text-right">Settings</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {users.map((u) => (
                                <tr key={u.id} className="hover:bg-gray-50/30 transition-colors group">
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center font-bold text-primary-600 border border-gray-200 shadow-xs ring-2 ring-transparent group-hover:ring-primary-100 transition-all">
                                                {u.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-text-primary group-hover:text-primary-600 transition-colors">{u.name}</p>
                                                <div className="flex items-center gap-1.5 text-xs text-text-secondary mt-0.5">
                                                    <Mail size={12} />
                                                    {u.email}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-center">
                                        {getRoleBadge(u.role)}
                                    </td>
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-2 text-xs text-text-secondary font-medium">
                                            <Calendar size={14} />
                                            {u.joined}
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-center">
                                        <span className={`w-2.5 h-2.5 rounded-full inline-block mr-2 ${u.status === 'active' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' :
                                                u.status === 'pending' ? 'bg-accent-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]' : 'bg-gray-400'
                                            }`}></span>
                                        <span className="text-[11px] font-bold text-text-secondary uppercase tracking-tight">{u.status}</span>
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <button className="p-2 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all">
                                            <MoreVertical size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-6 bg-gray-50/20 border-t border-gray-50 text-center">
                    <p className="text-xs text-text-secondary font-medium">Showing 5 out of 2,845 total active users</p>
                </div>
            </section>
        </div>
    );
};

export default UserManagement;
