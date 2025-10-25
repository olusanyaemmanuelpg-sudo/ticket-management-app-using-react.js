/** @format */

import { useNavigate } from 'react-router';
import './DashboardPage.css';
import { FooterPage } from './Footer';

export function DashboardPage({ showToast, useAuth, tickets }) {
	const { logout, user } = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		showToast('Logged out successfully', 'success');
		navigate('/');
	};

	const stats = {
		total: tickets.length,
		open: tickets.filter((t) => t.status === 'open').length,
		inProgress: tickets.filter((t) => t.status === 'in_progress').length,
		closed: tickets.filter((t) => t.status === 'closed').length,
	};

	const StatCard = ({ title, value, color }) => {
		return (
			<div className='StatcardStyle' style={{ border: `2px solid ${color}33` }}>
				<h3>{title}</h3>
				<p>{value}</p>
			</div>
		);
	};
	return (
		<main className='dashboard-section'>
			<div className='dashboard-page'>
				<nav className='dash-nav'>
					<h2>TicketFlow</h2>
					<button onClick={handleLogout}>Logout</button>
				</nav>
				<h1>Welcome, {user?.name} !</h1>
				<p>Here's your ticket overview</p>

				<div className='dashboard-grid'>
					<StatCard title='Total Tickets' value={stats.total} color='#3b82f6' />
					<StatCard title='Open' value={stats.open} color='#10b981' />
					<StatCard
						title='In Progress'
						value={stats.inProgress}
						color='#f59e0b'
					/>
					<StatCard title='Closed' value={stats.closed} color='#6b7280' />
				</div>
				<button
					className='manage-tickets'
					onClick={() => navigate('/manage-tickets')}>
					Manage Tickets →
				</button>
			</div>
			<FooterPage />
		</main>
	);
}
