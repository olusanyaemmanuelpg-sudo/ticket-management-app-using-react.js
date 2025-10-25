/** @format */

import { AuthProvider, useAuth } from './context/AuthContext';
import React, { useEffect, useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { LoginPage } from './components/LoginPage';
import { SiginPage } from './components/SigninPage';
import { DashboardPage } from './components/DashboardPage';
import { TicketManagement } from './components/TicketManagement';
import { Routes, Route } from 'react-router';
import './App.css';

function App() {
	const [toastState, setToastState] = useState(null);
	const [tickets, setTickets] = useState([
		{
			id: 1,
			title: 'Fix login bug',
			status: 'open',
			description: 'Users cannot log in',
			priority: 'high',
			createdAt: Date.now(),
		},
		{
			id: 2,
			title: 'Update docs',
			status: 'in_progress',
			description: 'Need to update API docs',
			priority: 'medium',
			createdAt: Date.now(),
		},
	]);

	const showToast = (...args) => {
		let message,
			type = 'info',
			duration = 3000;
		if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null) {
			({ message, type = 'info', duration = 3000 } = args[0]);
		} else {
			message = args[0];
			type = args[1] ?? 'info';
			duration = args[2] ?? 3000;
		}

		if (!message) return; // nothing to show

		setToastState({ message, type });
		if (duration > 0) {
			setTimeout(() => setToastState(null), duration);
		}
	};

	const Toast = ({ message, type, onClose }) => {
		useEffect(() => {
			const timer = setTimeout(onClose, 3000);
			return () => clearTimeout(timer);
		}, [onClose]);

		return (
			<div
				className='toast'
				style={{
					background:
						type === 'error'
							? '#ef4444'
							: type === 'success'
							? '#10b981'
							: '#3b82f6',
				}}>
				{message}
			</div>
		);
	};

	return (
		<AuthProvider>
			{toastState && (
				<Toast
					message={toastState.message}
					type={toastState.type}
					onClose={() => setToastState(null)}
				/>
			)}
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route
					path='login'
					element={<LoginPage useAuth={useAuth} showToast={showToast} />}
				/>
				<Route
					path='signin'
					element={<SiginPage useAuth={useAuth} showToast={showToast} />}
				/>
				<Route
					path='dashboard'
					element={
						<DashboardPage
							showToast={showToast}
							useAuth={useAuth}
							tickets={tickets}
						/>
					}
				/>
				<Route
					path='manage-tickets'
					element={
						<TicketManagement setTickets={setTickets} tickets={tickets} />
					}
				/>
			</Routes>
		</AuthProvider>
	);
}

export default App;
