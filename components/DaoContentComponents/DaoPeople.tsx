import { SearchIcon } from "@chakra-ui/icons";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/input";
import { Box, List, ListItem, VStack } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { Text } from "@chakra-ui/layout";
import styled from "@emotion/styled";

const DaoPeople = () => {

    const peopleData = [
        {
            "id":"1",
            "avatar": "https://img.seadn.io/files/a6de476f0b822a8c612b702dcc137d62.png",
            "name":"joehuang.eth"
        },
        {
            "id":"2",
            "avatar" : "https://img.seadn.io/files/c3af547bf9c7cfff8eb0be5303623cb7.png?auto=format",
            "name":"Cat God"
        },
        {
            "id":"3",
            "avatar": "https://img.seadn.io/files/a6de476f0b822a8c612b702dcc137d62.png",
            "name":"joehuang.eth"
        },
        {
            "id":"4",
            "avatar" : "https://img.seadn.io/files/c3af547bf9c7cfff8eb0be5303623cb7.png?auto=format",
            "name":"Cat God"
        },
        {
            "id":"5",
            "avatar": "https://img.seadn.io/files/a6de476f0b822a8c612b702dcc137d62.png",
            "name":"joehuang.eth"
        },
        {
            "id":"6",
            "avatar" : "https://img.seadn.io/files/c3af547bf9c7cfff8eb0be5303623cb7.png?auto=format",
            "name":"Cat God"
        },
        {
            "id":"7",
            "avatar": "https://img.seadn.io/files/a6de476f0b822a8c612b702dcc137d62.png",
            "name":"joehuang.eth"
        },
        {
            "id":"8",
            "avatar" : "https://img.seadn.io/files/c3af547bf9c7cfff8eb0be5303623cb7.png?auto=format",
            "name":"Cat God"
        },
        {
            "id":"9",
            "avatar": "https://img.seadn.io/files/a6de476f0b822a8c612b702dcc137d62.png",
            "name":"joehuang.eth"
        },
        {
            "id":"10",
            "avatar" : "https://img.seadn.io/files/c3af547bf9c7cfff8eb0be5303623cb7.png?auto=format",
            "name":"Cat God"
        },
        {
            "id":"11",
            "avatar": "https://img.seadn.io/files/a6de476f0b822a8c612b702dcc137d62.png",
            "name":"joehuang.eth"
        },
        {
            "id":"12",
            "avatar" : "https://img.seadn.io/files/c3af547bf9c7cfff8eb0be5303623cb7.png?auto=format",
            "name":"Cat God"
        },
        {
            "id":"13",
            "avatar" : "https://img.seadn.io/files/c3af547bf9c7cfff8eb0be5303623cb7.png?auto=format",
            "name":"Cat God"
        },
        {
            "id":"14",
            "avatar": "https://img.seadn.io/files/a6de476f0b822a8c612b702dcc137d62.png",
            "name":"joehuang.eth"
        },
        {
            "id":"15",
            "avatar" : "https://img.seadn.io/files/c3af547bf9c7cfff8eb0be5303623cb7.png?auto=format",
            "name":"Cat God"
        },
        
    ];

    return(
        <Box>
            <Box m='1vh' >
                <InputGroup>
                    <InputLeftElement 
                        pointerEvents='none'
                    >
                        <SearchIcon color='whiteAlpha.700' w='25px' h='25px' />
                    </InputLeftElement>
                    <Input placeholder='Name or Address' borderColor='whiteAlpha.700' color="white" />
                </InputGroup>
            </Box>
            <Box  m='1vh' ml="2vh" >
                <List maxHeight='85vh'
                    overflowY="auto"
                    css={{
                        '&::-webkit-scrollbar' : {
                            display: "none"
                        }
                    }} 
                >
                    {peopleData.map((person) => (
                        <ListItem my="2vh" key={person.id} >
                            <Avatar name={person.name} src={person.avatar} w={10} h={10} mr='3vh'  />
                            <Text fontSize='2xl' color='whiteAlpha.700' display='inline-block' h={10}  >{person.name}</Text>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
};

export default DaoPeople;