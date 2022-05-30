import {Flex, Box, Text, Select, Spacer,ListItem ,UnorderedList, AvatarGroup, Avatar, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { useTable, useSortBy } from 'react-table';
import MembersBar from "../MembersBar";
import SocialDataTable from "../SocialDataTable";

const VerifyDetails = () => {

    return(
        <Box 
            border="1px" 
            borderColor="whiteAlpha.300"
            borderRadius="20"
            p="2vh"
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
            <MembersBar />
            <UnorderedList m="2vh" color="whiteAlpha.900">
                <ListItem><Text fontWeight="bold">Activities: messages in discord, </Text></ListItem>
                <ListItem><Text fontWeight="bold">Connections: friends in discord and twitter, </Text></ListItem>
                <ListItem><Text fontWeight="bold">Contributions: Github commits, Dework tasks</Text></ListItem>
            </UnorderedList>
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
                    <Text fontSize="1xl" color="whiteAlpha.900" >
                        Some introductions about social oracle.
                        Some introductions about social oracle.
                        Some introductions about social oracle.
                        Some introductions about social oracle.
                        Some introductions about social oracle.
                        Some introductions about social oracle.
                        Some introductions about social oracle.
                        Some introductions about social oracle.
                        Some introductions about social oracle.
                    </Text>
                    <Button  mt="13vh" colorScheme='purple' variant='solid' size='lg' width="full" height="5vh">
                        Verify
                    </Button>
                </Box>
            </Flex>
            <Box >
                    
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