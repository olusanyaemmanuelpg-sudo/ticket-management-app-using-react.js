/** @format */

import './SigninPage.css';

export function SiginPage() {
	return (
		<section className='Signin-section'>
			<div className='signin-page'>
				<h2>Create Account</h2>
				<p>Get started with TicketFlow</p>
				<div className='signInput'>
					<label> Full Name</label>
					<input type='text' />
				</div>
				<div className='signInput'>
					<label> Email</label>
					<input type='email' />
				</div>
				<div className='signInput'>
					<label> Password</label>
					<input type='password' />
				</div>

				<button className='signin-btn'>Sign Up</button>
				<p className='sign-login'>
					Already have an account? <a href='login'>Login</a>
				</p>
				<a href='/'>
					<button className='back-to-home'>Back to Home</button>
				</a>
			</div>
		</section>
	);
}
