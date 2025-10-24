/** @format */

import './DashboardPage.css';

export function DashboardPage() {
	return (
		<main className='dashboard-section'>
			<div className='dashboard-page'>
				<nav className='dash-nav'>
					<h2>TicketFlow</h2>
					<button>Logout</button>
				</nav>
				<h1>Welcome, Admin Deji!</h1>
				<p>Here's your ticket overview</p>
			</div>
		</main>
	);
}
