import { Container } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Forum from '../Pages/Forum/Forum';
import RepliesDetails from '../Pages/Forum/RepliesDetails';
import SeeReplies from '../Pages/Home/Default/SeeReplies';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignIn from '../Pages/Login/SignIn';
import Signup from '../Pages/Login/Signup';
import UserData from '../Pages/Login/UserData';
import ProfileContent from '../Pages/Profile/ProfileContent';
import Register from '../Pages/Register/Register';
import Footer from '../Pages/Shared/Footer/Footer';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const Routers = () => {
	return (

		<Container>
			<BrowserRouter>
				<NavBar></NavBar>
				<Routes>
					<Route path='signUp' element={<Signup />} />
					<Route path='signIn' element={<SignIn />} />
					<Route path='/' element={<Home />} />
					<Route path='/home' element={<Home />} />
					<Route path='login' element={<Login />} />
					<Route path='seeReplies/:statusId' element={<SeeReplies />} />
					<Route path='register' element={<Register />} />
					<Route path='teams' element={<Login />} />
					<Route path='forum' element={<Forum />} />
					<Route path='forum' element={<Forum />} />
					<Route path='profile' element={<ProfileContent />} />
					<Route path='userData' element={<UserData />} />
					<Route path={`/forum/replies/:articleID`} element={<RepliesDetails />} />

				</Routes>
				<Footer></Footer>
			</BrowserRouter>
		</Container>
	);
};

export default Routers; 
