/** @format */

import { useState } from 'react';
import { useNavigate } from 'react-router';

import './SigninPage.css';
import { FooterPage } from './Footer';

export function SiginPage({ useAuth, showToast }) {
	const { signup } = useAuth();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errors, setErrors] = useState('');
	const navigate = useNavigate();

	const fullnameInput = (event) => {
		setName(event.target.value);
		setErrors({ ...errors, fullname: '' });
	};
	const emailInput = (event) => {
		setEmail(event.target.value);
		setErrors({ ...errors, email: '' });
	};
	const passwordInput = (event) => {
		setPassword(event.target.value);
		setErrors({ ...errors, password: '' });
	};

	const [showPass, setShowPass] = useState(true);
	const showPasswordInput = () => {
		if (showPass) {
			setShowPass(false);
		} else {
			setShowPass(true);
		}
	};

	const submitAction = (event) => {
		event.preventDefault();
		const newErrors = {};
		if (!name) newErrors.fullname = 'Fullname is required';
		if (!email) newErrors.email = 'Email is required';
		if (!password) newErrors.password = 'Password is required';

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return; // stop if validation failed
		}

		const result = signup(name, email, password);
		if (result && result.success) {
			showToast('Account created successfully', 'success');
			navigate('/dashboard');
		}
	};
	return (
		<>
			<section className='Signin-section'>
				<div className='signin-page'>
					<h2>Create Account</h2>
					<p>Get started with TicketFlow</p>
					<div className='signInput'>
						<label> Full Name</label>
						<input type='text' value={name} onChange={fullnameInput} />

						{errors.fullname && (
							<span className='input-error'>{errors.fullname}</span>
						)}
					</div>
					<div className='signInput'>
						<label> Email</label>
						<input type='email' value={email} onChange={emailInput} />
						{errors.email && (
							<span className='input-error'>{errors.email}</span>
						)}
					</div>
					<div className='signInput'>
						<label> Password</label>
						<input
							type={showPass ? 'password' : 'text'}
							value={password}
							onChange={passwordInput}
						/>
						<i
							className={
								showPass
									? 'fa-solid fa-lock password-icon'
									: 'fa-solid fa-lock-open password-icon'
							}
							onClick={showPasswordInput}></i>
						{errors.password && (
							<span className='input-error'>{errors.password}</span>
						)}
					</div>

					<button className='signin-btn' onClick={submitAction}>
						Sign Up
					</button>
					<p className='sign-login'>
						Already have an account? <a href='login'>Login</a>
					</p>
					<a href='/'>
						<button className='back-to-home'>Back to Home</button>
					</a>
				</div>
			</section>
			<FooterPage />
		</>
	);
}
