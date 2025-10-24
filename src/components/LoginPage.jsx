/** @format */

import { useState } from 'react';
import { useNavigate } from 'react-router';
import './LoginPage.css';

export function LoginPage({ useAuth, showToast }) {
	const { login } = useAuth();
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState({});

	const emailInput = (event) => {
		setEmail(event.target.value);
		setErrors({ ...errors, email: '' });
	};
	const passwordInput = (event) => {
		setPassword(event.target.value);
		setErrors({ ...errors, password: '' });
	};
	const submitAction = (event) => {
		event.preventDefault();
		const newErrors = {};
		if (!email) newErrors.email = 'Email is required';
		if (!password) newErrors.password = 'Password is required';
		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return; // stop if validation failed
		}

		const result = login(email, password);
		if (result && result.success) {
			showToast('Login successful!', 'success');

			navigate('/dashboard');
			return;
		}

		showToast(result?.error || 'Login failed', 'error');
	};
	return (
		<section className='loginSection'>
			<div className='loginPage'>
				<h2>Welcome Back</h2>
				<p>Login to your account</p>

				<div className='login-input'>
					<label>Email</label>
					<input
						type='email'
						placeholder='admin@ticket.com'
						value={email}
						onChange={emailInput}
					/>
					{errors.email && <span className='input-error'>{errors.email}</span>}
				</div>
				<div className='login-input'>
					<label>Password</label>
					<input
						type='password'
						placeholder='password123'
						value={password}
						onChange={passwordInput}
					/>
					{errors.password && (
						<span className='input-error'>{errors.password}</span>
					)}
				</div>

				<button className='login-btn' onClick={submitAction}>
					Login
				</button>
				<p className='login-signup'>
					Don't have an account?
					<a href='signin'> Sign up</a>
				</p>
				<a href='/'>
					<button className='back-to-home'>Back to Home</button>
				</a>
			</div>
		</section>
	);
}
