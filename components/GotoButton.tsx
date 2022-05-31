import { Text, Button } from "@chakra-ui/react"
import styled from "@emotion/styled";
import Link from "next/link";

const GotoButton = () => {
  return (
      <Link href="/dashboard" >
        <LoginButton>
            <Text color='blackAlpha.900' fontSize='2xl' >Go to the Dashboard</Text>
        </LoginButton>
      </Link>
  );
};

const LoginButton = styled(Button)`
  width: 360px;
  height: 70px;
  background: #fff;
`;

export default GotoButton;