/** @format */

import { useState } from 'react';
import './TicketManagement.css';
import { FooterPage } from './Footer';
import { useNavigate } from 'react-router';

export function TicketManagement({ tickets, setTickets, showToast }) {
	const navigate = useNavigate();
	const [showForm, setShowForm] = useState(false);
	const [editingId, setEditingId] = useState(null);
	const [formData, setFormData] = useState({
		title: '',
		status: 'open',
		description: '',
	});
	const [errors, setErrors] = useState({});
	const handleSubmit = () => {
		const newErrors = {};
		if (!formData.title) newErrors.title = 'Title is required';
		if (!formData.description)
			newErrors.description = 'Description is required';

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		if (editingId) {
			setTickets(
				tickets.map((t) => (t.id === editingId ? { ...t, ...formData } : t))
			);
			showToast('Ticket updated successfully', 'success');
		} else {
			setTickets([
				...tickets,
				{ ...formData, id: Date.now(), createdAt: Date.now() },
			]);
			showToast('Ticket created successfully', 'success');
		}

		setFormData({
			title: '',
			status: 'open',
			description: '',
		});
		setEditingId(null);
		setShowForm(false);
		setErrors({});
	};

	const handleEdit = (ticket) => {
		setFormData({
			title: ticket.title,
			status: ticket.status,
			description: ticket.description || '',
		});
		setEditingId(ticket.id);
		setShowForm(true);
	};

	const handleDelete = (id) => {
		if (window.confirm('Are you sure you want to delete this ticket?')) {
			setTickets(tickets.filter((t) => t.id !== id));
			showToast('Ticket deleted successfully', 'success');
		}
	};

	const getStatusStyle = (status) => {
		const colors = {
			open: '#10b981',
			in_progress: '#f59e0b',
			closed: '#6b7280',
		};
		return {
			background: `${colors[status]}33`,
			color: colors[status],
			padding: '0.3rem 0.8rem',
			borderRadius: '6px',
			fontSize: '1rem',
			fontWeight: '600',
			textTransform: 'capitalize',
			display: 'inline-block',
		};
	};

	return (
		<main className='manage-tickets-page'>
			<section className='manage-ticket'>
				<nav>
					<h2>TicketFlow</h2>
					<button
						onClick={() => {
							navigate('/dashboard');
						}}>
						← Dashboard
					</button>
				</nav>
				<div className='manage-ticket-flex'>
					<h1>Tickets</h1>
					<button
						onClick={() => {
							setShowForm(!showForm);
							setEditingId(null);
							setFormData({
								title: '',
								status: 'open',
								description: '',
							});
						}}>
						{showForm ? 'cancel' : '+ New Ticket'}
					</button>
				</div>
				{showForm && (
					<>
						<div className='form-section'>
							<h3>{editingId ? 'Edit Ticket' : 'Create New Ticket'}</h3>

							<div className='form-input'>
								<label>Title *</label>
								<input
									value={formData.title}
									onChange={(e) => {
										setFormData({ ...formData, title: e.target.value });
										setErrors({ ...errors, title: '' });
									}}
								/>
								{errors.title && (
									<span className='input-error'>{errors.title}</span>
								)}
							</div>
							<div className='form-input'>
								<label>Status*</label>
								<select
									className='select-input'
									value={formData.status}
									onChange={(event) => {
										setFormData({ ...formData, status: event.target.value });
									}}>
									<option value='open'>open</option>
									<option value='in_progress'>In Progress</option>
									<option value='closed'>Closed</option>
								</select>
							</div>
							<div className='form-input'>
								<label>Description</label>
								<textarea
									value={formData.description}
									onChange={(e) => {
										setFormData({ ...formData, description: e.target.value });
									}}
									className='desc-input'></textarea>
								{errors.description && (
									<span className='input-error'>{errors.description}</span>
								)}
							</div>

							<button className='manage-btn' onClick={handleSubmit}>
								{editingId ? 'Update' : 'Create'} Ticket
							</button>
						</div>
					</>
				)}
				<div className='manage-grid'>
					{tickets.map((ticket) => (
						<div className='manage-grid-container'>
							<div className='manage-grid-section'>
								<div className='firstsection'>
									<h3>{ticket.title}</h3>
									<p>{ticket.description}</p>
									<span style={getStatusStyle(ticket.status)}>
										{ticket.status.replace('_', ' ')}
									</span>
								</div>
								<div className='secondsection'>
									<button
										className='edit-btn'
										onClick={() => handleEdit(ticket)}>
										Edit
									</button>
									<button
										className='del-btn'
										onClick={() => handleDelete(ticket.id)}>
										Delete
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
			<FooterPage />
		</main>
	);
}
