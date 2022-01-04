import { useEffect, useState } from 'react';
import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	Checkbox,
	Stack,
	Link,
	Button,
	Heading,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import * as userApi from '../../api/user';

const Login = () => {
	const [value, setValue] = useState({ email: '', password: '' });

	const handleChange = (e) => {
		setValue({ ...value, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		value.email &&
			value.password &&
			userApi
				.login(value)
				.then((res) => console.log(res))
				.catch((err) => console.log(err));
				console.log(value);

				localStorage.setItem("user", value.email);
				// localStorage.setItem("password", value.password);

	};


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
						<Link color={'blue.400'}>features</Link> ✌️
					</Text>
				</Stack>
				<Box
					rounded={'lg'}
					bg={useColorModeValue('white', 'gray.700')}
					boxShadow={'lg'}
					p={8}>
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
							<Stack
								direction={{ base: 'column', sm: 'row' }}
								align={'start'}
								justify={'space-between'}>
								<Checkbox>Remember me</Checkbox>
								<Link color={'blue.400'}>Forgot password?</Link>
							</Stack>
							<Button
								type='submit'
								bg={'blue.400'}
								color={'white'}
								_hover={{
									bg: 'blue.500',
								}}>
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
