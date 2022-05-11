import styled from "@emotion/styled";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";

const MetamaskButton = () => {
    return (
        <LoginButton>
            <Image
                boxSize='64px'
                src='/images/MetaMask_Fox.svg'
                alt='MetaMask Fox Logo'
                mr='20px'
            />
            <Text color='blackAlpha.900' fontSize='2xl' >Connect Metamask</Text>
        </LoginButton>
    );
};

const LoginButton = styled(Button)`
    width: 360px;
    height: 70px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 
        12px 12px #000,
        13px 13px #fff;
`;

export default MetamaskButton;