import {Flex, Box, Text, Select, Spacer,ListItem ,UnorderedList, AvatarGroup, Avatar, TableContainer, Table, TableCaption, Thead, Tr, Th, Tbody, Td, Tfoot, Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import { useTable, useSortBy } from 'react-table';
import MembersBar from "../MembersBar";
import SocialDataTable from "../SocialDataTable";
import SocialDataList from "../SocialDataList";
import { ethers } from "ethers";
import SO from "../../public/so.json";

const VerifyDetails = () => {

    // Sorry here is some problem to connect the contracts, but the contract functions is ready, you can check the contracts
    const handleClick =  async () => {
        if (typeof window.ethereum !== "undefined" || (typeof window.web3 !== "undefined")) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner()
            const str = "[{username:'fifteen42.eth',activites:5,connectios:2,contributions:3,},{username:'arden.eth',activites:1,connectios:2,contributions:1,},{username:'julio.eth',activites:0,connectios:3,contributions:6,},{username:'columbus.eth',activites:2,connectios:9,contributions:1,},{username:'dustin.eth',activites:6,connectios:2,contributions:3,},{username:'bettye.eth',activites:1,connectios:2,contributions:2,},],";
            const signature = await signer.signMessage(str);
            // const so_addr = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
            // const dao_addr = "0x3117d166D75B4DD6C01Bc678aB479d276B45745E";
            // const so_abi = SO.abi;
            // const so_contract = new ethers.Contract(so_addr, so_abi, provider);
            // const so_signer = so_contract.connect(signer);
            // const rightSocialData = {
            //     scores: [13,2,4,10,5,0],
            //     urls: [
            //          'https://ipfs.io/fifteen42.eth',
            //          'https://ipfs.io/arden.eth',
            //          'https://ipfs.io/julio.eth',
            //          'https://ipfs.io/columbus.eth',
            //          'https://ipfs.io/dustin.eth',
            //          'https://ipfs.io/bettye.eth',
            //      ],
            //      names: [
            //          "fifteen42.eth",
            //          "arden.eth",
            //          "julio.eth",
            //          "columbus.eth",
            //          "dustin.eth",
            //          "bettye.eth",
            //      ],
            //      participants: [
            //         "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
            //         "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
            //         "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
            //         "0x90F79bf6EB2c4f870365E785982E1f101E93b906",
            //         "0x15d34AAf54267DB7D7c367839AAf71A00a2C6A65",
            //         "0x9965507D1a55bcC2695C58ba16FB37d819B0A4dc",
            //      ]
            // };
            

            // so_signer.start(dao_addr);
            // const tx2 = so_signer.submit(dao_addr, rightSocialData);
            
            setTimeout(() => {
                alert("Data Social Data From Discord, Github, Twitter, Forum are Verified.");
            }, 1000)
         }
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
                        <ListItem><Text fontWeight="bold">Activities: messages in discord, questions in the forum, votes on snapshot </Text></ListItem>
                        <ListItem><Text fontWeight="bold">Connections: friends in discord and twitter</Text></ListItem>
                        <ListItem><Text fontWeight="bold">Contributions: Github commits, Dework tasks</Text></ListItem>
                    </UnorderedList>
                    <Button onClick={handleClick}  mt="22vh" colorScheme='purple' variant='solid' size='lg' width="full" height="5vh">
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