import { Box, Center, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { SettingsIcon, AddIcon } from '@chakra-ui/icons';
import React, { useState } from "react";
import { Avatar, AvatarBadge, AvatarGroup,Spacer,Text } from '@chakra-ui/react'
import { NftGallery } from 'react-nft-gallery';
import { Icon } from "@iconify/react";
import styled from "@emotion/styled";
import Calendar from 'react-github-contribution-calendar';
import "../node_modules/react-github-contribution-calendar/"
import SocialDataTable2 from "../components/SocialDataTable2";


export const Profile = () => {

    let values = {
        '2021-10-23': 1,
        '2021-10-26': 2,
        '2021-10-27': 3,
        '2021-10-28': 4,
        '2021-10-29': 1,
        '2021-11-23': 1,
        '2021-11-26': 2,
        '2021-11-27': 3,
        '2021-11-28': 4,
        '2021-11-29': 4,
        '2021-12-23': 1,
        '2021-12-26': 2,
        '2021-12-27': 1,
        '2021-12-28': 4,
        '2022-03-23': 1,
        '2022-03-26': 2,
        '2022-03-27': 3,
        '2022-03-28': 4,
        '2022-03-29': 1,
        '2022-04-23': 1,
        '2022-04-26': 2,
        '2022-04-27': 3,
        '2022-04-28': 4,
        '2022-04-29': 4,
        '2022-05-23': 1,
        '2022-05-26': 2,
        '2022-05-27': 1,
        '2022-05-28': 4,
        '2022-05-29': 4
    }
      
    let until = '2022-05-30';
    let weekNames = ['s', 'm', 't', 'w', 't', 'f', 's'];
    let monthNames = [
      '1', '2', '3', '4', '5', '6',
      '7', '8', '9', '10', '11', '12'
    ];
    let panelColors = [
        '#FAF5FF',
        '#D6BCFA',
        '#B794F4',
        '#9F7AEA',
        '#805AD5'
    ];
          

    return (
        <Flex bg='blackAlpha.900' w="100%" h="100vh"   >
            <Box w="5%" h="100vh" borderRight="2px" borderColor='whiteAlpha.300'>
                <Center borderBottom="1px solid" borderColor="whiteAlpha.300" py="1vh" >
                    <Image
                        boxSize='64px'
                        src='/images/you-oracle.svg'
                        alt='DAOU logo'
                    />
                </Center>
                <Box pos='absolute' bottom="3vh" left="2.5vh" >
                        <SettingsIcon w={8} h={8} color='whiteAlpha.600' />
                </Box>
            </Box>
            <Flex w="95%" h="100vh" >
                <Box 
                    w="50%" h="100vh" borderRight="2px" borderColor='whiteAlpha.300'
                    maxHeight='100vh'
                    overflowY="auto"
                    css={{
                        '&::-webkit-scrollbar' : {
                            display: "none"
                        }
                    }}
                >
                    <Box m="4vh" >
                        <Flex>
                            <Avatar name='Kola Tioluwani' src='https://img.seadn.io/files/a6de476f0b822a8c612b702dcc137d62.png' mr="2vh" />
                            <Text fontSize="2xl" color="whiteAlpha.800" pt="1vh" >fifteen42.eth</Text>
                        </Flex>
                        <Box mt="2vh" >
                            <Text fontSize="2xl" color="whiteAlpha.800" fontWeight="bold" >About me</Text>
                            <Text fontSize="1xl" color="whiteAlpha.700">
                                Web3 full-stack developer. exploring the web3.
                            </Text>
                        </Box>
                        <Box mt="2vh" >
                            <Text fontSize="2xl" color="whiteAlpha.800" fontWeight="bold" >My NFTs and Poaps</Text>
                            <Box>
                                <NftGallery ownerAddress="alex.eth" darkMode={true} galleryContainerStyle={{
                                    maxHeight: '20vh',
                                    overflowY: "auto",
                                }}/>;
                            </Box>
                        </Box>
                        <Box mt="2vh" >
                            <Text fontSize="2xl" color="whiteAlpha.800" fontWeight="bold" >Friends</Text>
                            <Box mt="3vh" >
                                <AvatarGroup size='lg' max={6}>
                                    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                    <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                                    <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                                    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                                    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                                    <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                                    <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                                </AvatarGroup>
                            </Box>
                        </Box>
                        <Box mt="2vh" >
                            <Text fontSize="2xl" color="whiteAlpha.800" fontWeight="bold" >Links</Text>
                            <Box>
                                <Flex my="7px" >
                                    <InlineIcon icon="akar-icons:twitter-fill" color="white" width='25px' height='25px' />
                                    <Text fontSize="15px" color="whiteAlpha.800" >@fifteen42</Text>
                                </Flex>
                                <Flex my="7px" >
                                    <InlineIcon icon="akar-icons:discord-fill" color="white" width='25px' height='25px' />
                                    <Text fontSize="15px" color="whiteAlpha.800" >@fifteen42</Text>
                                </Flex>
                                <Flex my="7px" >
                                    <InlineIcon icon="akar-icons:github-fill" color="white" width='25px' height='25px' />
                                    <Text fontSize="15px" color="whiteAlpha.800" >@fifteen42</Text>
                                </Flex>
                                <Flex my="7px" >
                                    <InlineIcon icon="eva:email-fill" color="white" width='25px' height='25px' />
                                    <Text fontSize="15px" color="whiteAlpha.800" >fifteen42@gmail.com</Text>
                                </Flex>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box
                    w="50%" h="100vh"
                    maxHeight='100vh'
                    overflowY="auto"
                    css={{
                        '&::-webkit-scrollbar' : {
                            display: "none"
                        }
                    }}
                >
                    <Flex  
                        borderBottom="2px" borderColor='whiteAlpha.300'
                    >
                        <Box borderBottom="3px solid white" >
                            <CenterImage src='/images/DeveloperDAO.jpeg'  alt='DeveloperDAO logo'  />
                        </Box>
                        <Spacer />
                        <CenterImage src='/images/nation3.png'  alt='Nation3 logo' />
                        <Spacer />
                        <CenterImage src='/images/PleasrDAO.png' alt='PleasrDAO logo' />
                        <Spacer />
                        <CenterImage src='/images/bankless.png' alt='Bankless logo' />
                        <Spacer />
                        <Spacer />
                    </Flex>
                    <Box m="3vh" >
                        <Flex my="3vh" >
                            <Text fontSize="2xl" color="whiteAlpha.900" fontWeight="bold" pt="2vh" >Sparks🔥</Text>
                            <Spacer />
                            <Text fontSize="5xl" fontWeight="extrabold" color="#FFD700" fontStyle="italic"> 93 </Text>
                        </Flex>
                        <Text mb="1vh" fontSize="2xl" color="whiteAlpha.900" fontWeight="bold" >Activity Heatmap in DAOs</Text>
                        <Calendar values={values} until={until} weekNames={weekNames} monthNames={monthNames} panelColors={panelColors}  />
                    </Box>
                    <Box m="3vh" >
                        <Text fontSize="2xl" color="whiteAlpha.900" fontWeight="bold" pt="2vh" >Data Verified</Text>
                        <SocialDataTable2 />
                    </Box>
                </Box>
            </Flex>
        </Flex>
        
    );
};

const CenterImage: React.ElementType = ({src, alt, borderRight}): JSX.Element => {
    return(
        <Center mx="4vh" my="1vh" borderRight={borderRight}>
            <Image
                boxSize='48px'
                src={src}
                alt={alt}
                border='2px solid #fff'
                borderRadius='5px'
                />
        </Center>
    );
}

const InlineIcon = styled(Icon)`
    display: inline-block;
    margin-right: 4px;
`;

export default Profile;