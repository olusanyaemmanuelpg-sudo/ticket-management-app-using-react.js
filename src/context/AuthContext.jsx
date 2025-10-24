/** @format */

import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) throw new Error('useAuth must be used within AuthProvider');
	return context;
};

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const session = localStorage.getItem('ticketapp_session');
		if (session) {
			try {
				setUser(JSON.parse(session));
			} catch (err) {
				localStorage.removeItem('ticketapp_session');
				// eslint-disable-next-line no-console
				console.error('Failed to parse session:', err);
			}
		}
		setLoading(false);
	}, []);

	const login = (email, password) => {
		// simple mock auth for demo purposes
		if (email === 'admin@ticket.com' && password === 'password123') {
			const userData = { email, name: 'Admin User', id: 1 };
			localStorage.setItem('ticketapp_session', JSON.stringify(userData));
			setUser(userData);
			return { success: true };
		}
		return { success: false, error: 'Invalid credentials' };
	};

	const signup = (name, email) => {
		const userData = { email, name, id: Date.now() };
		localStorage.setItem('ticketapp_session', JSON.stringify(userData));
		setUser(userData);
		return { success: true };
	};

	const logout = () => {
		localStorage.removeItem('ticketapp_session');
		setUser(null);
	};

	return (
		<AuthContext.Provider value={{ user, login, signup, logout, loading }}>
			{children}
		</AuthContext.Provider>
	);
};
