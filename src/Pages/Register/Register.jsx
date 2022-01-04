import React from 'react';
import {
	Flex,
	Box,
	FormControl,
	FormLabel,
	Input,
	InputGroup,
	HStack,
	InputRightElement,
	Stack,
	Button,
	Heading,
	Text,
	useColorModeValue,
	Link,
} from '@chakra-ui/react';
// import { Link as ReachLink } from "@reach/router";
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import * as userApi from '../../api/user';

const Register = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [value, setValue] = useState({
		name: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const handleChange = (e) => {
		setValue({ ...value, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		value.email &&
			value.password &&
			userApi
				.register(value)
				.then((res) => console.log(res))
				.catch((err) => console.log(err));
	};
	return (
		<>
			<Flex
				minH={'100vh'}
				align={'center'}
				justify={'center'}
				bg={useColorModeValue('gray.50', 'gray.800')}>
				<Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
					<Stack align={'center'}>
						<Heading fontSize={'4xl'} textAlign={'center'}>
							Sign up
						</Heading>
						<Text fontSize={'lg'} color={'gray.600'}>
							to enjoy all of our cool features ✌️
						</Text>
					</Stack>
					<Box
						rounded={'lg'}
						bg={useColorModeValue('white', 'gray.700')}
						boxShadow={'lg'}
						p={8}>
						<Stack as='form' onSubmit={handleSubmit} spacing={4}>
							<HStack>
								<FormControl id='firstName' isRequired>
									<FormLabel>First Name</FormLabel>
									<Input
										name='name'
										value={value.name}
										onChange={handleChange}
										type='text'
									/>
								</FormControl>
							</HStack>
							<FormControl id='email' isRequired>
								<FormLabel>Email address</FormLabel>
								<Input
									type='email'
									name='email'
									value={value.email}
									onChange={handleChange}
								/>
							</FormControl>
							<FormControl id='password' isRequired>
								<FormLabel>Password</FormLabel>
								<InputGroup>
									<Input
										name='password'
										value={value.password}
										onChange={handleChange}
										type={
											showPassword ? 'text' : 'password'
										}
									/>
									<InputRightElement h={'full'}>
										<Button
											variant={'ghost'}
											onClick={() =>
												setShowPassword(
													(showPassword) =>
														!showPassword
												)
											}>
											{showPassword ? (
												<ViewIcon />
											) : (
												<ViewOffIcon />
											)}
										</Button>
									</InputRightElement>
								</InputGroup>
							</FormControl>
							<FormControl id='email' isRequired>
								<FormLabel>Confirm Password</FormLabel>
								<Input
									name='confirmPassword'
									type='password'
									value={value.confirmPassword}
									onChange={handleChange}
								/>
							</FormControl>
							<Stack spacing={10} pt={2}>
								<Button
									loadingText='Submitting'
									size='lg'
									type='submit'
									bg={'blue.400'}
									color={'white'}
									_hover={{
										bg: 'blue.500',
									}}>
									Sign up
								</Button>
							</Stack>
							<Stack pt={6}>
								<Text align={'center'}>
									Already a user?{' '}
									<NavLink to='/login' color={'blue.400'}>
										Login
									</NavLink>
								</Text>
							</Stack>
						</Stack>
					</Box>
				</Stack>
			</Flex>
		</>
	);
};

export default Register;
