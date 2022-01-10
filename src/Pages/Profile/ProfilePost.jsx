import { Avatar, Button, Input, WrapItem } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import useFirebase from '../../hooks/useFirebase';

const ProfilePost = () => {
    /* :::::::::::::::::::::::::::::::
        Post Status from User UI
    ::::::::::::::::::::::::::::::::::*/
    const { register, handleSubmit , reset} = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://serene-beyond-56628.herokuapp.com/userStatus', data)
        .then(res => {
            if (res.data.insertedId) {
                swal("Well done!", "Your reply submitted successfully!", "success");
                reset();
            }
        })
    };

    const {userId} = useFirebase();

    const [userLists, setUserList] = useState([])

    useEffect(()=>{
        fetch("https://serene-beyond-56628.herokuapp.com/userList")
        .then(res => res.json())
        .then(data => setUserList(data))
    },[userLists])
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} >
                {userLists.map(userList => userList.email === userId.email ?<div style={{backgroundColor:"rgb(243 246 244)", padding:"15px"}}>
                    <div style={{display:"flex", alignItems:"center"}}> 

                    <WrapItem>
                        <Avatar name='Image' src={userList.photoURL} />
                    </WrapItem>

                    &nbsp;

                    <Input  placeholder='Write a comment...' {...register("reply")} style={{backgroundColor:"#e2e8f0", width:"100%", borderRadius:"30px"}} size='md' />
                    <input type="text" name="" {...register("articleId")} style={{display:"none"}}  id="" />
                    <input type="text" name="" {...register("commentId")} style={{display:"none"}} value={"comment kora id ta"} id="" />

                    &nbsp;&nbsp;&nbsp;
                    <Button style={{borderRadius:"30px", padding:"0 30px"}} bg={'#151f21'}
                        color={'white'} size='md'>
                        Submit
                    </Button>
                    </div>
                </div>:null)}
            </form>
        </div>
    );
};

export default ProfilePost;
/* 


*/