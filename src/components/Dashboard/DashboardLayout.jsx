import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

const DashboardLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-background">
            <Sidebar isOpen={isSidebarOpen} close={() => setIsSidebarOpen(false)} />

            <div className="lg:ml-64 transition-all duration-300">
                <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

                <main className="p-4 md:p-8 mt-16 max-w-[1600px] mx-auto min-h-[calc(100vh-64px)]">
                    {children}
                </main>
            </div>

            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-text-primary/40 backdrop-blur-sm z-30 lg:hidden transition-all duration-500"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
        </div>
    );
};

export default DashboardLayout;
