import { Box, Text } from "@chakra-ui/layout";

const DaoInfo = () => {
    return(
        <Box pl="3vh" pt="2vh" >
            <Box>
                <Text fontSize='3xl' color="whiteAlpha.900"  >Our Mission</Text>
            </Box>
            <Box>
                <Text fontSize='2xl' color="whiteAlpha.800"  >
                    Developer DAO exists to accelerate the education and impact of a new wave of web3 builders.
                </Text>
            </Box>
        </Box>
    );
};

export default DaoInfo;