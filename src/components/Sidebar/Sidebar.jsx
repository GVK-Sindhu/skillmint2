import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
    LayoutDashboard,
    GraduationCap,
    Briefcase,
    BarChart3,
    MessageSquare,
    Search,
    Award,
    ChevronRight,
    X
} from 'lucide-react';

const Sidebar = ({ isOpen, close }) => {
    const { user } = useAuth();
    const role = user?.role || 'student';

    const menuLinks = {
        student: [
            { name: 'Dashboard', icon: LayoutDashboard, path: '/student' },
            { name: 'LearnTrack', icon: GraduationCap, path: '/student/learn' },
            { name: 'Opportunities', icon: Briefcase, path: '/student/opportunities' },
            { name: 'Insight Hub', icon: BarChart3, path: '/student/insights' },
        ],
        faculty: [
            { name: 'Dashboard', icon: LayoutDashboard, path: '/faculty' },
            { name: 'Doubt Solver', icon: MessageSquare, path: '/faculty/doubts' },
            { name: 'Talent Discovery', icon: Search, path: '/faculty/talent' },
            { name: 'Rewards', icon: Award, path: '/faculty/rewards' },
        ],
        admin: [
            { name: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
            { name: 'User Management', icon: Search, path: '/admin/users' },
            { name: 'Analytics', icon: BarChart3, path: '/admin/analytics' },
        ],
        super_admin: [
            { name: 'Admin Dashboard', icon: LayoutDashboard, path: '/admin' },
            { name: 'User Management', icon: Search, path: '/admin/users' },
            { name: 'Role Control', icon: Award, path: '/admin/roles' },
            { name: 'Analytics', icon: BarChart3, path: '/admin/analytics' },
        ]
    };

    const links = menuLinks[role] || menuLinks.student;

    return (
        <aside className={`w-64 bg-white border-r border-gray-100 fixed top-0 bottom-0 left-0 z-40 flex flex-col transition-transform lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="h-16 flex items-center justify-between px-6 border-b border-gray-100">
                <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-primary-600 rounded-lg shadow-sm">
                        <GraduationCap size={20} className="text-white" />
                    </div>
                    <span className="text-xl font-bold text-text-primary tracking-tight">SkillMint</span>
                </div>
                <button onClick={close} className="lg:hidden text-text-secondary hover:text-primary-600">
                    <X size={20} />
                </button>
            </div>

            <nav className="flex-1 p-4 space-y-1 overflow-y-auto mt-4">
                <div className="text-[10px] font-bold text-text-secondary uppercase tracking-[0.1em] px-3 mb-4">
                    Main Menu
                </div>
                {links.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        end
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-3 rounded-xl transition-all group ${isActive
                                ? 'bg-primary-50 text-primary-600 font-semibold shadow-sm'
                                : 'text-text-secondary hover:bg-gray-50 hover:text-primary-600'
                            }`
                        }
                    >
                        <link.icon size={20} className="group-hover:scale-110 transition-transform" />
                        <span className="flex-1 text-sm">{link.name}</span>
                        <ChevronRight size={14} className={`opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-5px] group-hover:translate-x-0`} />
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-gray-100">
                <div className="bg-primary-600 rounded-2xl p-5 relative overflow-hidden group shadow-lg">
                    <div className="relative z-10">
                        <p className="text-[10px] font-bold text-primary-100 uppercase tracking-widest mb-1">Scale Higher</p>
                        <p className="text-sm font-semibold text-white mb-4 leading-snug">Unlock Premium Mentorship Plans</p>
                        <button className="w-full py-2 bg-white text-primary-600 text-xs font-bold rounded-lg transition-all hover:bg-primary-50 shadow-sm">
                            Get Pro
                        </button>
                    </div>
                    <Award className="absolute -bottom-4 -right-4 text-white/10 w-24 h-24 transform rotate-12 group-hover:scale-110 transition-transform duration-700" />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
