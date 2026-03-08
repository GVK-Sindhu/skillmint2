import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Bell, Search, User, LogOut, Menu } from 'lucide-react';

const Navbar = ({ toggleSidebar }) => {
    const { user, logout } = useAuth();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        if (e.key === 'Enter' && searchQuery.trim()) {
            alert(`Searching for: "${searchQuery}"... (Search functionality simulated)`);
            setSearchQuery('');
        }
    };

    return (
        <nav className="h-16 bg-white border-b border-gray-100 sticky top-0 right-0 left-0 z-30 flex items-center justify-between px-6 shadow-sm">
            <div className="flex items-center gap-4 lg:ml-64">
                <button
                    onClick={toggleSidebar}
                    className="lg:hidden p-2 text-text-secondary hover:text-primary-600 transition-colors"
                >
                    <Menu size={24} />
                </button>
            </div>

            <div className="flex items-center gap-4">
                <button
                    onClick={() => alert("No new notifications")}
                    className="p-2 text-text-secondary hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors relative"
                >
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full border-2 border-white shadow-sm"></span>
                </button>

                <div className="h-8 w-[1px] bg-gray-200 mx-2"></div>

                <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-semibold text-text-primary leading-none">{user?.name}</p>
                        <p className="text-[10px] font-bold text-primary-600 uppercase tracking-wider mt-1">{user?.role?.replace('_', ' ')}</p>
                    </div>
                    <div className="group relative">
                        <button className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-50 transition-colors ring-1 ring-gray-100 hover:ring-primary-600/30">
                            <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-black text-sm shadow-sm ring-2 ring-primary-100">
                                {user?.name?.charAt(0).toUpperCase() || 'U'}
                            </div>
                        </button>
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 z-50">
                            <div className="px-4 py-2 border-b border-gray-50 mb-1">
                                <p className="text-[10px] text-text-secondary uppercase font-bold tracking-wider">Account Settings</p>
                            </div>
                            <button
                                onClick={logout}
                                className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-error font-semibold hover:bg-error/5 transition-colors"
                            >
                                <LogOut size={16} />
                                Sign out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
