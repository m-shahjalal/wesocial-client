import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';

const Home = () => {
	return (
		<Container >
			<NavBar />
			<Box bg='tomato' p={4} color='white'>
				This is the Box
			</Box>
			<Footer />
		</Container>
	);
};

export default Home;
