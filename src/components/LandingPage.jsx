/** @format */

import './LandingPage.css';

export function LandingPage() {
	const featuresDescription = [
		{
			title: 'Real-time Updates',
			desc: 'Get instant notifications on ticket status changes',
		},
		{
			title: 'Team Collaboration',
			desc: 'Work together seamlessly with your team',
		},
		{
			title: 'Advanced Filtering',
			desc: 'Find tickets quickly with powerful search',
		},
	];
	return (
		<>
			<div className='circle'></div>
			<main>
				<nav>
					<h2 className='logo'>TicketFlow</h2>
					<div className='nav-btn'>
						<a href='#' className='secondaryButton'>
							Login
						</a>
						<a href='' className='primaryButton'>
							Signing
						</a>
					</div>
				</nav>

				<section className='heroSection'>
					<div className='circle2'></div>
					<h1 className='heroH1'>
						Manage Your Tickets
						<br />
						With Ease
					</h1>
					<p className='heroP'>
						A powerful and intuitive ticket management system built for modern
						teams. Track, organize, and resolve issues faster.
					</p>
					<button className='heroBtn'>Start Free Trial</button>
				</section>
				<svg className='svg' viewBox='0 0 1440 320' preserveAspectRatio='none'>
					<path
						fill='rgba(59, 130, 246, 0.1)'
						d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
				</svg>
			</main>

			<section className='featuresSection'>
				<div className='features'>
					<h2>Key Feautures</h2>
					<div className='feautures-grid'>
						{featuresDescription.map((features, i) => (
							<div key={i} className='featureCard'>
								<h3>{features.title}</h3>
								<p>{features.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>
			<footer>
				<div className='footertext'>
					© 2025 TicketFlow. All rights reserved.
				</div>
			</footer>
		</>
	);
}
