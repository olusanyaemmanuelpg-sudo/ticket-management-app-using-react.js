/** @format */

import './DashboardPage.css';
import { FooterPage } from './Footer';

export function DashboardPage() {
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
					<button>Logout</button>
				</nav>
				<h1>Welcome, Admin Deji!</h1>
				<p>Here's your ticket overview</p>

				<div className='dashboard-grid'>
					<StatCard title='Total Tickets' value={2} color='#3b82f6' />
					<StatCard title='Open' value={1} color='#10b981' />
					<StatCard title='In Progress' value={1} color='#f59e0b' />
					<StatCard title='Closed' value={0} color='#6b7280' />
				</div>
				<button className='manage-tickets'>Manage Tickets →</button>
			</div>
			<FooterPage />
		</main>
	);
}
