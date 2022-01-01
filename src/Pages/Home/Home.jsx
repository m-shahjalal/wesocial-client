import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import NavBar from '../Shared/NavBar/NavBar';

const Home = () => {
	return (
		<Container>
			<NavBar />
			<Box bg='tomato' w='100%' p={4} color='white'>
				This is the Box
			</Box>
		</Container>
	);
};

export default Home;
