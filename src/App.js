import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CustomerForm from './pages/CustomerForm';
import Questions from './pages/Questions';
import FinalScreen from './pages/FinalScreen';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<CustomerForm />} />
				<Route exact path='/questions/:id' element={<Questions />} />
				<Route exact path='/final' element={<FinalScreen />} />
			</Routes>
		</Router>
	);
};

export default App;
