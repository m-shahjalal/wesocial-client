import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Forum from '../Pages/Home/Forum/Forum';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';

const Routers = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path='teams' element={<Login />} />
				<Route path='teams' element={<Registration />} />
				<Route path='forum' element={<Forum />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Routers;
