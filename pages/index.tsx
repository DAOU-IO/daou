import type { NextPage } from 'next';
import MetamaskButton from '../conponents/MetaMaskButton';

import { 
      Box, 
      Button, 
      ButtonGroup, 
      Text, 
      Flex,
      Image,
      Link,
      Spacer,
    } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Home: NextPage = () => {
  return (
    <Box bg='blackAlpha.900' w="100%" h="100vh" >
      <Box px="10vh" pt="5vh" >
        <Flex>
            <Image
              boxSize='64px'
              src='/images/you-oracle.svg'
              alt='DAOU logo'
            />
            <Spacer />
            <Link href='https://github.com/DAOU-IO/daou' >
              <Image
                boxSize='48px'
                src='/images/GitHub.png'
                alt='Github logo'
              />
            </Link>
        </Flex>
        <Box pl="5vh" pt="5vh" my="20px" borderTop="1px" borderBottom="1px" borderColor='whiteAlpha.900' h='38vh' >
          <Box>
            <Text fontSize='6xl' color="whiteAlpha.900" >DAOU</Text>
          </Box>
          <Box mt="3vh" >
            <Text fontSize='6xl' color="whiteAlpha.900" >Make Frens in DAOs.</Text>
          </Box>
        </Box>
        <Box mt='10vh' pl="5vh">
          <MetamaskButton />
        </Box>
        <Box mt='22vh' pl="5vh" >
          <Text fontSize='1xl' color="whiteAlpha.900" >Made With ❤️ By <Link href='https://twitter.com/fifteen42_' >Tingfei</Link></Text>
        </Box>
      </Box>
      <LogoImage
        src="/images/bankless.png"
        bottom='40vh'
        right="-5vh"
      />
      <LogoImage
        src="/images/nation3.png"
        bottom='26vh'
        right="10vh"
      />
      <LogoImage
        src="/images/PleasrDAO.png"
        bottom='10vh'
        right="30vh"
      />
      <LogoImage
        src="/images/DeveloperDAO.jpeg"
        bottom='-5vh'
        right="45vh"
      />
    </Box>
  )
}

const LogoImage = styled(Image)`
  width: 260px;
  border: 3px solid #fff;
  border-radius: 30px;
  transform: rotate(30deg);
  position: fixed;
`;

export default Home;