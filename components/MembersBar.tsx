import {Flex, Box, Text, Select, Spacer,ListItem ,UnorderedList, AvatarGroup, Avatar, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot } from "@chakra-ui/react";

const renderSparks = (sparks: number) => {
    let res: string = "";
    if(sparks > 0) {
        for(let i = 0; i < sparks; i++) {
            res += "🔥";
        }
    } else {
        for(let i = 0; i < -sparks; i++) {
            res += "🧊";
        }
    }
    return <Text fontSize="2xl">{res}</Text>;
};

interface MembersBarProps {
    s:number;
}

const MembersBar: React.ElementType = ({s}:MembersBarProps) => {
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
                Verifiers:
            </Text>
        </Box>
        <AvatarGroup size='sm' max={3} >
                <Avatar name='Ryan Florence' src='https://img.seadn.io/files/a6de476f0b822a8c612b702dcc137d62.png' />
                <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
         </AvatarGroup>
        <Spacer />
        <Box>
            {renderSparks(s)}
        </Box>
    </Flex>
    );
};

export default MembersBar;