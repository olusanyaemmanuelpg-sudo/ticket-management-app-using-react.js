/** @format */

import './TicketManagement.css';

export function TicketManagement({ tickets = [], setTickets }) {
	if (!tickets || tickets.length === 0) {
		return (
			<main style={{ padding: '2rem' }}>
				<h2>No tickets found</h2>
				<p>Create a ticket or return to the dashboard.</p>
			</main>
		);
	}

	return (
		<main className='tickets-page'>
			<h2>Your Tickets</h2>
			<div className='tickets-list'>
				{tickets.map((t) => (
					<div key={t.id} className='ticket-card'>
						<h3>{t.title}</h3>
						<p className='ticket-desc'>{t.description}</p>
						<div className='ticket-meta'>
							<span className='ticket-priority'>{t.priority}</span>
							<span className='ticket-status'>{t.status}</span>
						</div>
					</div>
				))}
			</div>
		</main>
	);
}
