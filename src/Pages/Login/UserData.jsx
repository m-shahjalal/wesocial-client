import { Button, Checkbox, Input } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import useFirebase from '../../hooks/useFirebase';

const UserData = () => {
    const {userId} = useFirebase();
    const email = userId.email;
    const photoURL = userId.photoURL;
    	/* User list to server */
        const { register, handleSubmit , reset} = useForm();
        const onSubmit = data => {
            console.log(data)
            axios.post('https://serene-beyond-56628.herokuapp.com/userList', data)
            .then(res => {
                if (res.data.insertedId) {
                    swal("Well done!", "Your reply submitted successfully!", "success");
                    reset();
                }
            })
        };
        console.log(email, photoURL);
    return (
        <div style={{backgroundColor:"white", padding:"15px"}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <Input type="text" mb={'2'} name="" {...register("displayName")}  placeholder='Your name' required/> <br />
                        <Input type="text" mb={'2'} name="" {...register("email")} value={email}  placeholder='email'  required/><br />
                        <Input type="text" mb={'2'} name="" {...register("Designation")}  placeholder='Designation'  required/><br />
                        <Input type="text" mb={'2'} name="" {...register("Address")} placeholder='Address'  required/><br />
                        <Input type="text" mb={'0'} name="" {...register("Mobile")} placeholder='Mobile'  required/><br />
                        <input type="text" mb={'0'} name="" {...register("photoURL")} style={{display:"none"}} value={photoURL} id=""/><br />
                        <Checkbox mb={'4'} colorScheme='green' defaultIsChecked >
                            Everything is correct!
                        </Checkbox>
                    </div>

                    <div style={{display:"flex", justifyContent:"end"}}>
                    <Button type='submit' colorScheme='teal' size='md'>
                        Submit
                    </Button>
                    </div>
            </form>
        </div>
    );
};

export default UserData;