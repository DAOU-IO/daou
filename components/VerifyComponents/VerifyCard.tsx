import {Flex, Box, Text, Select, Spacer, AvatarGroup, Avatar } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Icon } from "@iconify/react";
import MembersBar from "../MembersBar";
import Link from "next/link";

export interface VerifyCardProps {
    closed: boolean;
    sparks: number;
    startTime: string;
    endTime: string;
};

const renderState = (closed: boolean) => {
    if (closed) {
        return(
            <VState>
                Verified
            </VState>
        );
    } else {
        return(
            <AState>
                Active
            </AState>
        );
    }
};

const VerifyCard: React.ElementType = ({closed, sparks,startTime, endTime}: VerifyCardProps) => {
    return(
        <Link href="details" >
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
                    {renderState(closed)}
                </Box>
            </Flex>
            <MembersBar s={sparks} />
            <Flex>
                <Box>
                    <Text fontSize="1xl" color="gray" fontWeight="bold" >
                        [SO2093457242345]
                    </Text>
                </Box>
                <Spacer />
                <Box>
                    <Text fontSize="1xl" color="gray" fontWeight="bold" >
                        {startTime}
                    </Text>
                </Box>
            </Flex>
        </CardBox>
        </Link>
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