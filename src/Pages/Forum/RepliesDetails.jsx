import { StarIcon } from '@chakra-ui/icons';
import { Avatar, Menu, MenuButton, MenuItem, MenuList, Text, WrapItem } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const RepliesDetails = () => {
    const {articleID} = useParams();

    /* -------------------
    Fetch single Article
    ---------------------*/

    const [communityPosts, setCommunityPosts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/communityPosts/${articleID}`)
        .then(res => res.json())
        .then(data =>setCommunityPosts(data))
    })

    return (
        <div>
            {communityPosts.map(communityPost =>
                <section>
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
                    
                    <Text color='black' fontSize='sm'>{communityPost.article}

                    <small style={{display:"flex", justifyContent:"end"}}> 

                    {/* <span> <ChatIcon/> </span>  */}
                    {/* <Commen key={communityPost._id} articleId={communityPost._id}></Comment> */}
                    
                    &nbsp;&nbsp;&nbsp;&nbsp; <span><StarIcon/></span>&nbsp;&nbsp;&nbsp;&nbsp;

                    <span><Link to={`replies/${communityPost._id}`}>101 replies</Link></span>

                    &nbsp;&nbsp;&nbsp;&nbsp; <span>{communityPost.time}</span></small>
                    
                    </Text>
                </div>
                <br />
                </section>)}
        </div>
    );
};

export default RepliesDetails;

/* 


*/