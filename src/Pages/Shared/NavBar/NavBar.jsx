import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
    Avatar, Box, Button, Center, Flex, Menu,
    MenuButton, MenuDivider, MenuItem, MenuList, Stack,
    useColorMode, useColorModeValue
} from '@chakra-ui/react';
import { GrGraphQl } from "react-icons/gr";
import { AiOutlineHome } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';


const NavBar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const {userId, logOut} = useFirebase();
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box><img width={40} src="https://cdn-icons-png.flaticon.com/128/831/831276.png" alt="" /></Box>

                    <Flex alignItems={'center'}>

                        <Stack direction={'row'} spacing={7}>

                            <NavLink  to="/">
                                <Button>
                                    <AiOutlineHome />
                                </Button>
                            </NavLink>

                            <Button>
                                <BiMessageRounded />
                            </Button>

                            <NavLink to="/forum">
                                <Button>
                                    <GrGraphQl />
                                </Button>
                            </NavLink>

                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={userId.photoURL}
                                    />
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={userId.photoURL}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>{userId.displayName}</p>
                                        
                                    </Center>
                                    <Center>
                                    <p>{userId.email}</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <Link to='/profile'>
                                        <MenuItem>View Profile</MenuItem>

                                    </Link>
                                    <MenuItem>Account Settings</MenuItem>
                                    {userId.email ?<MenuItem onClick={logOut}>Logout</MenuItem> : <Link to="/SignIn"><MenuItem>Login</MenuItem></Link>}
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
};

export default NavBar;