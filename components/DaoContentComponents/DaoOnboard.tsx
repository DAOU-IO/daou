import { Box, Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/layout";
import { Icon } from "@iconify/react";

const DaoOnboard = () => {
    
    const checkedIcon = () => {
        return <Icon icon="typcn:input-checked" color="white" width='32px' height='32px' display='inline-block' />;
    }

    const unCheckedIcon = () => {
        return <Icon icon="fluent:checkbox-unchecked-16-regular" color="white" width='32px' height='32px' display='inline-block'/>;
    }

    return(
        <>
        <Box ml='3vh'>
            <Text fontSize='2xl' color='whiteAlpha.700' >Dao Member Twitter</Text>
        </Box>
        <Box m="3vh" >
            <List spacing={10}>
                <ListItem color="white" >
                    <Flex>
                        <ListIcon as={checkedIcon}  />
                        <Text color='whiteAlpha.900' fontSize='20px'>Get your Access (NFT)</Text>
                    </Flex>
                </ListItem>
                <ListItem color="white" >
                    <Flex>
                        <ListIcon as={unCheckedIcon} />
                        <Text color='whiteAlpha.900' fontSize='20px'>Gm and introduce Yourself</Text>
                    </Flex>
                </ListItem>
                <ListItem color="white" >
                    <Flex>
                        <ListIcon as={unCheckedIcon} />
                        <Text color='whiteAlpha.900' fontSize='20px'>Choose Guild and  Get a mentor</Text>
                    </Flex>
                </ListItem>
                <ListItem color="white" >
                    <Flex>
                        <ListIcon as={unCheckedIcon} />
                        <Text color='whiteAlpha.900' fontSize='20px'>Follow some DAO Frens</Text>
                    </Flex>
                </ListItem>
                <ListItem color="white" >
                    <Flex>
                        <ListIcon as={unCheckedIcon} />
                        <Text color='whiteAlpha.900' fontSize='20px'>Here we Go</Text>
                    </Flex>
                </ListItem>
            </List>
        </Box>
        </>
    );
};

export default DaoOnboard;