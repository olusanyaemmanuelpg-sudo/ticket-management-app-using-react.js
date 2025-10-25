/** @format */

import React from 'react';
import { Navigate, useLocation } from 'react-router';
import { useAuth } from '../context/AuthContext';

export function RequireAuth({ children }) {
	const { user, loading } = useAuth();
	const location = useLocation();

	// while we check auth, don't flash protected UI
	if (loading) return null;

	if (!user) {
		// redirect to login, preserve attempted url in state
		return <Navigate to='/login' state={{ from: location }} replace />;
	}

	return children;
}
