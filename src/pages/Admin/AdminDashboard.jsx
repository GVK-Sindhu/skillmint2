import React from 'react';
import { useAuth } from '../../context/AuthContext';
import {
    Users,
    BarChart3,
    ShieldAlert,
    Activity,
    ArrowUpRight,
    Search,
    Filter
} from 'lucide-react';

const AdminDashboard = () => {
    const { user } = useAuth();

    const stats = [
        { label: 'Total Users', value: '2,845', icon: Users, color: 'text-primary-600', bg: 'bg-primary-50' },
        { label: 'Active Sessions', value: '142', icon: Activity, color: 'text-secondary-500', bg: 'bg-secondary-50' },
        { label: 'Retention Rate', value: '94.2%', icon: BarChart3, color: 'text-emerald-600', bg: 'bg-emerald-50' },
        { label: 'Security Alerts', value: '0', icon: ShieldAlert, color: 'text-accent-500', bg: 'bg-accent-50' },
    ];

    const recentLogs = [
        { id: 1, action: 'Role Updated', target: 'user_992@skillmint.com', time: '5 mins ago', status: 'completed' },
        { id: 2, action: 'Course Created', target: 'Advanced React Architecture', time: '12 mins ago', status: 'completed' },
        { id: 3, action: 'User Deleted', target: 'spammer_44@tempmail.com', time: '1 hour ago', status: 'warning' },
        { id: 4, action: 'Settings Changed', target: 'Auth Persistence Policy', time: '3 hours ago', status: 'completed' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <p className="text-primary-600 font-bold text-xs uppercase tracking-[0.2em] mb-1">Control Center</p>
                    <h1 className="text-3xl font-extrabold text-text-primary tracking-tight">Admin Console</h1>
                    <p className="text-text-secondary mt-1 italic opacity-80">Connected as {user.name} ({user.role})</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-bold text-text-primary hover:bg-gray-50 flex items-center gap-2 shadow-xs transition-all">
                        <Filter size={18} />
                        Filters
                    </button>
                    <button className="btn-primary flex items-center gap-2">
                        System Export
                        <ArrowUpRight size={18} />
                    </button>
                </div>
            </header>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group overflow-hidden relative">
                        <div className="flex items-center gap-4 relative z-10">
                            <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color} group-hover:rotate-6 transition-transform shadow-sm`}>
                                <stat.icon size={28} />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-text-secondary uppercase tracking-widest leading-none mb-1">{stat.label}</p>
                                <p className="text-2xl font-black text-text-primary tracking-tight">{stat.value}</p>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 p-2 opacity-5 translate-x-1/4 -translate-y-1/4 rotate-12">
                            <stat.icon size={120} className={stat.color} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                <section className="xl:col-span-2 bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                    <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/20">
                        <h2 className="text-xl font-extrabold text-text-primary flex items-center gap-3 tracking-tight font-heading">
                            <Activity className="text-primary-600" size={24} />
                            Real-time Audit Logs
                        </h2>
                        <button className="text-sm font-bold text-primary-600 hover:underline">View All Activities</button>
                    </div>
                    <div className="p-0">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50/50 text-text-secondary text-[11px] font-bold uppercase tracking-widest">
                                <tr>
                                    <th className="px-8 py-4">Action</th>
                                    <th className="px-8 py-4">Target Resource</th>
                                    <th className="px-8 py-4">Timestamp</th>
                                    <th className="px-8 py-4">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {recentLogs.map((log) => (
                                    <tr key={log.id} className="hover:bg-gray-50/50 transition-colors group">
                                        <td className="px-8 py-5">
                                            <span className="text-sm font-bold text-text-primary group-hover:text-primary-600 transition-colors">{log.action}</span>
                                        </td>
                                        <td className="px-8 py-5">
                                            <span className="text-sm text-text-secondary font-mono">{log.target}</span>
                                        </td>
                                        <td className="px-8 py-5">
                                            <span className="text-xs text-text-secondary font-medium">{log.time}</span>
                                        </td>
                                        <td className="px-8 py-5">
                                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${log.status === 'completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-accent-50 text-accent-600'
                                                }`}>
                                                {log.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                <aside className="space-y-8">
                    <section className="bg-primary-50 border border-primary-100 rounded-3xl p-8 relative overflow-hidden group">
                        <div className="relative z-10">
                            <h3 className="text-lg font-extrabold text-primary-600 mb-4 tracking-tight">System Status</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-3 bg-white rounded-xl shadow-sm border border-primary-100">
                                    <span className="text-xs font-bold text-text-secondary uppercase">Frontend</span>
                                    <span className="flex items-center gap-2 text-emerald-600 text-xs font-bold">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                                        Operational
                                    </span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-white rounded-xl shadow-sm border border-primary-100">
                                    <span className="text-xs font-bold text-text-secondary uppercase">API Mock</span>
                                    <span className="flex items-center gap-2 text-emerald-600 text-xs font-bold">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                                        Operational
                                    </span>
                                </div>
                            </div>
                            <button className="w-full mt-6 py-3 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg active:scale-95">
                                Purge Cache
                            </button>
                        </div>
                    </section>
                </aside>
            </div>
        </div>
    );
};

export default AdminDashboard;
