import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import useFirebase from '../../hooks/useFirebase';
import ProfilePost from './ProfilePost';

export default function UserProfile() {
    const {userId} = useFirebase();

    const [userLists, setUserList] = useState([])

    useEffect(()=>{
        fetch("https://serene-beyond-56628.herokuapp.com/userList")
        .then(res => res.json())
        .then(data => setUserList(data))
    },[userLists])

    return (
        <section>
        <Center py={6}>
            {userLists.map(userList => userList.email === userId.email ?<Box
                maxW={'1000px'}
                w={'full'}
                // bg={useColorModeValue('white', 'gray.800')}
                bg={'whiteAlpha.800'}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}>
                <Image
                    h={'120px'}
                    w={'full'}
                    src={
                        'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/08/facebook-cover.jpg'
                    }
                    objectFit={'cover'}
                />
                <Flex justify={'center'} mt={-12}>
                    <Avatar
                        size={'xl'}
                        src={userList.photoURL}
                        alt={'Author'}
                        css={{
                            border: '2px solid white',
                        }}
                    />
                </Flex>

                <Box p={6}>
                    <Stack spacing={0} align={'center'}  mb={5}>
                        {/* <Heading fontSize={'xl'} fontWeight={500}>
                            {userList.displayName}
                        </Heading>
                        <Text fontSize={'sm'} color={'gray.500'}>Email: {userId.email}</Text>
                        <Text fontSize={'sm'} color={'gray.500'}>Address: {userList.Address}</Text>
                        <Text fontSize={'sm'} color={'gray.500'}>Designation: {userList.Designation}</Text>
                        <Text fontSize={'sm'} color={'gray.500'}>Mobile: {userList.Mobile}</Text> */}

                        <div class="list-group w-100">
                            <button type="button" class="list-group-item list-group-item-action">
                            <Heading fontSize={'xl'} fontWeight={500}>
                            {userList.displayName}
                            </Heading>
                            </button>
                            <button type="button" bg={'whiteAlpha.900'} class="list-group-item list-group-item-action">Email: &nbsp;&nbsp;{userId.email}</button>
                            <button type="button" bg={'whiteAlpha.900'} class="list-group-item list-group-item-action">Address: &nbsp;&nbsp;{userList.Address}</button>
                            <button type="button" bg={'whiteAlpha.900'} class="list-group-item list-group-item-action">Designation: &nbsp;&nbsp;{userList.Designation}</button>
                            <button type="button" bg={'whiteAlpha.900'} class="list-group-item list-group-item-action">Mobile: &nbsp;&nbsp;{userList.Mobile}</button>
                        </div>
                        <div>
                            
                        </div>
                    </Stack>

                    <Stack direction={'row'} justify={'center'} spacing={6}>
                        <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>23k</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                Followers
                            </Text>
                        </Stack>
                        <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>23k</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                Followers
                            </Text>
                        </Stack>
                    </Stack>

                    <Button
                        w={'full'}
                        mt={8}
                        // bg={useColorModeValue('#151f21', 'gray.900')}
                        bg={'#151f21'}
                        color={'white'}
                        rounded={'md'}
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                        }}>
                        Follow
                    </Button>
                </Box>
            </Box>: null)}
            
        </Center>
        <ProfilePost></ProfilePost>
        </section>
    );
}