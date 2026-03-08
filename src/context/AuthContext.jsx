import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = (credentials) => {
        const { email, password } = credentials;

        // Check "Fake Database" (user key as requested in point 2/3)
        const storedUser = JSON.parse(localStorage.getItem('user'));

        // Special case for Super Admin (Backdoor)
        if (email === 'admin@skillmint.com' && password === 'admin123') {
            const superAdmin = {
                email,
                role: 'super_admin',
                name: 'System Admin'
            };
            setUser(superAdmin);
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('role', 'super_admin');
            return true;
        }

        if (storedUser && email === storedUser.email && password === storedUser.password) {
            setUser(storedUser);
            // Point 3: Set isLoggedIn and role separately
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('role', storedUser.role);
            return true;
        }

        return false;
    };

    const signup = (userData) => {
        // Point 2: Store User in localStorage as "user"
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        // Point 6: Logout logic
        localStorage.clear();
        setUser(null);
    };

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        const role = localStorage.getItem('role');
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (isLoggedIn === 'true') {
            if (role === 'super_admin') {
                setUser({ email: 'admin@skillmint.com', role: 'super_admin', name: 'System Admin' });
            } else if (storedUser) {
                setUser(storedUser);
            }
        }
        setLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, signup, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
