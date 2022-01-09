import { Alert, AlertIcon, Button, Checkbox, Input } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import useFirebase from '../../hooks/useFirebase';
import './UserData.css'

const UserData = () => {
    const { userId } = useFirebase();
    // const [userEmail, setUserEmail] = useState('')
    // useEffect(()=>{
    //     setUserEmail(userId.email);
    // },[])
    // console.log(userEmail);

    /* User list to server */
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://serene-beyond-56628.herokuapp.com/userList', data)
            .then(res => {
                if (res.data.insertedId) {
                    swal("Well done!", "Your reply submitted successfully!", "success");
                    window.location.replace("http://localhost:3000/");
                    // reset();

                }
            })
    };
    return (
        <div style={{ backgroundColor: "white", padding: "15px" }}>
            <form onSubmit={handleSubmit(onSubmit)} className='user-data-container'>
                <Alert status='error' className='fw-bold'>
                    <AlertIcon />
                    Fill these information to complete profile.
                </Alert>
                <div>
                    <input className='user-data' type="text" mb={'2'} name="" {...register("displayName")} placeholder='Your name' required /> <br />
                    <input className='user-data' type="text" mb={'2'} name="" {...register("email")} value={userId.email} /><br />
                    <input className='user-data' type="text" mb={'2'} name="" {...register("Designation")} placeholder='Designation' required /><br />
                    <input className='user-data' type="text" mb={'2'} name="" {...register("Address")} placeholder='Address' required /><br />
                    <input className='user-data' type="text" mb={'0'} name="" {...register("Mobile")} placeholder='Mobile' required /><br />
                    <input type="text" className='user-data' mb={'0'} name="" {...register("photoURL")} placeholder='Your image URL' id="" /><br />
                    <Checkbox mb={'4'} colorScheme='green' defaultIsChecked >
                        Everything is correct!
                    </Checkbox>
                </div>
=======
                    <div>
                    <input className='user-data' type="text" mb={'2'} name="" {...register("displayName")} placeholder='Your name' required /> <br />
                    <input className='user-data' type="text" mb={'2'} name="" {...register("email")} value={userId.email} /><br />
                    <input className='user-data' type="text" mb={'2'} name="" {...register("Designation")} placeholder='Designation' required /><br />
                    <input className='user-data' type="text" mb={'2'} name="" {...register("Address")} placeholder='Address' required /><br />
                    <input className='user-data' type="text" mb={'0'} name="" {...register("Mobile")} placeholder='Mobile' required /><br />
                    <input type="text" className='user-data' mb={'0'} name="" {...register("photoURL")} placeholder='Your image URL' id="" /><br />
                    <Checkbox mb={'4'} colorScheme='green' defaultIsChecked >
                        Everything is correct!
                    </Checkbox>
                </div>
>>>>>>> 9058d6a264f9f173492b6ba50a18bca093e258c4

                <div style={{ display: "flex", justifyContent: "end" }}>
                    <Button type='submit' colorScheme='teal' size='md'>
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default UserData;