import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input, Spinner,
	Stack,
	Text,
	useColorModeValue
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '../../redux/slices/userSlice';

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);
	const [value, setValue] = useState({ email: '', password: '' });
	const handleChange = (e) => {
		setValue({ ...value, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		value.email && value.password && dispatch(fetchUser(value));
	};

	useEffect(
		() => user.data && navigate('/', { replace: true }),
		[navigate, user.data]
	);

	return (
		<Flex
			minH={'100vh'}
			align={'center'}
			justify={'center'}
			bg={useColorModeValue('gray.50', 'gray.800')}>
			<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
				<Stack align={'center'}>
					<Heading fontSize={'4xl'}>Sign in to your account</Heading>
					<Text fontSize={'lg'} color={'gray.600'}>
						to enjoy WeSocial fun{' '}
						<Box style={{display: 'inline'}} color={'blue.400'}>features</Box> ✌️
					</Text>
				</Stack>
				<Box
					rounded={'lg'}
					bg={useColorModeValue('white', 'gray.700')}
					boxShadow={'lg'}
					p={8}>
						{user.error && <Text align='center' mb='6' color='red.400'>{user.error}</Text>}
					<Stack as='form' onSubmit={handleSubmit} spacing={4}>
						<FormControl id='email'>
							<FormLabel>Email address</FormLabel>
							<Input
								onChange={handleChange}
								name='email'
								value={value.email}
								type='email'
							/>
						</FormControl>
						<FormControl id='password'>
							<FormLabel>Password</FormLabel>
							<Input
								onChange={handleChange}
								name='password'
								value={value.password}
								type='password'
							/>
						</FormControl>
						<Stack spacing={10}>
							<Button
								type='submit'
								bg={'blue.400'}
								color={'white'}
								_hover={{
									bg: 'blue.500',
								}}>
								{user.loading && <Spinner size='sm' mx={2} />}
								Sign in
							</Button>
						</Stack>
					</Stack>
				</Box>
			</Stack>
		</Flex>
	);
};

export default Login;
