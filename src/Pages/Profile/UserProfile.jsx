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
import useFirebase from '../../hooks/useFirebase';

export default function UserProfile() {
    const {userId} = useFirebase()
    return (
        <Center py={6}>
            <Box
                maxW={'1000px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
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
                        src={userId.photoURL}
                        alt={'Author'}
                        css={{
                            border: '2px solid white',
                        }}
                    />
                </Flex>

                <Box p={6}>
                    <Stack spacing={0} align={'center'} mb={5}>
                        <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                            {userId.displayName}
                        </Heading>
                        <Text color={'gray.500'}>{userId.email}</Text>
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
                        bg={useColorModeValue('#151f21', 'gray.900')}
                        color={'white'}
                        rounded={'md'}
                        _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                        }}>
                        Follow
                    </Button>
                </Box>
            </Box>
        </Center>
    );
}