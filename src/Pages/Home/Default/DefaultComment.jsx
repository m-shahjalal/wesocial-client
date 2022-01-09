import { Avatar, Button, Input, WrapItem } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import useFirebase from '../../../hooks/useFirebase';

const DefaultComment = (props) => {
    const {statusId} = props.statusId;
    const {userId} = useFirebase();
    const user = userId.email;

    /* Status Post Method */
    const { register, handleSubmit , reset} = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://serene-beyond-56628.herokuapp.com/userStatus', data)
        .then(res => {
            if (res.data.insertedId) {
                swal("Well done!", "Your article has been published successfully!", "success");
                reset();
            }
        })
    };

    

    return (
        <div className='mt-3'>
            {/* Comment input */}
            <form onSubmit={handleSubmit(onSubmit)} >
                    <div style={{backgroundColor:"rgb(243 246 244)"}}>
                        <div style={{display:"flex", alignItems:"center"}}> 

                        <WrapItem>
                            <Avatar width={30} height={30} name='Image' src={userId.photoURL}/>
                        </WrapItem>

                        &nbsp;

                        <Input height={8}  placeholder='Write a comment...' {...register("reply")} style={{backgroundColor:"#e2e8f0", width:"100%", borderRadius:"30px"}} size='md' />
                        <input type="text" name="" {...register("statusId")} style={{display:"none"}} value={statusId} id="" />
                        <input type="text" name="" {...register("commentId")} style={{display:"none"}} value={"comment kora id ta"} id="" />

                        &nbsp;&nbsp;&nbsp;
                        <Button type="submit" style={{borderRadius:"30px", padding:"0 30px"}} colorScheme='teal' size='sm'>
                            Submit
                        </Button>
                        </div>
                    </div>
                </form>
        </div>
    );
};

export default DefaultComment;