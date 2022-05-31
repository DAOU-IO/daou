import { SearchIcon } from "@chakra-ui/icons";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/input";
import { Box, List, ListItem, VStack } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/avatar";
import { Text } from "@chakra-ui/layout";
import {faker} from "@faker-js/faker";
import Link from "next/link";

const DaoPeople = () => {

    const peopleData = [
        {
          id: '1',
          avatar: 'https://img.seadn.io/files/a6de476f0b822a8c612b702dcc137d62.png',
          name: 'fifteen42.eth'
        },
        {
          id: '2',
          name: 'rosalia.eth',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/113.jpg'
        },
        {
          id: '3',
          name: 'arden.eth',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/86.jpg'
        },
        {
          id: '4',
          name: 'dustin.eth',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1068.jpg'
        },
        {
          id: '5',
          name: 'deven.eth',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/651.jpg'
        },
        {
          id: '6',
          name: 'melisa.eth',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/431.jpg'
        },
        {
          id: '7',
          name: 'emil.eth',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/35.jpg'
        },
        {
          id: '8',
          name: 'casper.eth',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/407.jpg'
        },
        {
          id: '9',
          name: 'rosina.eth',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/157.jpg'
        },
        {
          id: '10',
          name: 'julio.eth',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/211.jpg'
        },
        {
          id: '11',
          name: 'columbus.eth',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/491.jpg'
        },
        {
          id: '12',
          name: 'hailie.eth',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1.jpg'
        },
        {
          id: '13',
          name: 'jessie.eth',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/81.jpg'
        },
        {
          id: '14',
          name: 'adonis.eth',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1009.jpg'
        },
        {
          id: '15',
          name: 'theodore.eth',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/222.jpg'
        },
        {
          id: '16',
          name: 'ambrose.eth',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/377.jpg'
        },
        {
          id: '17',
          name: 'bettye.eth',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/761.jpg'
        },
        {
          id: '18',
          name: 'gordon.eth',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/905.jpg'
        },
        {
          id: '19',
          name: 'leland.eth',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/117.jpg'
        },
        {
          id: '20',
          name: 'candido.eth',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1226.jpg'
        },
        {
          id: '21',
          name: 'roselyn.eth',
          avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/161.jpg'
        }
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
                        <Link href="profile" >
                            <ListItem my="2vh" key={person.id} >
                                    <Avatar name={person.name} src={person.avatar} w={10} h={10} mr='3vh'  />
                                    <Text fontSize='2xl' color='whiteAlpha.700' display='inline-block' h={10}  >{person.name}</Text>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Box>
        </Box>
    );
};



export default DaoPeople;