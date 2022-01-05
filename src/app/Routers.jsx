import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Forum from '../Pages/Forum/Forum'; 
import RepliesDetails from '../Pages/Forum/RepliesDetails';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';

const Routers = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Home />} />
				<Route path='login' element={<Login />} />
				<Route path='register' element={<Register />} />
				<Route path='teams' element={<Login />} />
				<Route path='forum' element={<Forum />} />

				<Route path='forum' element={<Forum />} />
				<Route path={`/forum/replies/:articleID`} element={<RepliesDetails />}/>
          

			</Routes>
		</BrowserRouter>
	);
};

export default Routers; 
