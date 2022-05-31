import {Flex, Box, Text, Select, Spacer,ListItem ,UnorderedList, AvatarGroup, Avatar, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { useTable, useSortBy } from 'react-table';
import MembersBar from "../MembersBar";
import SocialDataTable from "../SocialDataTable";
import SocialDataList from "../SocialDataList";
import { ethers } from "ethers";

const VerifyDetails = () => {

    const handleClick = async () => {
        

    };



    return(
        <Box 
            border="1px" 
            borderColor="whiteAlpha.300"
            borderRadius="20"
            p="2vh"
            maxHeight='85vh'
            overflowY="auto"
            css={{
                '&::-webkit-scrollbar' : {
                    display: "none"
                }
            }}
        >
            <Text fontSize="2xl" color="whiteAlpha.900" fontWeight="bold" >
                [SO2093457242345] Verify Social Data From Discord, Github, Twitter, Forum
            </Text> 
            <Flex mt="1vh" >
                <Text fontSize="1xl" color="whiteAlpha.700" fontWeight="bold" >
                    2022-05-30 12:37:52
                </Text>
                <Spacer />
                <AState>
                    Active
                </AState>
            </Flex>
            <MembersBar s={5} />
           
            <Flex mt="5vh" >
                <Box
                    border="1px" 
                    borderColor="whiteAlpha.300"
                    borderRadius="20"
                    p="2vh"
                >
                    <SocialDataTable />
                </Box>
                <Spacer />
                <Box p="2vh" >
                    <UnorderedList color="whiteAlpha.900">
                        <ListItem><Text fontWeight="bold">Activities: messages in discord, questions in the forum, votes on snapshop </Text></ListItem>
                        <ListItem><Text fontWeight="bold">Connections: friends in discord and twitter</Text></ListItem>
                        <ListItem><Text fontWeight="bold">Contributions: Github commits, Dework tasks</Text></ListItem>
                    </UnorderedList>
                    <Button  mt="22vh" colorScheme='purple' variant='solid' size='lg' width="full" height="5vh">
                        Verify
                    </Button>
                </Box>
            </Flex>
            <Box mt="5vh" >
                <SocialDataList />
            </Box>
        </Box>
    );
};

const AState = styled(Box)`
    color: white;
    font-size: 2vh;
    border-radius: 10px;
    background-color: green;
    padding: 1px;
    padding-right: 4px;
    padding-left: 4px;
    margin-right: 5vh;
`;

const VState = styled(Box)`
    color: white;
    font-size: 2vh;
    border-radius: 10px;
    background-color: purple;
    padding: 1px;
    padding-right: 4px;
    padding-left: 4px;
    margin-right: 5vh;
`;

export default VerifyDetails;