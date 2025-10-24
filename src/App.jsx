/** @format */

import { LandingPage } from './components/LandingPage';
import { LoginPage } from './components/LoginPage';
import { SiginPage } from './components/SigninPage';
import { DashboardPage } from './components/DashboardPage';
import { Routes, Route } from 'react-router';
import './App.css';

function App() {
	return (
		<Routes>
			<Route path='/' element={<LandingPage />} />
			<Route path='login' element={<LoginPage />} />
			<Route path='signin' element={<SiginPage />} />
			<Route path='dashboard' element={<DashboardPage />} />
		</Routes>
	);
}

export default App;
