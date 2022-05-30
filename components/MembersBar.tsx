import {Flex, Box, Text, Select, Spacer,ListItem ,UnorderedList, AvatarGroup, Avatar, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot } from "@chakra-ui/react";

const MembersBar = () => {
    return(
        <Flex marginY="2vh" >
        <Box marginRight="1vh" >
            <Text fontSize="2xl" color="whiteAlpha.900" >
                Members:
            </Text>
        </Box>
        <AvatarGroup size='sm' max={3} >
                <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
         </AvatarGroup>
        <Spacer />
        <Box marginRight="1vh" >
            <Text fontSize="2xl" color="whiteAlpha.900" >
                Validators:
            </Text>
        </Box>
        <AvatarGroup size='sm' max={3} >
                <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
         </AvatarGroup>
        <Spacer />
        <Box>
            <Text fontSize="2xl">
                🔥🔥🔥🔥🔥
            </Text>
        </Box>
    </Flex>
    );
};

export default MembersBar;