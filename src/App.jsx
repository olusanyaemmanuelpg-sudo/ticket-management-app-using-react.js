/** @format */

import { LandingPage } from './components/LandingPage';
import { LoginPage } from './components/LoginPage';
import { Routes, Route } from 'react-router';
import './App.css';

function App() {
	return (
		<Routes>
			<Route path='/' element={<LandingPage />} />
			<Route path='login' element={<LoginPage />} />
		</Routes>
	);
}

export default App;
