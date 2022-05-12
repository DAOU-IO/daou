import { Box, Center, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import styled from "@emotion/styled";
import { SettingsIcon, AddIcon } from '@chakra-ui/icons';
import DaoNav from "../components/DaoNav";
import React, { useState } from "react";

export type daoNavType = "info" | "people" | "twitter" | "onboard";

export const Graph: React.ElementType = () => {

    const [daoNavState, setDaoNavState] = useState<daoNavType>("info");

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
                <CenterImage src='/images/DeveloperDAO.jpeg'  alt='DeveloperDAO logo' borderRight='3px solid #fff' />
                <CenterImage src='/images/nation3.png'  alt='Nation3 logo' />
                <CenterImage src='/images/PleasrDAO.png' alt='PleasrDAO logo' />
                <CenterImage src='/images/bankless.png' alt='Bankless logo' />
                <Center my="4vh">
                    <Center w='48px' h='48px' border='2px dotted #fff' borderRadius='5px' color='whiteAlpha.700' >
                            <AddIcon w={6} h={6} />
                    </Center>
                </Center>
                <Box pos='absolute' bottom="3vh" left="2.5vh" >
                        <SettingsIcon w={8} h={8} color='whiteAlpha.600' />
                </Box>
            </Box>
            <Box w="70%" h="100vh" >

            </Box>
            <Box w="25%" h="100vh" borderLeft="2px" borderColor='whiteAlpha.300' >
                <DaoNav daoNavState={daoNavState} setDaoNavState={setDaoNavState} />
            </Box>
        </Flex>
        
    );
};

const CenterImage: React.ElementType = ({src, alt, borderRight}): JSX.Element => {
    return(
        <Center my="4vh" borderRight={borderRight}>
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

export default Graph;