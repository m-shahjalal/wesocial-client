import { Alert, Divider, Avatar, Stack, Table, Tbody, Thead, Tr, WrapItem, Menu, MenuButton, Button, MenuList, MenuGroup, MenuItem, MenuDivider, IconButton, Text, FormControl, FormLabel, Select, Input, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Textarea, PopoverTrigger, Popover, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody } from '@chakra-ui/react';
import { Box, Container } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { ChatIcon, StarIcon } from '@chakra-ui/icons';
import { FcCamcorderPro, FcAddImage, FcComboChart } from "react-icons/fc";
import './Forum.css'
import { FiImage, FiUserCheck, FiSmile, FiMic } from "react-icons/fi";
import { IoCloudDownloadOutline, IoEllipsisVertical } from "react-icons/io5";
import { useForm } from "react-hook-form";
import axios from 'axios';
import swal from 'sweetalert';




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




    /* Post Method */
    const { register, handleSubmit , reset} = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/communityPosts', data)
        .then(res => {
            if (res.data.insertedId) {
                swal("Well done!", "Your article has been published successfully!", "success");
                reset();
            }
        })
    };

    /* Modal */
    const { isOpen, onOpen, onClose } = useDisclosure()



    return (
        <Container>
			<Box bg='white'  w='100%' p={4} color='white'>

                <div style={{backgroundColor:"#f3f6f4", marginBottom:"20px"}}>

                    <div className='forum-display-top'>
                        <WrapItem>
                            <Avatar name='Image' src='https://static.remove.bg/remove-bg-web/6cc620ebfb5922c21227f533a09d892abd65defa/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png' />
                        </WrapItem>
                        <Input placeholder='What is your mind ?' style={{backgroundColor:"white", border:"none", borderRadius:"20px"}} onClick={onOpen}/>

                        {/* Modal */}
                        {/* <Button onClick={onOpen}>Open Modal</Button> */}

                        <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader style={{paddingBottom:"5px" ,paddingTop:"5px", textAlign:"center"}}><small>Write an article</small></ModalHeader>
                            <hr />
                            <ModalCloseButton />

                            <ModalBody>
                                
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className='post-modal'>
                                        <WrapItem>
                                            <Avatar name='Image' src='https://static.remove.bg/remove-bg-web/6cc620ebfb5922c21227f533a09d892abd65defa/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png' />
                                        </WrapItem>
                                        <div className='post-modal-name'>
                                            <p>My Name</p>
                                            <p><button style={{padding:"2px 10px", borderRadius:"5px"}} className='community-btn'>Community Post</button></p>
                                        </div>
                                    </div>
                                    <Textarea {...register("article")} style={{border:"none", marginTop:"15px", minHeight:"180px"}} variant='unstyled' placeholder='What on your mind Mr/Mrs' />
                                    <div className='top-btn' style={{border:"1px solid #e2e8f0", padding:"10px", borderRadius:"8px"}}>
                                        <button>Add to your post</button>
                                        <span><FiImage/></span>
                                        <span><FiUserCheck/></span>
                                        <span><FiSmile/></span>
                                        <span><FiMic/></span>
                                        <span><IoCloudDownloadOutline/></span>
                                        <span><IoEllipsisVertical/></span>
                                    </div>
                                    <br />
                                    <Button colorScheme='teal' type="submit" style={{width:"100%"}} variant='solid'>
                                        Publish
                                    </Button>
                                </form>

                            </ModalBody>
                        </ModalContent>
                        </Modal>

                        {/* ::::::::::::::::::::::
                                Modal Ended
                        ::::::::::::::::::::::::::::*/}

                    </div>
                    <hr />
                    <div style={{color:"black"}} className='forum-display-top'>
                        <button className='top-btn'> <FcCamcorderPro className='fs'/>&nbsp;&nbsp;Live video</button>
                        <button className='top-btn'> <FcAddImage className='fs'/>&nbsp;&nbsp;Photo/Video</button>
                        <button className='top-btn'> <FcComboChart className='fs'/>&nbsp;&nbsp;Feeling/activity</button>

                    </div>


                </div>

                {/* ----------------------
                    Filter And header
                -------------------------*/}
                
                <div style={{backgroundColor:"#f3f6f4", marginBottom:"5px"}} className='forum-display'>
                    <FormControl color="black" >
                        <Select id='country' placeholder='Filter' style={{backgroundColor:"white", border:"none", borderRadius:"20px"}}>
                            <option>Country</option>
                            <option>Most Recent</option>
                            <option>Oldest</option>
                            <option>Popularity</option>
                        </Select>
                    </FormControl>
                    <FormControl color="black" >
                        <Input style={{backgroundColor:"white", border:"none", borderRadius:"20px"}} placeholder='Search the article' id='text' type='text' />
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

                    <small style={{display:"flex", justifyContent:"end"}}> 

                    {/* <span> <ChatIcon/> </span>  */}
                    <Popover>
                        <PopoverTrigger>
                        <span> <ChatIcon/> </span> 
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverCloseButton/>
                            <PopoverHeader>Confirmation!</PopoverHeader>
                            <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
                        </PopoverContent>
                    </Popover>
                    
                    &nbsp;&nbsp;&nbsp;&nbsp; <span><StarIcon/></span>&nbsp;&nbsp;&nbsp;&nbsp;<span>102 replies</span>&nbsp;&nbsp;&nbsp;&nbsp; <span>Just now</span></small>
                    
                    </Text>
                </div>
                <br />

                
			</Box>
		</Container>
    );
};

export default Forum;

/* 

<Popover>
  <PopoverTrigger>
    <Button>Trigger</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>Confirmation!</PopoverHeader>
    <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
  </PopoverContent>
</Popover>


----------------------------------------


import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>
      <input type="submit" />
    </form>
  );
}

*/