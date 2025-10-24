/** @format */

import './LoginPage.css';

export function LoginPage() {
	return (
		<section className='loginSection'>
			<div className='loginPage'>
				<h2>Welcome Back</h2>
				<p>Login to your account</p>

				<div className='login-input'>
					<label>Email</label>
					<input type='email' placeholder='admin@ticket.com' />
				</div>
				<div className='login-input'>
					<label>Password</label>
					<input type='password' placeholder='password123' />
				</div>

				<button className='login-btn'>Login</button>
				<p className='login-signup'>
					Don't have an account?
					<a href=''> Sign up</a>
				</p>
				<button className='back-to-home'>Back to Home</button>
			</div>
		</section>
	);
}
