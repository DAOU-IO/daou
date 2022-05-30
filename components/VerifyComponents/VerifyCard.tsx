import {Flex, Box, Text, Select, Spacer, AvatarGroup, Avatar } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Icon } from "@iconify/react";
import MembersBar from "../MembersBar";

const VerifyCard = () => {
    return(
        <CardBox 
            border="1px" 
            borderColor="whiteAlpha.700"
            borderRadius="20"
        > 
            <Flex>
                <Box>
                    <Text fontSize="1xl" color="whiteAlpha.900" >
                        Data from 
                    </Text>
                </Box>
                <Box ml="1vh" >
                    <InlineIcon icon="akar-icons:twitter-fill" color="white" width='25px' height='25px' />
                    <InlineIcon icon="akar-icons:discord-fill" color="white" width='25px' height='25px'/>
                    <InlineIcon icon="akar-icons:github-fill" color="white" width='25px' height='25px' />
                    <InlineIcon icon="bxl:discourse" color="white" width='25px' height='25px' />
                </Box>
                <Spacer/>
                <Box>
                    <VState>
                        Verified
                    </VState>
                </Box>
            </Flex>
            <MembersBar />
            <Flex>
                <Box>
                    <Text fontSize="1xl" color="gray" fontWeight="bold" >
                        [SO2093457242345]
                    </Text>
                </Box>
                <Spacer />
                <Box>
                    <Text fontSize="1xl" color="gray" fontWeight="bold" >
                        2022-05-30 17:08:06
                    </Text>
                </Box>
            </Flex>
        </CardBox>
    );
};

export const VState = styled(Box)`
    color: white;
    font-size: 2vh;
    border-radius: 10px;
    background-color: purple;
    padding: 4px;
`;

export const AState = styled(Box)`
    color: white;
    font-size: 2vh;
    border-radius: 10px;
    background-color: green;
    padding: 4px;
`;

const CardBox = styled(Box)`
    margin-bottom: 2vh;
    padding: 2vh;
    &:hover {
        border-color: white;
    }
`;

const InlineIcon = styled(Icon)`
    display: inline-block;
    margin-right: 4px;
`;

export default VerifyCard;