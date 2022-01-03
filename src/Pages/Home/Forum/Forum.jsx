import { Alert, Divider, Avatar, Stack, Table, Tbody, Thead, Tr, WrapItem, Menu, MenuButton, Button, MenuList, MenuGroup, MenuItem, MenuDivider, IconButton, Text, FormControl, FormLabel, Select, Input } from '@chakra-ui/react';
import { Box, Container } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import './Forum.css'

const Forum = () => {

    /* -------------------
    Posts fetch and Filter
    ---------------------*/
    // const [communityPosts, setCommunityPosts] = useState({})

    // useEffect(()=>{
    //     fetch("")
    //     .than(res => res.json())
    //     .than(data => setCommunityPosts(data))
    // },[communityPosts])




    return (
        <Container>
			<Box bg='white'  w='100%' p={4} color='white'>

                {/* ----------------------
                    Filter And header
                -------------------------*/}
                
                <div style={{backgroundColor:"#eeeeee", marginBottom:"5px"}} className='forum-display'>
                    <FormControl color="black">
                        <FormLabel htmlFor='country'>Filter by</FormLabel>
                        <Select id='country' placeholder='Select country'>
                            <option>Country</option>
                            <option>Most Recent</option>
                            <option>Oldest</option>
                            <option>Popularity</option>
                        </Select>
                    </FormControl>
                    <FormControl color="black">
                    <FormLabel htmlFor='text'>Search Text</FormLabel>
                    <Input id='email' type='text' />
                    </FormControl>
                </div>

                {/* ----------------------
                    Community Posts 
                -------------------------*/}

                <div style={{backgroundColor:"#f3f6f4"}}className='forum-display'>
                    <Menu>
                        {({ isOpen }) => (
                            <>
                            <MenuButton isActive={isOpen}>
                                <WrapItem>
                                    <Avatar name='Image' src='https://static.remove.bg/remove-bg-web/6cc620ebfb5922c21227f533a09d892abd65defa/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png' />
                                </WrapItem>
                            </MenuButton>
                            <MenuList color="black">
                                <MenuItem>Profile Name</MenuItem>
                                <MenuItem>Profession Name</MenuItem>
                                <MenuItem>Country Name</MenuItem>
                                <MenuItem onClick={() => alert('This Feature is implementing soon')}>View Profile</MenuItem>
                            </MenuList>
                            </>
                        )}
                    </Menu>
                    
                    <Text color='black' fontSize='sm'>(sm) In love with React & Next (sm) In love with React & Next

                    <small style={{display:"flex", justifyContent:"end"}}> <span><i class="far fa-heart"></i></span>&nbsp;&nbsp;&nbsp;&nbsp; <span><i class="far fa-comment"></i></span>&nbsp;&nbsp;&nbsp;&nbsp;<span>102 replies</span>&nbsp;&nbsp;&nbsp;&nbsp; <span>Just now</span></small>
                    
                    </Text>
                </div>
                <br />

                
			</Box>
		</Container>
    );
};

export default Forum;



